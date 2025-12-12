import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";
import { Resend } from "resend";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const { firstName, email, platform } = await req.json();

    if (!firstName || !email || !platform) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    // Try to insert – UNIQUE(email) will throw if duplicate
    const { error } = await supabase
      .from("waitlist")
      .insert({ firstName, email, platform });

    if (error) {
      console.error("Supabase insert error:", error);

      // 23505 = unique_violation in Postgres
      if ((error as any).code === "23505") {
        return NextResponse.json({ already: true }, { status: 200 });
      }

      return NextResponse.json(
        { error: "Database insert failed" },
        { status: 500 }
      );
    }

  const userhtml = `
    <div style="
      width: 100%;
      background: #0B162F;
      padding: 60px 0;
      font-family: 'Inter', sans-serif;
    ">
      <div style="
        max-width: 600px;
        margin: 0 auto;
        background: #0D1B3D;
        border-radius: 24px;
        padding: 48px 40px;
        color: #F6F8FA;
        box-shadow: 0 12px 40px rgba(0,0,0,0.4);
      ">
        
        <h1 style="
          font-size: 32px;
          font-weight: 800;
          color: #D4AF37;
          margin: 0 0 16px;
          text-align: center;
        ">
          Welcome to Aureus ✨
        </h1>

        <p style="
          font-size: 17px;
          line-height: 1.7;
          opacity: 0.95;
          margin: 0 0 40px;
          text-align: center;
        ">
          Hey ${firstName || "there"},<br/>
          Thank you for joining the Aureus waitlist. You're now part of an
          early group shaping the future of intelligent, data-driven training.
        </p>

        <div style="
          background: #131F44;
          padding: 28px 24px;
          border-radius: 16px;
          margin-bottom: 40px;
          text-align: center;
          border: 1px solid rgba(255,255,255,0.06);
        ">
          <p style="
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
            opacity: 0.9;
          ">
            You'll be among the first to receive early access when Aureus opens its doors.          </p>
        </div>

        <p style="
          font-size: 14px;
          opacity: 0.7;
          text-align: center;
          margin-bottom: 0;
        ">
          — The Aureus Team
        </p>
      </div>

      <div style="height: 90px;"></div> <!-- extra breathing space -->

    </div>
  `;


    // Send confirmation email only for NEW signups
    try {
      await resend.emails.send({
        from: "Aureus Waitlist <noreply@aureus.fit>", // safe default
        to: email,
        subject: "You're on the Aureus waitlist 🎉",
        html: userhtml,
      });
    } catch (emailErr) {
      console.error("Resend email error:", emailErr);
      // We don't fail the request if email sending breaks
    }

    const signupTime = new Date().toLocaleString("en-US", {
      dateStyle: "medium",
      timeStyle: "short",
    });

    try {
      await resend.emails.send({
        from: "Aureus Notifications <noreply@aureus.fit>",
        to: 'akshaygovil913@gmail.com',
        subject: "🚀 New Waitlist Signup for your app",
        html: `
          <div style="font-family:Inter,sans-serif;">
            <h2>New Aureus Waitlist Signup</h2>
            <p><strong>Name:</strong> ${firstName}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Platform:</strong> ${platform}</p>
            <p><strong>Time:</strong> ${signupTime}</p>
          </div>
        `,
      });
    } catch (err) {
      console.error("Admin email failed:", err);
    }    

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
