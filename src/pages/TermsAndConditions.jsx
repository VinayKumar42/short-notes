import { useSelector } from "react-redux";
import { CheckCircle, Shield, User, FileText, Ban, Server, AlertTriangle, Edit, XCircle, Scale } from "lucide-react";

const SECTIONS = [
  {
    title: "Acceptance of Terms",
    icon: CheckCircle,
    content: "By accessing and using Short Notes, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, please do not use our service."
  },
  {
    title: "Acceptable Use Policy",
    icon: Shield,
    content: "Users agree to use Short Notes only for lawful purposes. You may not use this service to:\n• Upload or share illegal content\n• Harass, threaten, or abuse others\n• Spam or post repetitive content\n• Attempt to compromise system security"
  },
  {
    title: "User Responsibilities",
    icon: User,
    content: "You are responsible for:\n• Maintaining the confidentiality of your account\n• All activity under your account\n• Ensuring your usage complies with applicable laws\n• Backing up your important data"
  },
  {
    title: "Content Ownership",
    icon: FileText,
    content: "You retain all rights to content you create and share. Short Notes does not claim ownership of your pastes. However, by using our service, you grant us the right to store and display your content as necessary to provide the service."
  },
  {
    title: "Prohibited Content",
    icon: Ban,
    content: "You may not post:\n• Malware or harmful code\n• Personal information of others without consent\n• Copyright-infringing material\n• Explicit or adult content\n• Hate speech or discriminatory content"
  },
  {
    title: "Service Availability",
    icon: Server,
    content: "We strive to keep Short Notes available 24/7, but we do not guarantee uninterrupted service. We may conduct maintenance, updates, or improvements without prior notice. We are not liable for any downtime or service disruptions."
  },
  {
    title: "Liability Limitations",
    icon: AlertTriangle,
    content: "Short Notes is provided 'as is' without any warranties. We are not liable for:\n• Loss of data or content\n• Indirect or consequential damages\n• Any damages resulting from service interruptions\n• Third-party actions or content"
  },
  {
    title: "Modifications to Terms",
    icon: Edit,
    content: "We reserve the right to modify these Terms & Conditions at any time. Changes will be effective immediately upon posting. Your continued use of the service constitutes acceptance of the modified terms."
  },
  {
    title: "Termination",
    icon: XCircle,
    content: "We reserve the right to suspend or terminate your account if you violate these terms or engage in harmful behavior. Upon termination, your content may be deleted. Users may voluntarily delete their accounts at any time."
  },
  {
    title: "Governing Law",
    icon: Scale,
    content: "These Terms & Conditions are governed by and construed in accordance with applicable law. Any disputes shall be resolved through appropriate legal channels."
  }
];

const TermsAndConditions = () => {
  const darkmode = useSelector((state) => state.theme.darkmode);

  return (
    <div className={`min-h-screen ${darkmode ? 'bg-gray-900 text-gray-100' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className={`${darkmode ? 'bg-gradient-to-r from-blue-900 to-gray-800' : 'bg-gradient-to-r from-blue-600 to-blue-500'} py-16 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">Terms & Conditions</h1>
          <p className="text-blue-50 max-w-2xl mx-auto">
            Please review our comprehensive terms that guide the use of Short Notes. Your understanding and compliance ensure a safe experience for everyone.
          </p>
        </div>
      </div>

      {/* Content Sections */}
      <div className={`py-12 px-4 sm:px-6 lg:px-8`}>
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {SECTIONS.map((section, idx) => {
              const Icon = section.icon;
              return (
                <div
                  key={idx}
                  className={`group rounded-xl p-8 transition-all duration-300 hover:shadow-lg ${
                    darkmode
                      ? 'bg-gray-800 hover:bg-gray-750 border border-gray-700 hover:border-blue-600'
                      : 'bg-white border-2 border-gray-200 hover:border-blue-500 hover:shadow-md'
                  }`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`p-3 rounded-lg flex-shrink-0 ${
                      darkmode
                        ? 'bg-blue-900 text-blue-400'
                        : 'bg-blue-100 text-blue-600'
                    } group-hover:scale-110 transition-transform`}>
                      <Icon size={24} />
                    </div>
                    <div className="flex-1">
                      <h2 className={`text-2xl font-bold ${
                        darkmode ? 'text-gray-100' : 'text-gray-900'
                      } group-hover:text-blue-500 transition-colors`}>
                        {section.title}
                      </h2>
                      <div className={`h-1 w-12 mt-2 rounded-full ${
                        darkmode ? 'bg-blue-600' : 'bg-blue-500'
                      }`}></div>
                    </div>
                  </div>
                  <p className={`leading-relaxed whitespace-pre-line ${
                    darkmode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    {section.content}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Footer Note */}
          <div className={`mt-16 p-8 rounded-xl border-l-4 ${
            darkmode
              ? 'bg-gray-800 border-l-blue-600 text-gray-300'
              : 'bg-blue-50 border-l-blue-500 text-gray-800'
          }`}>
            <p className="font-semibold mb-2">Questions?</p>
            <p>
              If you have questions about these Terms & Conditions, please contact us. Your use of Short Notes indicates your acceptance of these terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
