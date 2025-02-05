import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import CT from "../assets/CT.jpg";
import imageAnalysis from "../assets/imageAnalysis.jpg";
import mammography from "../assets/densebreastteaser.jpg";
import xray from "../assets/xray.jpg";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center px-6">

      {/* Navbar */}
      <nav className="w-full py-4 bg-gray-900 fixed top-0 left-0 shadow-lg">
        <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
          <h1 className="text-xl font-bold">X-Ray Analysis</h1>
          <div className="flex space-x-6">
            <Link href="/" className="hover:text-blue-400">Home</Link>
            <Link href="/about" className="hover:text-blue-400">About</Link>
            <Link href="/dashboard" className="hover:text-blue-400">Dashboard</Link>
            <Link href="/contact" className="hover:text-blue-400">Contact</Link>
            <Link href="/logout" className="hover:text-red-400">Logout</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="pt-20 text-center">
        <h1 className="text-4xl md:text-6xl font-bold">X-Ray Analysis System</h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mt-4">
          AI-powered X-ray analysis with advanced image processing and deep learning insights.
        </p>

        <div className="mt-6 flex space-x-4 justify-center">
          <Link href="/upload">
            <Button className="bg-blue-500 hover:bg-blue-600 px-6 py-3 text-lg">
              Get Started <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="/about">
            <Button className="bg-gray-700 hover:bg-gray-800 px-6 py-3 text-lg">
              Learn More
            </Button>
          </Link>
        </div>
      </div>

      <Image src={xray} alt="X-Ray Analysis" className="mt-10 w-full max-w-lg rounded-lg shadow-lg" />

      {/* Features Section */}
      <div className="mt-20 w-full max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">Our Features</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <Image src={imageAnalysis} alt="Image Analysis" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Image Analysis</h3>
            <p className="text-gray-400">Advanced tools for precise X-ray image analysis using AI algorithms.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <Image src={mammography} alt="Mammography" className="w-20 h-20 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">Mammography</h3>
            <p className="text-gray-400">Cutting-edge mammogram analysis for early detection and diagnostics.</p>
          </div>

          <div className="bg-gray-800 p-6 rounded-xl shadow-lg text-center">
            <Image src={CT} alt="CT Scan" className="w-30 h-30 mx-auto mb-4" />
            <h3 className="text-xl font-bold mb-2">CT Scan</h3>
            <p className="text-gray-400">Future-ready CT scan analysis for comprehensive healthcare solutions.</p>
          </div>
        </div>
      </div>

      {/* Comparison Table Section */}
      <div className="mt-20 w-full max-w-4xl mb-[100px]">
        <h2 className="text-3xl md:text-4xl font-semibold text-center mb-8">AI vs. Traditional X-Ray Analysis</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-700 text-center text-gray-300">
            <thead>
              <tr className="bg-gray-800">
                <th className="p-4 border border-gray-700">Feature</th>
                <th className="p-4 border border-gray-700">AI-Powered X-Ray Analysis</th>
                <th className="p-4 border border-gray-700">Traditional X-Ray Analysis</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-gray-900">
                <td className="p-4 border border-gray-700">Speed</td>
                <td className="p-4 border border-gray-700">Analyzes in seconds ⚡</td>
                <td className="p-4 border border-gray-700">Takes minutes to hours 🕒</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">Accuracy</td>
                <td className="p-4 border border-gray-700">High precision with AI models 🎯</td>
                <td className="p-4 border border-gray-700">Depends on human expertise 👨‍⚕️</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="p-4 border border-gray-700">Automation</td>
                <td className="p-4 border border-gray-700">Fully automated process 🤖</td>
                <td className="p-4 border border-gray-700">Manual inspection required 🏥</td>
              </tr>
              <tr className="bg-gray-800">
                <td className="p-4 border border-gray-700">Early Detection</td>
                <td className="p-4 border border-gray-700">Detects anomalies early 🚀</td>
                <td className="p-4 border border-gray-700">Might miss subtle signs 🔍</td>
              </tr>
              <tr className="bg-gray-900">
                <td className="p-4 border border-gray-700">Cost Efficiency</td>
                <td className="p-4 border border-gray-700">Reduces diagnostic costs 💰</td>
                <td className="p-4 border border-gray-700">Higher labor costs 💸</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
