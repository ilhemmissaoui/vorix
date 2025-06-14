// src/components/service-details/index.tsx

import React from "react";
import Breacrumb from "@/common/Breacrumb";
import HeaderOne from "@/layouts/headers/HeaderOne";
import Cta2Area from "../homes/home/Cta2Area";
import FooterOne from "@/layouts/footers/FooterOne";
import ServiceDetailsArea from "./ServiceDetailsArea";



export interface Service {
  id: string;
  title: string;
  subTitle: string;
  list?: {
    title: string;
    description: string;
  }[];
  description: string;
  description2: string;
  bgImage: string;
  content: string;
}

const ServiceDetails = ({ service }: { service: Service }) => {
  return (
    <>
      <HeaderOne />
      <Breacrumb title={service.title} subtitle="Service Details" />
      <ServiceDetailsArea service={service} />
      <Cta2Area />
      <FooterOne />
    </>
  );
};

export default ServiceDetails;
