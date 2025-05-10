import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Logo } from "@/app/components/logo"

export default function TermsAndConditionsPage() {
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
          <h1 className="text-3xl font-bold mb-6">Terms and Conditions for WearBefore_bot and wearbefore.com</h1>
          <p className="text-gray-600 mb-6">Effective Date: April 30, 2025</p>

          <div className="prose prose-blue max-w-none">
            <p>
              These Terms and Conditions ("Terms") govern your use of the Telegram bot WearBefore_bot and the website
              wearbefore.com (collectively, "Services"), operated by WearBefore ("we," "us," or "our"). WearBefore_bot
              provides virtual try-on services, while wearbefore.com offers informational content (e.g., FAQs, bot
              functionality) and payment processing. By using our Services, you agree to be bound by these Terms, our
              Privacy Policy, and any applicable third-party terms. If you do not agree, do not use our Services.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing WearBefore_bot or wearbefore.com, you confirm you are at least 18 years old (or the legal age
              of digital consent in your jurisdiction). Users below this age must use the Services under parental
              supervision. You acknowledge that you have read, understood, and agree to be bound by these Terms, our
              Privacy Policy, and any community guidelines or policies posted on our platform. You also agree to comply
              with the terms of our third-party service providers (e.g., payment and virtual try-on providers), where
              applicable, including:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Razorpay Terms and Conditions: For payments via wearbefore.com (
                <a
                  href="https://razorpay.com/sg/tnc"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://razorpay.com/sg/tnc
                </a>
                ).
              </li>
              <li>
                Telegram Bot Platform Developer Terms of Service: For bot usage (
                <a
                  href="https://telegram.org/tos/bot-developers"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://telegram.org/tos/bot-developers
                </a>
                ).
              </li>
            </ul>
            <p>If you do not agree with any part of these Terms, you must not use our Services.</p>

            <h2 className="text-xl font-bold mt-6 mb-3">2. Description of Services</h2>
            <p>
              WearBefore_bot provides virtual try-on services for clothing and accessories within Telegram.
              wearbefore.com is a landing page providing information about the bot's functionality, FAQs, and payment
              processing via Razorpay. No user accounts are created on wearbefore.com.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">3. User Responsibilities</h2>
            <p>
              <strong>Information Accuracy:</strong> You agree to provide true, accurate, current, and complete
              information (e.g., Telegram user ID, email) when using WearBefore_bot or making payments via
              wearbefore.com, and to promptly update it to keep it accurate.
            </p>
            <p>
              <strong>Security:</strong> You are responsible for maintaining the confidentiality of any information used
              to access WearBefore_bot (e.g., Telegram account). You agree to notify us immediately of any unauthorized
              use or security breach at{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
              . We are not liable for losses due to unauthorized access resulting from your failure to comply with this
              section.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">4. Acceptable Use</h2>
            <p>
              You agree to use our Services only for lawful purposes and in accordance with these Terms and any
              community guidelines we may publish. You represent and warrant that you have all necessary permissions to
              upload images to WearBefore_bot and that your use of the Services complies with applicable laws and does
              not infringe third-party rights (e.g., privacy, intellectual property). You must not:
            </p>
            <p>Upload or generate content that is:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>Illegal, obscene, pornographic, or harmful to minors.</li>
              <li>Defamatory, harassing, or invasive of another's privacy.</li>
              <li>
                Promoting violence, discrimination, or hate speech based on race, gender, religion, or other protected
                characteristics.
              </li>
              <li>Infringing on intellectual property, trade secrets, or other proprietary rights.</li>
              <li>False, misleading, or misrepresenting the identity of individuals in uploaded images.</li>
            </ul>
            <ul className="list-disc pl-6 mb-4">
              <li>Upload images of individuals without their explicit consent.</li>
              <li>Use our Services to send spam, scams, or engage in fraudulent or deceptive activities.</li>
              <li>
                Attempt to interfere with, compromise, or bypass the security, integrity, or functionality of our
                Services, including:
                <ul className="list-disc pl-6 mt-2">
                  <li>Using automated systems (e.g., bots, spiders) to access or scrape the Services.</li>
                  <li>Introducing viruses, malware, or other harmful code.</li>
                  <li>Attempting to reverse-engineer, decompile, or hack our software or algorithms.</li>
                  <li>Bypassing measures to restrict access or content.</li>
                </ul>
              </li>
              <li>
                Violate Telegram's{" "}
                <a
                  href="https://telegram.org/tos"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Terms of Service
                </a>{" "}
                or third-party terms (e.g., Razorpay).
              </li>
            </ul>
            <p>
              We reserve the right to remove or restrict content, suspend, or terminate your access to WearBefore_bot
              for violations, at our sole discretion. We may report illegal content or activities to relevant
              authorities.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">5. Content Responsibility and Liability</h2>
            <p>
              <strong>User Responsibility:</strong> You are solely responsible for the images you upload and the content
              you generate using WearBefore_bot. We act as a passive conduit for your content and are not involved in
              its creation or development. You agree to indemnify, defend, and hold WearBefore, its affiliates, and
              service providers harmless from any claims, damages, liabilities, or costs (including legal fees) arising
              from your use of the Services, including unauthorized, infringing, or prohibited content.
            </p>
            <p>
              <strong>No Liability for Misuse:</strong> WearBefore is not liable for any loss, damage, or harm resulting
              from user-generated content or misuse of our Services, including unauthorized image uploads,
              misrepresentation, or objectionable content. We provide the Services "as is" and do not endorse, verify,
              or assume responsibility for user content.
            </p>
            <p>
              <strong>Content Moderation:</strong> We may, but are not obligated to, monitor, review, or filter
              user-generated content. We may remove, restrict, or refuse to process content that violates these Terms,
              our community guidelines, or applicable laws without notice. We may also take action against users
              involved in such violations.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">6. Service Availability</h2>
            <p>
              Our Services rely on third-party platforms and providers (e.g., Telegram, Razorpay, virtual try-on
              provider) and may be subject to interruptions, delays, or outages due to network failures, system
              maintenance, or other factors beyond our control. We may suspend, modify, or discontinue any part of the
              Services at any time without notice. We do not guarantee uninterrupted, timely, or error-free access to
              WearBefore_bot or wearbefore.com and are not liable for any loss or damage resulting from such
              disruptions.
            </p>
            <p>
              We may perform maintenance or updates that temporarily affect access to the Services, with or without
              notice. You acknowledge that access to virtual try-on features or payment processing may be affected by
              such events.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">7. Payments</h2>
            <p>
              <strong>Payment Structure:</strong> Services are offered on a pay-per-image or prepaid credit basis in
              Indian Rupees (INR). We reserve the right to change pricing or payment models with prior notice.
            </p>
            <p>
              <strong>Payment Processing:</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                <strong>Telegram Stars:</strong> Payments for digital goods (e.g., virtual try-on results, recharges)
                via WearBefore_bot are processed using Telegram Stars, as required by Telegram's Bot Platform Developer
                Terms (
                <a
                  href="https://telegram.org/tos/bot-developers"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://telegram.org/tos/bot-developers
                </a>
                ). Telegram does not store credit card details; such data is handled by third-party payment providers.
              </li>
              <li>
                <strong>Razorpay:</strong> Payments via wearbefore.com are processed via Razorpay, subject to their
                Terms and Conditions (
                <a
                  href="https://razorpay.com/sg/tnc"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://razorpay.com/sg/tnc
                </a>
                ).
              </li>
            </ul>
            <p>
              <strong>Disputes:</strong> For payment disputes, contact us within 72 hours of the transaction via the
              /paysupport command in WearBefore_bot or by emailing{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
              . Telegram is not responsible for payment disputes, per their Terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">8. Image Storage and Disputes</h2>
            <p>
              <strong>Storage:</strong> Images uploaded to WearBefore_bot are stored securely for up to 72 hours to
              facilitate troubleshooting and dispute resolution. They are automatically deleted after this period unless
              a dispute is raised.
            </p>
            <p>
              <strong>Disputes:</strong> Any disputes regarding virtual try-on results or payments must be raised within
              72 hours of image generation by using the /paysupport command or emailing{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
              . We will review disputes promptly but are not liable for issues caused by third-party services or user
              misuse.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">9. Refunds</h2>
            <p>Refunds are only issued if:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>The AI fails to generate any output after successful payment.</li>
              <li>The image is corrupted or completely unusable due to a technical issue.</li>
            </ul>
            <p>
              No refunds will be issued for minor imperfections, AI-generated variations, or errors caused by
              user-uploaded images.
            </p>
            <p>
              Refunds for Telegram Stars transactions are processed via Telegram's refund mechanism, at our discretion.
              Refunds for Razorpay transactions are subject to Razorpay's policies and our discretion.
            </p>
            <p>
              Contact us at{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>{" "}
              or via /paysupport for refund requests. Telegram is not responsible for refunds, per their Terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">10. Intellectual Property</h2>
            <p>
              <strong>Our Content:</strong> All content, designs, code, trademarks, software, and visual elements on
              WearBefore_bot and wearbefore.com, including virtual try-on results (excluding user-uploaded images), are
              owned by WearBefore or licensed to us. You may not copy, distribute, modify, or create derivative works
              from our content without permission.
            </p>
            <p>
              <strong>User Content:</strong> You retain ownership of images you upload to WearBefore_bot but grant us a
              limited, non-exclusive, worldwide, royalty-free license to process, store, display, modify, and use them
              solely for providing, improving, and promoting our Services, as outlined in our Privacy Policy. This
              license terminates when your images are deleted, except for backups or legally required retention. You
              represent and warrant that you have the right to grant this license and that your content does not
              infringe third-party rights.
            </p>
            <p>
              <strong>Third-Party IP:</strong> Virtual try-on results may be subject to the intellectual property
              policies of our third-party service providers.
            </p>
            <p>
              <strong>DMCA Policy:</strong> If you believe content on our Services infringes your copyright, submit a
              notice to{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>{" "}
              including: (1) identification of the copyrighted work; (2) location of the infringing material; (3) your
              contact information; (4) a statement of good faith belief that the use is unauthorized; (5) a statement,
              under penalty of perjury, that you are the owner or authorized to act; and (6) your signature. We will
              investigate and take appropriate action in accordance with applicable laws.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">11. Third-Party Services</h2>
            <p>
              Our Services rely on third-party providers for payment processing, virtual try-on functionality, webhook
              services, and infrastructure. We are not responsible for the performance, availability, or disputes
              arising from these third-party services. Key third-party terms include:
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Razorpay: Processes payments via wearbefore.com (
                <a
                  href="https://razorpay.com/sg/tnc"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://razorpay.com/sg/tnc
                </a>
                ).
              </li>
              <li>
                Telegram: Hosts WearBefore_bot (
                <a
                  href="https://telegram.org/tos/bot-developers"
                  className="text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  https://telegram.org/tos/bot-developers
                </a>
                ).
              </li>
            </ul>
            <p>
              Any issues with third-party services must be resolved directly with the respective provider, per their
              terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">12. Disclaimers</h2>
            <p>
              Our Services are provided "as is" and "as available" without warranties of any kind, express or implied,
              including accuracy, reliability, or fitness for a particular purpose. WearBefore is currently in its
              early-stage development phase, and virtual try-on outputs are for visual reference only. Results may vary
              due to factors such as lighting, pose, image resolution, or garment texture. We do not warrant that the
              Services will be uninterrupted, error-free, or free from viruses or harmful components.
            </p>
            <p>
              We do not guarantee uninterrupted access to WearBefore_bot or wearbefore.com, as they depend on
              third-party services.
            </p>
            <p>
              Virtual try-on results may vary, and we are not liable for inaccuracies, errors, or misuse by users,
              including unauthorized or objectionable content.
            </p>
            <p>
              Telegram, Razorpay, and other third-party providers are not liable for issues related to our Services, per
              their respective terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">13. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                WearBefore and its service providers will not be liable for any indirect, incidental, consequential, or
                punitive damages arising from your use of our Services, including loss of data, profits, income,
                reputation, or harm caused by user-generated content, service disruptions, errors in AI processing,
                delays, or outages.
              </li>
              <li>
                Our maximum aggregate liability for any claim will not exceed the amount you paid to us in the last 12
                months.
              </li>
              <li>
                We are not liable for disputes, losses, or damages caused by third-party services, user-uploaded
                content, or misuse of our Services, including unauthorized image uploads or misrepresentation.
              </li>
            </ul>

            <h2 className="text-xl font-bold mt-6 mb-3">14. Governing Law and Dispute Resolution</h2>
            <p>
              <strong>Governing Law:</strong> These Terms are governed by the laws of India, without regard to its
              conflict of law principles, except where disputes are resolved through arbitration as outlined below.
            </p>
            <p>
              <strong>Dispute Resolution by Binding Arbitration</strong>
            </p>
            <p>
              <strong>Agreement to Arbitrate</strong>
              <br />
              This section affects your legal rights and is critically important. By agreeing to these Terms, you and
              WearBefore consent to resolve any disputes through binding arbitration, except for matters that may be
              taken to small claims court. Arbitration means you waive your right to have disputes decided by a judge or
              jury, and the process is generally simpler and more limited than court proceedings.
            </p>
            <p>
              <strong>Scope and Procedure</strong>
              <br />
              Informal Resolution: Before initiating arbitration, both parties agree to attempt informal resolution. You
              must send a detailed notice of your claim to{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>
              , including your name, contact details, and the nature of the issue. WearBefore will respond within 10
              business days with a proposed resolution.
            </p>
            <p>
              Arbitration Process: All disputes, claims, or causes of action arising from or related to these Terms or
              your use of the Services will be resolved through binding arbitration conducted in Hisar, India, under the
              Arbitration and Conciliation Act, 1996. The arbitration will be conducted in English by a single
              arbitrator appointed in accordance with the Act.
            </p>
            <p>
              Location and Manner: Arbitration will take place in Hisar, India, and may be conducted in person, by
              telephone, or online, as determined by the arbitrator.
            </p>
            <p>
              <strong>No Class Actions</strong>
              <br />
              You and WearBefore agree that disputes will be resolved solely on an individual basis. Neither party will
              seek to have any dispute heard as a class action, private attorney general action, or in any other
              representative capacity.
            </p>
            <p>
              <strong>Opt-Out of Arbitration</strong>
              <br />
              You may opt out of this arbitration agreement by sending written notice within 30 days of first accepting
              these Terms. The notice must be sent to{" "}
              <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                support@wearbefore.com
              </a>{" "}
              and include your full name, contact details, and a clear statement of your intent to opt out. If you opt
              out, disputes will be resolved in the courts of Hisar, India.
            </p>
            <p>
              <strong>Enforcement</strong>
              <br />
              The arbitrator's decision is final and binding and may be entered as a judgment in any court of competent
              jurisdiction.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">15. Termination</h2>
            <p>
              We may suspend or terminate your access to WearBefore_bot immediately and without notice if you violate
              these Terms, upload prohibited content, engage in illegal activities, or at our sole discretion. Upon
              termination, any licenses granted by you to WearBefore will immediately cease, and your data will be
              deleted as per our Privacy Policy, except for backups or legally required retention.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">16. Changes to These Terms</h2>
            <p>
              We may update these Terms at our sole discretion. Changes will be posted on wearbefore.com and, where
              required, notified via WearBefore_bot. Your continued use of our Services after changes are posted
              constitutes acceptance of the updated Terms.
            </p>

            <h2 className="text-xl font-bold mt-6 mb-3">17. Contact Us</h2>
            <p>For questions, support, legal concerns, or to report violations, contact us at:</p>
            <ul className="list-disc pl-6 mb-4">
              <li>
                Email:{" "}
                <a href="mailto:support@wearbefore.com" className="text-blue-600 hover:underline">
                  support@wearbefore.com
                </a>
              </li>
              <li>Address: 1119, Sector 14P, Hisar, Haryana, 125001, India</li>
              <li>Bot Support: Use the /paysupport command in WearBefore_bot.</li>
            </ul>
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
