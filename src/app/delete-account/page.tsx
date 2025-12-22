import { EMAIL_ADRESS } from "../assets/constants";

export const metadata = {
  title: "Delete Your Account – Aureus",
  description:
    "Request deletion of your Aureus account and associated personal data.",
};

export default function DeleteAccountPage() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 px-6 py-16">
      <div className="mx-auto max-w-3xl space-y-10">
        {/* Header */}
        <header className="space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Delete Your Aureus Account
          </h1>
          <p className="text-neutral-400">
            This page explains how you can request deletion of your Aureus
            account and associated data.
          </p>
        </header>

        {/* Section: How to delete */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">How to request account deletion</h2>
          <ol className="list-decimal list-inside space-y-2 text-neutral-300">
            <li>
              Send an email from the address associated with your Aureus account
              to:
              <br />
              <span className="font-medium text-neutral-100">
                {EMAIL_ADRESS}
              </span>
            </li>
            <li>
              Use the subject line:
              <br />
              <span className="font-medium text-neutral-100">
                Account Deletion Request
              </span>
            </li>
            <li>
              Include your full name and the email address used to sign in.
            </li>
          </ol>
        </section>

        {/* Section: Data deleted */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">What data is deleted</h2>
          <ul className="list-disc list-inside space-y-2 text-neutral-300">
            <li>User profile information</li>
            <li>Workout history and training logs</li>
            <li>Exercise preferences and settings</li>
            <li>Analytics and usage data linked to your account</li>
          </ul>
        </section>

        {/* Section: Retention */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">Deletion timeframe</h2>
          <p className="text-neutral-300">
            Account deletion requests are processed within{" "}
            <span className="font-medium text-neutral-100">30 days</span>.
          </p>
          <p className="text-neutral-400 text-sm">
            Some data may be retained for a limited period if required to comply
            with legal or regulatory obligations.
          </p>
        </section>

        {/* Section: Google Sign-In note */}
        <section className="space-y-4">
          <h2 className="text-xl font-medium">Google Sign-In users</h2>
          <p className="text-neutral-300">
            If you created your account using Google Sign-In, requesting account
            deletion through the steps above will fully remove your Aureus
            account and associated data. This does not affect your Google
            account.
          </p>
        </section>

        {/* Footer */}
        <footer className="pt-10 border-t border-neutral-800 text-sm text-neutral-500">
          <p>
            Aureus is a fitness and training analytics application. If you have
            questions about data privacy, contact{" "}
            <span className="text-neutral-300">{EMAIL_ADRESS}</span>.
          </p>
        </footer>
      </div>
    </main>
  );
}
