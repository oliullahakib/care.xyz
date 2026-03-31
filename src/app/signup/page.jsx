'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { FaAddressCard, FaEnvelope, FaEye, FaEyeSlash, FaLock, FaPhone, FaUser } from 'react-icons/fa';
import Logo from '@/components/Shared/Logo';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';
import SocialLogin from '@/components/Buttons/SocialLogin';

const SignUpPage = () => {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState("");

    // Password validation states
    const [passwordRequirements, setPasswordRequirements] = useState({
        minLength: false,
        hasUppercase: false,
        hasLowercase: false,
    });

    // Check password strength in real-time
    const checkPasswordStrength = (pass) => {
        setPasswordRequirements({
            minLength: pass.length >= 6,
            hasUppercase: /[A-Z]/.test(pass),
            hasLowercase: /[a-z]/.test(pass),
        });
    };

    const handlePasswordChange = (e) => {
        const newPassword = e.target.value;
        setPassword(newPassword);
        checkPasswordStrength(newPassword);
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const form = e.target;
        const nid = form.nid.value;
        const contact = form.contact.value;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const provider = "credentials";

        const signupData = { nid, contact, name, email, password, provider };
        console.log("signupData", signupData);

        // Your signup logic here...
        
    };

    const requirements = [
        { label: "6+ Characters", met: passwordRequirements.minLength },
        { label: "Uppercase Letter", met: passwordRequirements.hasUppercase },
        { label: "Lowercase Letter", met: passwordRequirements.hasLowercase },
        { label: "Match Confirm", met: passwordRequirements.minLength && passwordRequirements.hasUppercase && passwordRequirements.hasLowercase },
    ];

    return (
        <div className="min-h-screen bg-base-100 flex items-center justify-center p-4 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-md w-full relative z-10">
                <div className="bg-base-100 rounded-3xl border border-base-200 shadow-2xl p-8 md:p-12 space-y-8">
                    {/* Header */}
                    <div className="text-center space-y-4">
                        <div className="flex justify-center mb-6">
                            <Logo />
                        </div>
                        <h1 className="text-3xl font-black text-base-content tracking-tight">Join the Heroes!</h1>
                        <p className="text-base-content/60">Create your account to get started.</p>
                    </div>

                    {/* Social Login */}
                    <SocialLogin />

                    <div className="divider text-base-content/30 text-xs uppercase font-bold tracking-widest">or email</div>

                    {/* Form */}
                    <form onSubmit={handleSignup} className="space-y-5">
                        {/* NID Number */}
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaAddressCard />
                                </span>
                                <input
                                    type="number"
                                    name="nid"
                                    placeholder="NID Number"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Contact Number */}
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaPhone />
                                </span>
                                <input
                                    type="tel"
                                    name="contact"
                                    placeholder="Contact Number"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Full Name */}
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaUser />
                                </span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaEnvelope />
                                </span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                            </div>
                        </div>

                        {/* Password */}
                        <div className="form-control">
                            <div className="relative group">
                                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors">
                                    <FaLock />
                                </span>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    placeholder="Password"
                                    className="input input-bordered w-full pl-12 h-14 rounded-2xl bg-base-200/50 border-base-300 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all font-medium"
                                    required
                                />
                                <span 
                                    onClick={() => setShowPassword(!showPassword)} 
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-base-content/30 group-focus-within:text-primary transition-colors cursor-pointer"
                                >
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </span>
                            </div>
                        </div>

                        {/* Security Requirements - Added Here */}
                        <div className="bg-base-200/70 rounded-2xl p-5 text-sm">
                            <p className="text-primary font-semibold uppercase tracking-widest mb-4 text-xs">
                                SECURITY REQUIREMENTS
                            </p>
                            <div className="grid grid-cols-2 gap-y-3 gap-x-6">
                                {requirements.map((req, index) => (
                                    <div key={index} className="flex items-center gap-2">
                                        <div className={`w-5 h-5 rounded-full flex items-center justify-center transition-all ${req.met ? 'bg-primary text-white' : 'bg-base-300'}`}>
                                            {req.met && '✓'}
                                        </div>
                                        <span className={`transition-colors ${req.met ? 'text-base-content' : 'text-base-content/50'}`}>
                                            {req.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <button 
                            type="submit" 
                            className="btn btn-primary w-full h-14 rounded-2xl text-lg font-black shadow-xl shadow-primary/20 mt-2 capitalize"
                        >
                            Create Account
                        </button>
                    </form>

                    {/* Footer */}
                    <p className="text-center text-base-content/60 font-medium">
                        Already a hero? {' '}
                        <Link href="/login" className="text-primary font-black hover:underline underline-offset-4">
                            Login Instead
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUpPage;