import Link from "next/link";
import React from "react";

type Props = {
  post: {
    slug: string;
    frontmatter: {
      title: string;
      date: string;
      cover_image: string;
      excerpt: string;
    };
  };
};
export default function Post({ post }: Props) {
  return (
    <div className="card">
      <img src={post.frontmatter.cover_image} alt="" />
      <div className="post-date">Posted on {post.frontmatter.date}</div>

      <h3>{post.frontmatter.title}</h3>
      <p>{post.frontmatter.excerpt}</p>

      <Link href={`/blog/${post.slug}`}>
        <button className="btn">Read More</button>
      </Link>
    </div>
  );
}
