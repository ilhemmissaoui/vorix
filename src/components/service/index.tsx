import React from "react";
import ServiceArea from "./ServiceArea";
import ServiceAbout from "./ServiceAbout";
import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import FooterOne from "@/layouts/footers/FooterOne";
import Cta2Area from "../homes/home/Cta2Area";
import ProcessArea from "../homes/home-2/ProcessArea";
import BlogArea from "../homes/home-2/BlogArea";
import CategoryArea from "../homes/home-2/CategoryArea";
import ProjectArea from "../homes/home-2/ProjectArea";

const Service = () => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title="Services" subtitle="Services" />
      <ServiceArea />
      <CategoryArea />

      {/* <ServiceAbout /> */}
      {/* <PriceArea style_2={true} /> */}
      <ProcessArea />
      {/* <BlogArea /> */}
      <ProjectArea />

      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default Service;
