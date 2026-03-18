import React from "react";
import { useSelector } from "react-redux";

const TermsAndConditions = () => {
  const darkmode = useSelector((state) => state.theme.darkmode);

  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using Short Notes, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our service."
    },
    {
      title: "2. Acceptable Use Policy",
      content: "Users agree to use Short Notes only for lawful purposes. You may not use this service to:\n• Upload or share illegal content\n• Harass, threaten, or abuse others\n• Spam or post repetitive content\n• Attempt to compromise system security"
    },
    {
      title: "3. User Responsibilities",
      content: "You are responsible for:\n• Maintaining the confidentiality of your account\n• All activity under your account\n• Ensuring your usage complies with applicable laws\n• Backing up your important data"
    },
    {
      title: "4. Content Ownership",
      content: "You retain all rights to content you create and share. Short Notes does not claim ownership of your pastes. However, by using our service, you grant us the right to store and display your content as necessary to provide the service."
    },
    {
      title: "5. Prohibited Content",
      content: "You may not post:\n• Malware or harmful code\n• Personal information of others without consent\n• Copyright-infringing material\n• Explicit or adult content\n• Hate speech or discriminatory content"
    },
    {
      title: "6. Service Availability",
      content: "We strive to keep Short Notes available 24/7, but we do not guarantee uninterrupted service. We may conduct maintenance, updates, or improvements without prior notice. We are not liable for any downtime or service disruptions."
    },
    {
      title: "7. Liability Limitations",
      content: "Short Notes is provided 'as is' without any warranties. We are not liable for:\n• Loss of data or content\n• Indirect or consequential damages\n• Any damages resulting from service interruptions\n• Third-party actions or content"
    },
    {
      title: "8. Modifications to Terms",
      content: "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms."
    },
    {
      title: "9. Termination",
      content: "We reserve the right to suspend or terminate your account if you violate these terms or engage in harmful behavior. Upon termination, your content may be deleted. Users may voluntarily delete their accounts at any time."
    },
    {
      title: "10. Governing Law",
      content: "These Terms & Conditions are governed by and construed in accordance with applicable law. Any disputes shall be resolved through appropriate legal channels."
    }
  ];

  return (
    <div className={`min-h-screen py-12 px-4 sm:px-6 lg:px-8 ${darkmode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">Terms & Conditions</h1>
          <p className={`text-sm ${darkmode ? 'text-gray-400' : 'text-gray-600'}`}>
            Last Updated: January 1, 2025
          </p>
        </div>

        {/* Content Sections */}
        <div className="space-y-8">
          {sections.map((section, idx) => (
            <section key={idx} className={`p-6 rounded-lg ${darkmode ? 'bg-gray-800' : 'bg-gray-50'}`}>
              <h2 className="text-xl font-semibold mb-3 text-blue-500">
                {section.title}
              </h2>
              <p className={`leading-relaxed whitespace-pre-line ${darkmode ? 'text-gray-300' : 'text-gray-700'}`}>
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Footer Note */}
        <div className={`mt-12 p-6 rounded-lg border ${darkmode ? 'bg-gray-800 border-gray-700 text-gray-300' : 'bg-gray-50 border-gray-200 text-gray-700'}`}>
          <p className="text-sm">
            If you have questions about these Terms & Conditions, please contact us. Your use of Short Notes indicates your acceptance of these terms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
