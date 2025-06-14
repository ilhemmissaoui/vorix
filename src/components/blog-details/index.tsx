import React from "react";
import Breacrumb from "@/common/Breacrumb";
import Cta2Area from "../homes/home/Cta2Area";
import BlogDetailsArea from "./BlogDetailsArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

// Expecting `blog` as a prop
const BlogDetails = ({
  blog,
}: {
  blog: { id: string; title: string; img:string; subTitle: string; desc:string; content: string };
}) => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title={blog.title} subtitle="Blog Details" />
      <BlogDetailsArea subTitle={blog.subTitle}  img={blog.img}  title={blog.title} content={blog.content} desc={blog.desc}/>
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default BlogDetails;
