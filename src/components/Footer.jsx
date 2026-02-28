import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Github, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
    // assuming themeSlice has { theme: "light" | "dark" }
    const darkmode = useSelector((state) => state.theme.darkmode);
const isDark = darkmode;

    return (
        <footer
            className={`w-full mt-auto border-t ${isDark
                    ? "bg-gray-900 text-gray-300 border-gray-700"
                    : "bg-gray-100 text-gray-700 border-gray-200"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-10">
                {/* TOP GRID */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

                    {/* Project Info */}
                    <div>
                        <h2 className="text-lg font-semibold mb-3">Short Notes</h2>
                        <p className="text-sm">
                            A simple and fast note-sharing platform built for productivity.
                        </p>
                        <p className="text-xs mt-3 opacity-70">
                            Version 1.0.0
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Quick Links</h3>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link to="/" className="hover:underline">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="hover:underline">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/privacy" className="hover:underline">
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link to="/terms" className="hover:underline">
                                    Terms of Service
                                </Link>
                            </li>
                        </ul>
                    </div>

                   
                    {/* Social Links */}
                    <div>
                        <h3 className="font-semibold mb-3">Connect</h3>

                        <div className="flex gap-4">
                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <Github size={22} />
                            </a>

                            <a
                                href="https://twitter.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <Twitter size={22} />
                            </a>

                            <a
                                href="https://linkedin.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="hover:scale-110 transition-transform"
                            >
                                <Linkedin size={22} />
                            </a>
                        </div>
                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="mt-10 pt-6 border-t text-center text-sm opacity-80">
                    © {new Date().getFullYear()} Short Notes. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;