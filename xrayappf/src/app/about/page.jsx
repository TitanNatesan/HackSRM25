import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Import team member images
import titan from "../../assets/CT.jpg";
// import alex from "../assets/CT.jpg";
// import jane from "../assets/CT.jpg";

export default function About() {
    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
            {/* Navbar */}
            <nav className="w-full py-4 bg-gray-900 fixed top-0 left-0 shadow-lg">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
                    <h1 className="text-xl font-bold">X-Ray Analysis</h1>
                    <div className="flex space-x-6">
                        <Link href="/" className="hover:text-blue-400">Home</Link>
                        <Link href="/about" className="hover:text-blue-400">About</Link>
                        <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
                        <Link href="/contact" className="hover:text-blue-400">Contact</Link>
                        {/* <Link href="/logout" className="hover:text-red-400">Logout</Link> */}
                    </div>
                </div>
            </nav>
            {/* Hero Section */}
            <div className="mt-20">

                {/* Mission Section */}
                <div className="mt-16 max-w-4xl text-center">
                    <h2 className="text-4xl font-semibold mb-4">Our Mission</h2>
                    <p className="text-gray-400 text-lg">
                        Our mission is to harness the power of AI to provide fast, accurate,
                        and affordable X-ray analysis, enabling doctors and radiologists to
                        make informed decisions with confidence.
                    </p>
                </div>

                {/* Meet the Team */}
                <div className="mt-16 max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold mb-8">Meet the Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {/* Team Member */}
                        {[{ name: "Titan Natesan", role: "Founder & AI Engineer", image: titan },
                        { name: "Dr. Alex Carter", role: "Medical Consultant", image: titan },
                        { name: "Jane Doe", role: "Frontend Developer", image: titan }].map((member, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                                <Image src={member.image} alt={member.name} className="w-20 h-20 rounded-full mx-auto mb-4" />
                                <h3 className="text-xl font-bold">{member.name}</h3>
                                <p className="text-gray-400">{member.role}</p>
                            </div>
                        ))}
                    </div>
                </div>


                <div className="mt-16 max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold mb-8">How it Works?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {[
                            { title: "X-ray Image Input", description: "Upload or capture X-ray images for analysis." },
                            { title: "Image Processing", description: "The AI model processes the image to enhance details." },
                            { title: "Feature Extraction", description: "Key features are extracted to aid diagnostics." },
                            { title: "Report Generation", description: "A detailed report is generated based on analysis." },
                            { title: "Radiologist Verification", description: "Final review and diagnosis by a radiologist." }
                        ].map((step, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg">
                                <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                                <p className="text-gray-400">{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Table Container for Horizontal Scroll */}
                <div className="overflow-x-auto mt-16">
                    <table className="w-full table-auto border-collapse text-left text-gray-300">
                        <thead>
                            <tr className="bg-gray-800">
                                <th className="px-4 py-3 border-b border-gray-700">Feature</th>
                                <th className="px-4 py-3 border-b border-gray-700">
                                    BoneView (Gleamer.ai)
                                </th>
                                <th className="px-4 py-3 border-b border-gray-700">
                                    Our System
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Specialization
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Fracture detection
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Fracture segmentation, mammography, multiple modalities
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Regulatory Status
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    FDA-cleared for skeletal injuries
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    In process of accreditation; focuses on broader imaging range
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Workflow Focus
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Streamlines emergency departments
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Offers advanced reporting for diverse clinical settings
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    Key Capabilities
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    AI-based fracture detection
                                </td>
                                <td className="px-4 py-3 border-b border-gray-700">
                                    AI-based fracture segmentation, mammography, CT scan (future)
                                </td>
                            </tr>
                            <tr>
                                <td className="px-4 py-3">Reporting</td>
                                <td className="px-4 py-3">Primarily diagnostic flags for fractures</td>
                                <td className="px-4 py-3">Full AI-driven report generation</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                {/* Testimonials */}
                <div className="mt-16 max-w-4xl text-center">
                    <h2 className="text-3xl font-semibold mb-8">What Our Users Say</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[{ name: "Dr. John Smith", feedback: "This AI-powered tool has transformed our diagnosis process!" },
                        { name: "Sarah Lee", feedback: "Incredible accuracy and efficiency!" },
                        { name: "Dr. Mark Anderson", feedback: "Highly recommended AI-driven medical imaging software." }].map((user, index) => (
                            <div key={index} className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
                                <h3 className="text-xl font-bold">{user.name}</h3>
                                <p className="text-gray-400 italic">"{user.feedback}"</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold mb-4">Want to Learn More?</h2>
                    <p className="text-gray-400 text-lg mb-6">
                        Contact us or schedule a demo to explore our AI-powered X-ray analysis.
                    </p>
                    <Link href="/contact">
                        <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg">
                            Contact Us
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}