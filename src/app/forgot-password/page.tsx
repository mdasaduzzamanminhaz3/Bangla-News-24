'use client'
import { requestPasswordReset } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-hot-toast';

const ForgotPasswordPage = () => {
    const handleForgotPassword = async(e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault()
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries()) as {email:string,password:string}
        const resData = await requestPasswordReset({
            ...userData,
            redirectTo:'/reset-password'
        })
        toast.success("Password reset link sent to your mail. Please check your inbox or mail box. Thank you!")
    }
    return (
         <main className="flex min-h-screen items-center justify-center bg-slate-50 px-7 py-10">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Header */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl font-bold text-white shadow-sm">
              <Link href={'/'}>
              <Image src={'/logo.webp'} alt="logo" height={50} width={50}/>
              </Link>

            </div>
          </div>
        
          {/* Form */}
          <form onSubmit={handleForgotPassword} className="space-y-5">
            <div>
                <p className="text-sm text-gray-600 text-center text-">আপনার পাসওয়ার্ড পরিবর্তন করার জন্য আপনার ইমেইলটি প্রদান করুন</p>
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
                className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              />
            </div>
            <button
              type="submit"
              className="btn h-11 w-full rounded-lg bg-red-600 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.99]"
            >
              মেইল পাঠান
            </button>
          </form>

        </div>
      </div>
    </main>
    );
};

export default ForgotPasswordPage;