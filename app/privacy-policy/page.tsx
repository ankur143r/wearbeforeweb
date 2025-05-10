import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/app/components/logo"

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-gradient-to-r from-slate-900 to-slate-800 text-white py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between">
            <Logo />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-8">
          <Link href="/" className="text-blue-500 hover:text-blue-700 flex items-center">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h1 className="text-3xl font-bold mb-6">Privacy Policy for WearBefore_bot and wearbefore.com</h1>
          <p className="text-gray-600 mb-6">Effective Date: April 30, 2025</p>

          <div className="prose prose-blue max-w-none">
            <h2 className="text-xl font-bold mt-6 mb-3">Introduction</h2>
            <p>
              At WearBefore, we value your privacy and are committed to protecting your personal information. This
              Privacy Policy explains how we collect, use, store, share, and protect your personal information when you
              use our Telegram bot WearBefore_bot and the website wearbefore.com (collectively, "Services"). By
              accessing or using our Services, you agree to the terms of this Privacy Policy.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">Scope of this Policy</h2>
            <p>
              This Privacy Policy applies to all services provided by WearBefore, including virtual try-on processing
              via WearBefore_bot and informational content and payments via wearbefore.com. It outlines how we collect,
              use, share, and safeguard your personal information. Third-party services integrated with our platform
              (e.g., Telegram, Razorpay) have their own privacy policies, which we encourage you to review.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">1. Information We Collect</h2>
            <p>We collect the following types of information:</p>
            <p>
              <strong>Direct Collection:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                For WearBefore_bot: Your Telegram user ID and email address (if provided). You agree to provide true,
                accurate, current, and complete information.
              </li>
              <li>
                For wearbefore.com: Email address (if provided for payment processing or inquiries). No user accounts
                are created on wearbefore.com.
              </li>
              <li>
                User-generated content: Images you upload to WearBefore_bot for virtual try-on processing, which may
                include garment-related content (e.g., clothing or accessories). You represent and warrant that you have
                all necessary permissions to upload these images, that they comply with applicable laws, and that they
                do not violate third-party rights (e.g., privacy, intellectual property).
              </li>
            </ul>

            <p>
              <strong>Automatic Collection:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Device information: Device type, operating system, browser type, and IP address, collected via
                wearbefore.com.
              </li>
              <li>
                Usage data: Interactions with our Services, such as pages visited and features used, tracked via Google
                Analytics and Meta Pixel on wearbefore.com.
              </li>
              <li>
                Log data: Server logs and webhook payloads (processed by webhook providers) to ensure functionality and
                security.
              </li>
              <li>Cookies and similar technologies: Used for analytics and advertising on wearbefore.com.</li>
            </ul>

            <p>
              <strong>Third-Party Information:</strong> Limited data may be received from third-party service providers
              (e.g., Telegram for bot operation, Razorpay for payments). We do not collect data from social media
              integrations (e.g., Facebook or Google logins).
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">2. How We Use Your Information</h2>
            <p>We use your information to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Provide virtual try-on services via WearBefore_bot.</li>
              <li>
                Provide informational content (e.g., FAQs, bot functionality) and process payments via wearbefore.com.
              </li>
              <li>Process payments through Telegram Stars or Razorpay.</li>
              <li>Troubleshoot issues or resolve disputes, using temporarily stored images.</li>
              <li>Respond to customer inquiries and provide support.</li>
              <li>Communicate with you regarding updates, offers, and service improvements.</li>
              <li>Analyze website usage and improve our Services via Google Analytics and Meta Pixel.</li>
              <li>Serve personalized advertisements through Google Ads and Meta Ads on wearbefore.com.</li>
              <li>
                Maintain and enhance the functionality and security of our Services, including monitoring for prohibited
                content.
              </li>
              <li>
                Enforce our Terms and Conditions, including removing or restricting content that violates our policies
                or applicable laws.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-3">3. Data Storage and Retention</h2>
            <p>
              <strong>User Images:</strong> Images uploaded to WearBefore_bot are stored securely for up to 72 hours to
              facilitate troubleshooting and dispute resolution. They are automatically deleted after this period unless
              a dispute is raised.
            </p>
            <p>
              <strong>Other Data:</strong> We retain personal, payment, and analytics data only as long as necessary to
              fulfill the purposes outlined in this policy, including compliance with legal, accounting, or reporting
              requirements.
            </p>
            <p>
              <strong>Third-Party Processing:</strong> Payment and virtual try-on data may be processed by third-party
              service providers under industry-standard data protection agreements.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">4. Data Sharing</h2>
            <p>We share your information only in the following cases:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>With Your Consent:</strong> When you explicitly agree to data sharing.
              </li>
              <li>
                <strong>Third-Party Service Providers:</strong> We use trusted providers for virtual try-on processing,
                payment processing, webhook services, infrastructure hosting, analytics (Google Analytics, Meta Pixel),
                and advertising (Google Ads, Meta Ads). These providers are bound by data protection agreements.
              </li>
              <li>
                <strong>Razorpay:</strong> Payments via wearbefore.com are processed by Razorpay, subject to their
                Privacy Policy (
                <a
                  href="https://razorpay.com/privacy/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://razorpay.com/privacy/
                </a>
                ).
              </li>
              <li>
                <strong>Telegram:</strong> Limited data (e.g., Telegram user ID) may be shared with Telegram to operate
                WearBefore_bot, as per Telegram's Privacy Policy (
                <a
                  href="https://telegram.org/privacy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://telegram.org/privacy
                </a>
                ).
              </li>
              <li>
                <strong>Legal Obligations:</strong> We may disclose data if required by applicable laws, to respond to
                valid legal requests, or to protect the rights, safety, or property of WearBefore, our users, or the
                public.
              </li>
              <li>
                <strong>Business Transactions:</strong> We may share data in connection with corporate restructuring,
                mergers, acquisitions, or other business transactions.
              </li>
            </ul>
            <p>We do not sell your personal information to third parties.</p>

            <h2 className="text-xl font-bold mt-6 mb-3">5. Data Protection</h2>
            <p>
              We implement physical, technical, and organizational measures, including encryption and access controls,
              to protect your data, including uploaded images. In the event of a data breach, we will promptly notify
              affected users and take necessary steps to mitigate risks and protect your data. However, no system is
              completely secure, and we cannot guarantee absolute security against unauthorized access or disruptions.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">6. Your Rights</h2>
            <p>Under applicable data protection laws, you may have the right to:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Access the personal data we hold about you (e.g., Telegram user ID, images).</li>
              <li>Request correction of inaccurate data (e.g., email).</li>
              <li>Request deletion of your data (e.g., images).</li>
              <li>Object to or restrict certain data processing, such as analytics or ads.</li>
              <li>Withdraw consent for data processing, where applicable.</li>
              <li>Request data portability, where supported by law.</li>
            </ul>

            <p>
              <strong>Region-Specific Rights:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>EEA, UK, and Swiss Users (GDPR):</strong> You may withdraw consent at any time, lodge a
                complaint with a supervisory authority, and request access, correction, or deletion of your data.
              </li>
              <li>
                <strong>California Users (CCPA):</strong> You may opt out of the sale of your personal information (we
                do not sell data) and request details about the personal information we collect, use, or share.
              </li>
            </ul>

            <p>
              To exercise these rights, contact us at{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
              . For Telegram data, you may also manage settings via Telegram Settings &gt; Privacy &amp; Security &gt;
              Data Settings, as per Telegram's Privacy Policy.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">7. Cookies and Consent</h2>
            <p>
              Our website, wearbefore.com, uses cookies and similar technologies for analytics (Google Analytics, Meta
              Pixel) and advertising (Google Ads, Meta Ads). We implement a consent management system, allowing you to
              accept or decline non-essential cookies. You can also manage cookie preferences through your browser
              settings.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">8. Third-Party Policies</h2>
            <p>Your use of our Services involves third-party platforms with their own policies, including:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Razorpay:</strong> Governs payment processing via wearbefore.com (
                <a
                  href="https://razorpay.com/privacy/"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://razorpay.com/privacy/
                </a>
                ).
              </li>
              <li>
                <strong>Telegram:</strong> Governs bot interactions (
                <a
                  href="https://telegram.org/privacy"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://telegram.org/privacy
                </a>
                ).
              </li>
              <li>
                <strong>Virtual Try-On Provider:</strong> Processes images for virtual try-on, subject to their data
                protection policies.
              </li>
            </ul>
            <p>We encourage you to review these policies before using our Services.</p>

            <h2 className="text-xl font-bold mt-6 mb-3">9. International Data Transfers</h2>
            <p>
              Your data may be processed in countries outside your location by our service providers. We ensure such
              transfers comply with applicable data protection laws, using measures like data protection agreements.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">10. Children's Privacy</h2>
            <p>
              Our Services are not intended for users under 18 (or the legal age of digital consent in your
              jurisdiction). Users below this age must use the Services under parental supervision. We do not knowingly
              collect data from children. If you believe we have collected such data, please contact us at{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
              .
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">11. Contact Us</h2>
            <p>For questions, concerns, or to exercise your rights, contact us at:</p>
            <p>
              Email:{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
            </p>
            <p>Address: 1119, Sector 14P, Hisar, Haryana, 125001, India</p>

            <h2 className="text-xl font-bold mt-6 mb-3">12. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy at our discretion. Changes will be posted on wearbefore.com with an
              updated effective date and, where required, notified via WearBefore_bot. Your continued use of our
              Services after changes are posted constitutes acceptance of the updated policy.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-6">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="/terms-and-conditions" className="text-gray-400 hover:text-white transition-colors">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="text-gray-400 hover:text-white transition-colors">
              Privacy Policy
            </Link>
          </div>
          <p className="text-gray-400">Copyright © {new Date().getFullYear()} WearBefore Inc. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
