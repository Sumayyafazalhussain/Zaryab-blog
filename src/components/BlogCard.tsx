import React from "react";
import { Card, CardContent, CardTitle } from "./ui/card";

interface Blogcardprops {
  post: {
    id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
  };
  isDarkBackground: boolean;
}

export default function BlogCard({ post, isDarkBackground }: Blogcardprops) {
  return (
    <Card
      className={`p-4 ${
        isDarkBackground ? "bg-slate-800 text-white" : "text-slate-800"
      } rounded-lg shadow-lg hover:shadow-xl  transition-shadow duration-300`}
    >
      <img
        src={post.imageUrl}
        alt={post.title}
        className="w-full h-48 object-cover rounded-t-lg"
      />
      <CardTitle className="text-xl font-normal mt-4 text-center">
        {" "}
        {post.title}
      </CardTitle>
      <br />
      <CardContent className="text-center">
        <p> {post.description}</p>
      </CardContent>

      <div className="flex flex-col items-center mt-4">
        <p
          className={`text-sm mb-2 ${
            isDarkBackground ? "text-slate-400" : "text-slate-600"
          }`}
        >
          published on: {new Date(post.date).toLocaleDateString()}
        </p>
        <a
          href={`/posts/${post.id}`}
          className={`w-full px-6 text-white bg-blue-600 rounded hover:bg-blue-500 ${
            isDarkBackground
              ? "bg-black hover:bg-red-500"
              : "bg-black hover:bg-red-500"
          }`}
        >
          Read More
        </a>
      </div>
    </Card>
  );
}
