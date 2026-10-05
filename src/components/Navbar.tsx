import Image from "next/image";
import Link from "next/link";
import NavLinks from "./NavLinks";
import UserInfo from "./UserInfo";

interface INavLink {
  id: string;
  title: string;
  slug: string;
  scrapable: boolean;
}

const Navbar = async () => {
  const res = await fetch(
    "https://news-api-v2.vercel.app/api/categories",
    {
      next: {
        revalidate: 60,
      },
    }
  );

  const data = await res.json();

  const navs: INavLink[] = data.data;

  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="border-b border-neutral-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="relative flex min-h-24 items-center justify-center py-4">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <Image
              src="/logo.webp"
              alt="Bangla News 24"
              width={48}
              height={48}
              priority
            />

            <div className="text-center sm:text-left">
              <h1 className="text-xl font-bold text-red-700 sm:text-2xl">
                Bangla News 24
              </h1>

              <p className="text-xs text-neutral-500">
                {date}
              </p>
            </div>
          </Link>

          <UserInfo />
        </div>

        {/* Navigation */}
        <NavLinks navs={navs} />
      </div>
    </header>
  );
};

export default Navbar;