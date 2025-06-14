import React from "react";
import Breacrumb from "@/common/Breacrumb";
import Cta2Area from "../../homes/home/Cta2Area";
import BlogDetailsArea from "./BlogDetailsArea";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";

const BlogDetails = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb
        title="Content Marketing Service"
        subtitle="Content Marketing Service"
      />
      <BlogDetailsArea />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default BlogDetails;
