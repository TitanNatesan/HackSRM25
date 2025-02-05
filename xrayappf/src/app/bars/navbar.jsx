// components/Navbar.js
import React from "react";
import Link from "next/link";

export default function Navbar() {
    return (
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
    );
}
