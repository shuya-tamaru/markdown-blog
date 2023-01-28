import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { marked } from "marked";
import Link from "next/link";

type Props = {
  frontmatter: { title: string; date: string; cover_image: string };
  slug: string;
  content: string;
};

export default function PostPage({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}: Props) {
  return (
    <>
      <Link href="/">
        <button className="btn btn-back">Go Back</button>
      </Link>
      <div className="card, card-page">
        <h1 className="post-title">{title}</h1>
        <div className="post-date">Posted on{date}</div>
        <img src={cover_image} alt="" />
        <div className="post-body">
          <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
        </div>
      </div>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("posts"));
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

type Params = {
  params: { slug: string };
};

export async function getStaticProps({ params: { slug } }: Params) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", slug + ".md"),
    "utf-8"
  );
  const { data: frontmatter, content } = matter(markdownWithMeta);
  console.log(frontmatter);
  return {
    props: {
      frontmatter,
      slug,
      content,
    },
  };
}
