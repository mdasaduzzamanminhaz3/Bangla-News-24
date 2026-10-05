import Link from "next/link";
import React from "react";
interface INavLink {
  id: string;
  title: string;
  slug: string;
  scrapable: boolean;
}
const NavLinks = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/categories");
  const data = await res.json();
  const navs: INavLink[] = data.data;
  const filterNavLinks = navs.filter((n) => n.scrapable);
//   console.log(filterNavLinks);
  return (
    <div className="flex gap-5 justify-center mt-5">
        <Link href={`/`}>হোম</Link>
      {filterNavLinks.map((n, i) => (
        <Link key={i} href={`/category/${n.slug}`}>
          {n.title}
        </Link>
      ))}
    </div>
  );
};

export default NavLinks;
