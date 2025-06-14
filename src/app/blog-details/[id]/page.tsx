// src/app/blog-details/[id]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Wrapper from "@/layouts/Wrapper";
import BlogDetails from "@/components/blog-details";

const blogs = [
  {
    id: "1",
    title: "SEO Service",
    img: "/assets/img/blogs/seo.jpg",
    subTitle: "Get to the limelight with Professional SEO Services",
    desc: "At Sole Digital Media, we rely on data-driven insights to maximize your SEO success...",
    content: `A new digital strategy is putting SEO in the spotlight...`,
  },
  {
    id: "2",
    title: "Branding Design",
    img: "/assets/img/blogs/1.jpg",
    subTitle: "Boost Your Brand With Expert Social Media Marketing Services",
    desc: "One of the biggest benefits of hiring expert services is having full access to detailed analytics...",
    content: `Social media has transformed how businesses engage with customers...`,
  },
  {
    id: "3",
    title: "Web Development",
    img: "/assets/img/blogs/dev.jpg",
    subTitle:
      "Transform Your Online Presence with Advanced Web Development Services",
    desc: "At SoleDigitalMedia, we are a custom Web Development Company dedicated to the creation...",
    content: `A strong web presence is crucial in the digital age...`,
  },
  {
    id: "4",
    title: "Content Marketing Service",
    img: "/assets/img/blogs/4.JPG",
    subTitle:
      "Build Strong Customer Relationships with Comprehensive Content Marketing Services",
    desc: "The flow of fresh and high-quality content acts as a pacemaker to the audience...",
    content: `Content marketing focuses on creating valuable and relevant content...`,
  },
];

export async function generateStaticParams() {
  return blogs.map((blog) => ({ id: blog.id }));
}

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const blog = blogs.find((b) => b.id === params.id);

  if (!blog) {
    return {
      title: "Not Found - Sole Digital",
      description: "The requested blog was not found.",
    };
  }

  return {
    title: `${blog.title} - Sole Digital`,
    description: blog.subTitle,
  };
}

export default function BlogDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const blog = blogs.find((b) => b.id === params.id);
  if (!blog) return notFound();

  return (
    <Wrapper>
      <BlogDetails blog={blog} />
    </Wrapper>
  );
}
