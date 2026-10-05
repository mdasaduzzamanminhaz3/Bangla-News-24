import Image from "next/image";
import { notFound } from "next/navigation";

const NewsDetails = async ({
  params,
}: {
  params: { newsId: string };
}) => {
  const { newsId } = await params;

  const res = await fetch(
    `https://news-api-v2.vercel.app/api/article/${newsId}`,
  );

  const data = await res.json();
  const news = data.data;

  if (!news) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">
      <article className="mx-auto max-w-5xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Header */}
        <header className="mx-auto max-w-3xl text-center">

          <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            {news.title}
          </h1>

        </header>

        {/* Image */}
        <div className="relative mx-auto mt-10 aspect-video max-w-4xl overflow-hidden rounded-2xl bg-slate-100">
          <Image
            src={news.imageUrl}
            alt={news.title}
            fill
            priority
            className="object-cover transition duration-500 hover:scale-[1.02]"
            sizes="(max-width: 1024px) 100vw, 1024px"
          />
        </div>

        {/* Content */}
        <div className="mx-auto mt-10 max-w-3xl">

          <p className="text-lg leading-8 text-slate-700 sm:text-xl sm:leading-9">
            {news.text}
          </p>
        </div>
      </article>
    </main>
  );
};

export default NewsDetails;
