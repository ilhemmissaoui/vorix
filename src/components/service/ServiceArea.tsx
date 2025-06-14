"use client";
import Link from "next/link";
import React, { useState } from "react";

export const services = [
  {
    id: "1",
    icon: "campaign", 
    title: "Digital Marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/digital-marketing.jpg",
  },
  {
    id: "2",
    icon: "code", 
    title: "Web Development",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/webDev.jpg",
  },
  {
    id: "3",
    icon: "edit_note", 
    title: "Content creation",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/mobileApp.jpg",
  },
  {
    id: "4",
    icon: "palette",
    title: "UI/UX Design",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/ux.jpg",
  },
  {
    id: "5",
    icon: "search", 
    title: "SEO optimization",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/digital-marketing.jpg",
  },
  {
    id: "6",
    icon: "share",
    title: "Social media management",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/ux.jpg",
  },
  {
    id: "7",
    icon: "videocam", 
    title: "video production",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/ux.jpg",
  },
  {
    id: "8",
    icon: "group",
    title: "Influencers marketing",
    description:
      "Designed user interface contributes to a positive and a good user experience.",
    bgImage: "assets/img/ux.jpg",
  },
];

const ServiceArea = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <>
      <div className="service-wrapper">
        <div className="divider"></div>

        <div className="container">
          <div className="text-center mb-5">
            <h2 className="display-6 fw-bold mb-3" style={{ color: "#ff971e" }}>
              Our Services
            </h2>
            <p>
              We deliver end-to-end digital solutions designed to elevate your
              business, drive growth, and ensure lasting success in today&apos;s
              dynamic digital landscape.
            </p>
          </div>

          <div className="row g-4 g-lg-5">
            {services.map((item, i) => (
              <div key={i} className="col-12 col-md-6 col-xl-4">
                <Link href={`/service-details/${item.id}`}>
                  <div
                    onMouseEnter={() => setActiveIndex(i)}
                    onMouseLeave={() => setActiveIndex(null)}
                    className={`service-slide-card ${
                      activeIndex === i ? "active" : ""
                    }`}
                    style={{
                      backgroundImage:
                        activeIndex === i
                          ? "none"
                          : `linear-gradient(rgba(46, 46, 46, 0.7), rgba(46, 46, 46, 0.7)), url(${item.bgImage})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      backgroundColor:
                        activeIndex === i ? "#ff971e" : "transparent",
                    }}
                  >
                    <span
                      className="material-symbols-outlined"
                      style={{
                        color: "white",
                      }}
                    >
                      {item.icon}
                    </span>
                    <h2
                      style={{
                        bottom: `${activeIndex === i ? "140px" : ""}`,
                        color: "white",
                      }}
                    >
                      {item.title}
                    </h2>
                    <p
                      className="mb-0"
                      style={{
                        bottom: `${activeIndex === i ? "45px" : ""}`,
                        color: "white",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default ServiceArea;
