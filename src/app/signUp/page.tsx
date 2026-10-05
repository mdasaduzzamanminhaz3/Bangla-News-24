"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("form submitted");
  };

  const handleGoogleSignIn = () => {
    console.log("google sign in");
  };

  const handleGithubSignIn = () => {
    console.log("github sign in");
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-slate-50 px-4 py-10">
      <div className="w-full max-w-md">
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Header */}
          <div className="mb-7 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl font-bold text-white shadow-sm">
              <Link href={'/'}>
              <Image src={'/logo.webp'} alt="logo" height={50} width={50}/>
              </Link>
            </div>

            <h1 className="text-2xl font-bold tracking-tight text-slate-900">
              অ্যাকাউন্ট তৈরি করুন
            </h1>

            <p className="mt-2 text-sm text-slate-500">
              নতুন অ্যাকাউন্ট তৈরি করতে আপনার তথ্য দিন
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="space-y-4">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                নাম
              </label>

              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder="আপনার নাম লিখুন"
                className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              />
            </div>

            {/* Image URL */}
            <div>
              <label
                htmlFor="image"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                প্রোফাইল ছবি
              </label>

              <input
                id="image"
                name="image"
                type="url"
                placeholder="https://example.com/image.jpg"
                className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                ইমেইল
              </label>

              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder="আপনার ইমেইল লিখুন"
                className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-medium text-slate-700"
              >
                পাসওয়ার্ড
              </label>

              <input
                id="password"
                name="password"
                type="password"
                required
                minLength={6}
                placeholder="কমপক্ষে ৬ অক্ষর"
                className="h-11 w-full rounded-lg border border-slate-300 px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="mt-2 h-11 w-full rounded-lg bg-red-600 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.99]"
            >
              সাইন আপ করুন
            </button>
          </form>

          {/* Divider */}
          <div className="my-6 flex items-center gap-3">
            <div className="h-px flex-1 bg-slate-200" />
            <span className="text-xs text-slate-400">অথবা</span>
            <div className="h-px flex-1 bg-slate-200" />
          </div>

          {/* Social Login */}
          <div className="space-y-3">
            <button
              type="button"
              onClick={handleGoogleSignIn}
              className="flex h-11 w-full items-center justify-center gap-3 rounded-lg border border-slate-300 bg-white text-sm font-medium text-slate-700 transition hover:bg-slate-50 active:scale-[0.99]"
            >
              <span className="font-bold text-red-500">G</span>
              Google দিয়ে সাইন আপ করুন
            </button>

            <button
              type="button"
              onClick={handleGithubSignIn}
              className="flex h-11 w-full items-center justify-center gap-3 rounded-lg bg-slate-900 text-sm font-medium text-white transition hover:bg-slate-800 active:scale-[0.99]"
            >
              <span>●</span>
              GitHub দিয়ে সাইন আপ করুন
            </button>
          </div>

          {/* Footer */}
          <p className="mt-7 text-center text-sm text-slate-500">
            ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
            <Link href={'/signIn'}
              type="button"
              className="font-semibold text-red-600 hover:text-red-700"
            >
              সাইন ইন করুন
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
};

export default SignUpPage;
