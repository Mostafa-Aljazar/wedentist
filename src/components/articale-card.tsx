/* eslint-disable @next/next/no-img-element */
import { logo } from "@/assets";
import { Blog } from "@/types/blogs-response";
import Link from "next/link";
import React from "react";
import DeleteModal from "./articale-delete";

type Props = Blog & {
  slug: string;
};

const ArticleCard = ({ title, date, preview, slug, id, coverImage }: Props) => {
  return (
    <div className="block">
      <article className="flex   max-[550px]:flex-col gap-4 p-4 bg-white rounded-lg border  ">
        <Link
          href={`/${slug}/blogs/${id}`}
          className=" aspect-square max-[550px]:w-full w-[190px] shrink-0 bg-slate-50 flex  justify-center rounded overflow-hidden items-center"
        >
          <img
            src={coverImage || logo.src}
            alt="cover"
            className=" w-full h-full object-cover"
          />
        </Link>
        <div className=" space-y-3 leading-tight">
          <div className="flex justify-between items-center">
            <Link href={`/${slug}/blogs/${id}`}>
              <p className="text-[1.1rem] lg:text-[1.38rem]  font-semibold text-gray-900">
                {title}
              </p>
            </Link>
            <DeleteModal slug={slug} title={title} id={id}/>
          </div>
          <span className=" text-[#aaaaaa] text-xs block">{date}</span>
          <p className="text-[#aaaaaa] text-sm">{preview}</p>
        </div>
      </article>
    </div>
  );
};

export default ArticleCard;
