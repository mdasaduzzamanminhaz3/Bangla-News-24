'use client'
import { resetPassword } from '@/lib/auth-client';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import React from 'react';
import { toast } from 'react-hot-toast';

const ResetPasswordForm = () => {
    const searchParams = useSearchParams();
    const token = searchParams.get('token') as string;
    const handleResetPassword = async (e:React.SubmitEvent<HTMLElement>) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const userData = Object.fromEntries(formData.entries());
        const resData = await resetPassword({
            newPassword: userData.password as string,
            token:token
        })
        toast.success("Your password is reset successfully!");
    }
    return (
   <main className="flex min-h-screen items-center justify-center bg-slate-50 px-7 py-10">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
          {/* Header */}
                      <h1>আপনার নতুন পাসওয়ার্ড টি প্রদান করুন।  </h1>
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-xl font-bold text-white shadow-sm">
              <Link href={'/'}>
              <Image src={'/logo.webp'} alt="logo" height={50} width={50}/>
              </Link>

            </div>

          </div>

          {/* Form */}
          <form onSubmit={handleResetPassword} className="space-y-5">

            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="text-sm font-medium text-slate-700"
                >
                  পাসওয়ার্ড
                </label>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                required
                placeholder="আপনার পাসওয়ার্ড লিখুন"
                className="h-11 w-full rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-red-500 focus:ring-4 focus:ring-red-500/10"
              />
            </div>

            <button
              type="submit"
              className="h-11 w-full rounded-lg bg-red-600 text-sm font-semibold text-white shadow-sm transition hover:bg-red-700 active:scale-[0.99]"
            >
              সাইন ইন করুন
            </button>
          </form>

        </div>
      </div>
    </main>
    );
};

export default ResetPasswordForm;