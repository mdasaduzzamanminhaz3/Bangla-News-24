import Image from "next/image";
import Link from "next/link";

interface News {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    firstPublished:string
}

const NewsCard = ({news} : {news:News}) => {
console.log("single news",news);
const date = new Date(news.firstPublished).toLocaleDateString("bn-BD", {
  dateStyle: "full",
});

  return (
    <Link href={`/news/${news.id}`}>
    <div className="card bg-base-100 hover:text-red-700 shadow-sm">
      <figure>
        <Image
          height={600}
          width={600}
          src={news.imageUrl || "/no-image.jpg"}
          alt={news.imageAlt || news.title}
        />
      </figure>
      <div className="card-body">
        <p className="text-red-600 font-semibold">{news.category}</p>
        <h2 className="card-title">{news.title}</h2>
        <p>{news.description}</p>
        <span className="text-gray-500">{date}</span>
      </div>
    </div>
    </Link>
  );
};

export default NewsCard;