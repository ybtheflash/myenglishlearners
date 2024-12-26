"use client";
import { motion } from "framer-motion";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-24 pb-12">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="prose prose-lg dark:prose-invert mx-auto"
        >
          <h1 className="font-maharlika text-4xl text-primary text-center mb-8">
            Privacy Policy
          </h1>

          <div className="space-y-8 font-garet">
            <section>
              <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
              <p>
                Welcome to English Learners. We respect your privacy and are
                committed to protecting your personal data. This privacy policy
                explains how we handle your information when you use our website
                and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Information We Collect
              </h2>
              <p>We collect and process the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <strong>Usage Data:</strong> Information about how you use our
                  website, including pages visited and time spent.
                </li>
                <li>
                  <strong>Contact Information:</strong> Email address when you
                  contact us or subscribe to our services.
                </li>
                <li>
                  <strong>Purchase Information:</strong> When you make purchases
                  through our shop, we collect necessary transaction details.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our educational services</li>
                <li>Process your purchases and deliver digital products</li>
                <li>Respond to your inquiries and support requests</li>
                <li>Send important updates about our services</li>
                <li>Improve our website and user experience</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
              <p>
                We implement appropriate security measures to protect your
                personal information. However, no method of transmission over
                the internet is 100% secure, and we cannot guarantee absolute
                security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Third-Party Services
              </h2>
              <p>We use trusted third-party services for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Payment processing (Shopify)</li>
                <li>Video hosting (YouTube)</li>
                <li>Website analytics</li>
              </ul>
              <p className="mt-4">
                These services have their own privacy policies, and we recommend
                reviewing them.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your data</li>
                <li>Data portability</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Cookies</h2>
              <p>
                We use cookies to enhance your browsing experience. You can
                control cookie settings through your browser preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Children's Privacy
              </h2>
              <p>
                Our services are not directed to children under 13. We do not
                knowingly collect personal information from children under 13.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">
                Changes to This Policy
              </h2>
              <p>
                We may update this privacy policy from time to time. We will
                notify you of any changes by posting the new policy on this
                page.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please
                contact us at:{" "}
                <a
                  href="mailto:englishlearners18@gmail.com"
                  className="text-primary hover:text-primary-dark transition-colors duration-300"
                >
                  englishlearners18@gmail.com
                </a>
              </p>
            </section>

            <div className="text-sm text-text/60 text-center mt-12">
              Last updated: December 26, 2024
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
