"use client";
import React, { useState, useCallback, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { Button } from "@/components/ui/button";

export default function UploadPage() {
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [isUploading, setIsUploading] = useState(false);
    const [user, setUser] = useState("");
    const [uploadedImageUrl, setUploadedImageUrl] = useState(null);
    const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const handleDrag = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === "dragenter" || e.type === "dragover") {
            setDragActive(true);
        } else if (e.type === "dragleave") {
            setDragActive(false);
        }
    }, []);

    const handleDrop = useCallback((e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setFile(e.dataTransfer.files[0]);
        }
    }, []);

    const handleChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setFile(e.target.files[0]);
        }
    };

    const handleUpload = async () => {
        if (!file || !user) {
            alert("Please enter a username and select a file before uploading.");
            return;
        }
        setIsUploading(true);
        const formData = new FormData();
        formData.append("image", file);
        formData.append("patient_name", user);
        try {
            const response = await axios.post(
                "http://10.1.7.17:8000/fractdetect/",
                formData
            );
            console.log("Response data:", response.data);
            setUploadedImageUrl(response.data.uploaded_image_url);
            setGeneratedImageUrl(response.data.generated_image_url);
        } catch (error) {
            console.error(
                "Error uploading image:",
                error.response ? error.response.data : error.message
            );
        } finally {
            setIsUploading(false);
        }
    };

    if (!isClient) return null; // Avoid hydration mismatch by rendering only on the client

    return (
        <div className="min-h-screen bg-gray-900 text-white px-6 py-12 flex flex-col items-center">
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

            <div className="mt-20 w-full max-w-2xl">
                <h2 className="text-3xl font-semibold mb-8 text-center animate-pulse">Upload an X-Ray Image</h2>
                <div
                    onDragEnter={handleDrag}
                    onDragOver={handleDrag}
                    onDragLeave={handleDrag}
                    onDrop={handleDrop}
                    className={`border-4 border-dashed rounded-xl p-6 mb-4 text-center transition-colors ${dragActive ? "border-blue-500 animate-pulse" : "border-gray-600"}`}
                >
                    <p className="mb-2">{file ? file.name : "Drag & drop your image here"}</p>
                    <p className="text-gray-400">OR</p>
                </div>
                <div className="flex flex-col items-center space-y-4">
                    <input
                        type="text"
                        name="username"
                        id="username"
                        placeholder="Enter Patient Name"
                        value={user}
                        onChange={(e) => setUser(e.target.value)}
                        className="w-full px-4 py-2 border border-gray-500 rounded-md text-black"
                    />
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleChange}
                        className="w-full text-white"
                    />
                    <Button onClick={handleUpload} className="bg-blue-500 hover:bg-blue-600 w-full">
                        {isUploading ? "Uploading..." : "Upload"}
                    </Button>
                </div>
                {isUploading && (
                    <div className="mt-4 text-center">
                        <div className="w-10 h-10 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mx-auto"></div>
                        <p className="mt-2">Please wait...</p>
                    </div>
                )}
                {(uploadedImageUrl || generatedImageUrl) && (
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {uploadedImageUrl && (
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl mb-2">Uploaded Image</h3>
                                <Image
                                    src={uploadedImageUrl}
                                    alt="Uploaded X-Ray"
                                    width={300}
                                    height={300}
                                    className="rounded-md"
                                    unoptimized
                                />
                            </div>
                        )}
                        {generatedImageUrl && (
                            <div className="flex flex-col items-center">
                                <h3 className="text-xl mb-2">Generated Image</h3>
                                <Image
                                    src={generatedImageUrl}
                                    alt="Generated X-Ray"
                                    width={300}
                                    height={300}
                                    className="rounded-md"
                                    unoptimized
                                />
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}