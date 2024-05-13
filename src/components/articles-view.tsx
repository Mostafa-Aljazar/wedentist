import React from "react";
import ArticleCard from "./articale-card";
import { notFound } from "next/navigation";
import data from "@/content/data/blogs.json";
import DeleteModal from "./articale-delete";

type Props = {};


const ArticlesView = async ({ slug }: { slug: string }) => {
  const blogs = data[slug as keyof typeof data];
  if (!blogs) notFound();
  
  return (
    <div className=" space-y-6">
      <button className="group flex items-center justify-between gap-1 rounded-lg border border-primary bg-primary px-1 py-1 transition-colors hover:bg-transparent focus:outline-none ">
        <span className="font-medium text-xl p-1 text-white transition-colors group-hover:text-primary group-active:text-primary">
          اضافة مقال جديد
        </span>

        <span className="shrink-0 rounded-full border border-current bg-white  text-primary group-active:text-primary">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="0.8571428571428571"
            stroke-linecap="round"
            stroke-linejoin="round"
            className="lucide lucide-message-square-plus p-1 "
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            <path d="M12 7v6" />
            <path d="M9 10h6" />
          </svg>
        </span>
      </button>
      {blogs.map((element, index) => {
        return <ArticleCard slug={slug} {...element} key={index} />;
      })}
    </div>
  );
};

export default ArticlesView;
