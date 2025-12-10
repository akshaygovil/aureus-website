"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error" | "already";

export default function WaitlistPage() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "loading") return; // guard

    setStatus("loading");

    const form = new FormData(e.currentTarget);
    const payload = {
      firstName: form.get("firstName"),
      email: form.get("email"),
      platform: form.get("platform"),
    };

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        body: JSON.stringify(payload),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok) {
        if (data.already) setStatus("already");
        else setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  }

  const isLoading = status === "loading";

  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-6"
      style={{
        background: "linear-gradient(135deg, #0D1B3D 0%, #3E5BA9 100%)",
      }}
    >
      <div
        className="backdrop-blur-xl rounded-3xl shadow-2xl p-10 max-w-lg w-full border"
        style={{
          backgroundColor: "rgba(255,255,255,0.05)",
          borderColor: "rgba(255,255,255,0.1)",
        }}
      >
        <h1
          className="text-4xl font-extrabold text-center mb-4"
          style={{ color: "#F6F8FA" }}
        >
          Join the Waitlist ✨
        </h1>

        <p className="text-center mb-8" style={{ color: "#8A94A6" }}>
          Be the first to access the platform and receive exclusive early updates.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* First Name */}
          <div>
            <label className="block mb-1" style={{ color: "#E9EDF3" }}>
              First Name
            </label>
            <input
              required
              name="firstName"
              type="text"
              placeholder="John"
              className="w-full px-4 py-3 rounded-xl outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#F6F8FA",
              }}
            />
          </div>

          {/* Email */}
          <div>
            <label className="block mb-1" style={{ color: "#E9EDF3" }}>
              Email
            </label>
            <input
              required
              name="email"
              type="email"
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#F6F8FA",
              }}
            />
          </div>

          {/* Platform Choice */}
          <div>
            <label className="block mb-1" style={{ color: "#E9EDF3" }}>
              Preferred Platform
            </label>
            <select
              required
              name="platform"
              className="w-full px-4 py-3 rounded-xl outline-none"
              style={{
                backgroundColor: "rgba(255,255,255,0.15)",
                color: "#F6F8FA",
              }}
            >
              <option value="iOS" className="text-black">
                iOS
              </option>
              <option value="Android" className="text-black">
                Android
              </option>
            </select>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-xl font-semibold transition-transform hover:scale-[1.02] disabled:opacity-60 disabled:hover:scale-100"
            style={{
              background: "linear-gradient(90deg, #D4AF37, #B78A2E)",
              color: "#0D1B3D",
            }}
          >
            {isLoading ? "Joining..." : "Join Waitlist"}
          </button>
        </form>

        {/* Feedback */}
        {status === "success" && (
          <p className="text-center mt-4" style={{ color: "#E9C85B" }}>
            🎉 You're officially on the list!
          </p>
        )}
        {status === "already" && (
          <p className="text-center mt-4" style={{ color: "#E9C85B" }}>
            ⭐ You're already on the waitlist!
          </p>
        )}
        {status === "error" && (
          <p className="text-center mt-4" style={{ color: "#ff8b8b" }}>
            Something went wrong — try again!
          </p>
        )}
      </div>
    </div>
  );
}
