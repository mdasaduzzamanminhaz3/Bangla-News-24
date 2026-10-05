import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-2xl font-bold text-white"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-red-600 text-lg">
                N
              </span>
              NewsPaper
            </Link>

            <p className="mt-5 max-w-md text-sm leading-7 text-slate-400">
              দেশের এবং বিশ্বের সর্বশেষ খবর, সংবাদ ও গুরুত্বপূর্ণ ঘটনাগুলো
              সহজে এবং নির্ভরযোগ্যভাবে পাঠকের কাছে পৌঁছে দিতে আমরা প্রতিশ্রুতিবদ্ধ।
            </p>

            {/* Social */}
            <div className="mt-6 flex gap-3">
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-white transition hover:bg-blue-600"
              >
                f
              </a>

              <a
                href="#"
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-white transition hover:bg-sky-500"
              >
                𝕏
              </a>

              <a
                href="#"
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-white transition hover:bg-red-600"
              >
                ▶
              </a>

              <a
                href="#"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-800 text-sm font-bold text-white transition hover:bg-pink-600"
              >
                ◎
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              গুরুত্বপূর্ণ লিংক
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/"
                  className="transition hover:text-red-500"
                >
                  হোম
                </Link>
              </li>

              <li>
                <Link
                  href="/news"
                  className="transition hover:text-red-500"
                >
                  সর্বশেষ খবর
                </Link>
              </li>

              <li>
                <Link
                  href="/national"
                  className="transition hover:text-red-500"
                >
                  জাতীয়
                </Link>
              </li>

              <li>
                <Link
                  href="/international"
                  className="transition hover:text-red-500"
                >
                  আন্তর্জাতিক
                </Link>
              </li>

              <li>
                <Link
                  href="/sports"
                  className="transition hover:text-red-500"
                >
                  খেলাধুলা
                </Link>
              </li>
            </ul>
          </div>

          {/* Information */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              আমাদের সম্পর্কে
            </h3>

            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link
                  href="/about"
                  className="transition hover:text-red-500"
                >
                  আমাদের সম্পর্কে
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="transition hover:text-red-500"
                >
                  যোগাযোগ
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="transition hover:text-red-500"
                >
                  গোপনীয়তা নীতি
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="transition hover:text-red-500"
                >
                  ব্যবহারের শর্তাবলি
                </Link>
              </li>

              <li>
                <Link
                  href="/advertise"
                  className="transition hover:text-red-500"
                >
                  বিজ্ঞাপন
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 h-px bg-slate-800" />

        {/* Bottom */}
        <div className="flex flex-col gap-3 text-center text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {new Date().getFullYear()} NewsPaper. সর্বস্বত্ব সংরক্ষিত।
          </p>

          <p>
            সত্য ও নির্ভরযোগ্য সংবাদ
            <span className="mx-2 text-red-500">•</span>
            প্রতিদিন
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
