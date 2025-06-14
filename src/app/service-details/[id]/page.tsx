// src/app/services-details/[id]/page.tsx

import { Metadata } from "next";
import { notFound } from "next/navigation";
import Wrapper from "@/layouts/Wrapper";
import ServiceDetails from "@/components/service-details";

const services = [
  {
    id: "1",
    title: "Digital Marketing",
    subTitle: "Captivating strategies that engage audiences and elevate your brand.",
    description: "Designed user interface contributes to a positive and a good user experience. From research to execution, our digital marketing services combine strategy, creativity, and data to help brands grow, reach wider audiences, and drive real results.",
    description2: "Our digital marketing approach ensures that your brand stands out in the crowded online space, leveraging the latest tools and techniques to engage your target audience effectively. We focus on creating personalized campaigns that resonate with your audience, driving both engagement and conversions.",
    list: [
      {
        title: "Marketing Strategy & Planning",
        description: "Develop comprehensive marketing strategies tailored to your business goals, ensuring a cohesive approach across all channels."
      },
      {
        title: "Search Engine Optimization (SEO)",
        description: "Enhance your website's visibility on search engines to attract more organic traffic and improve search rankings."
      },
      {
        title: "Pay-Per-Click Advertising (PPC)",
        description: "Manage targeted advertising campaigns to maximize ROI and reach potential customers effectively."
      },
      {
        title: "Email & Content Marketing",
        description: "Engage your audience through personalized email campaigns and valuable content that drives conversions."
      }
    ],
    bgImage: "/assets/img/digital-marketing.jpg",
    content: "We offer complete digital marketing strategies to boost your brand online..."
  },
  {
    id: "2",
    title: "Web Development",
    subTitle: "We believe in the power of web development to drive societal change one line of code at a time.",
    description: "At Sole Digital Media, we deliver comprehensive web and e-commerce solutions that boost your digital presence and unlock business growth. From design to deployment and ongoing support, we create visually stunning, user-friendly, and SEO-optimized websites that drive traffic, engagement, and conversions—empowering your success in the digital marketplace.",
    description2: "Our team specializes in building scalable and secure web applications tailored to your business needs, ensuring a seamless user experience across all devices. We stay updated with the latest technologies to provide innovative solutions that keep you ahead of the competition.",
    list: [
      {
        title: "Front-End Development",
        description: "Craft responsive and interactive user interfaces using modern frameworks like React, ensuring optimal user experiences."
      },
      {
        title: "Back-End Development",
        description: "Develop robust server-side applications and APIs that handle business logic and data management efficiently."
      },
      {
        title: "Full-Stack Solutions",
        description: "Provide end-to-end development services, integrating front-end and back-end systems for cohesive applications."
      },
      {
        title: "CMS & E-commerce Integration",
        description: "Implement content management systems and e-commerce platforms to streamline content updates and online sales."
      }
    ],
    bgImage: "/assets/img/webDev.jpg",
    content: "Our web development services cover everything from static sites to web apps..."
  },
  {
    id: "3",
    title: "Content Creation",
    subTitle: "Content creation that connects, empowers, and transforms society. One piece of meaningful content at a time.",
    description: "At Sole Digital Media, we create compelling content that strengthens your brand and drives engagement. From strategy to storytelling, our content solutions captivate audiences, build trust, and deliver real results across digital platforms.",
    description2: "We tailor content strategies to your brand's voice, ensuring consistency and resonance with your target audience across various channels. Our team focuses on producing high-quality content that not only informs but also inspires action.",
    list: [
      {
        title: "Content Strategy",
        description: "Develop a comprehensive plan to create, publish, and manage content that aligns with your business objectives."
      },
      {
        title: "Copywriting",
        description: "Craft persuasive and engaging written content that effectively communicates your brand message."
      },
      {
        title: "Blog & Article Writing",
        description: "Produce informative and SEO-optimized articles to establish authority and drive organic traffic."
      },
      {
        title: "Social Media Content",
        description: "Create shareable and impactful content tailored for various social media platforms to boost engagement."
      }
    ],
    bgImage: "/assets/img/mobileApp.jpg",
    content: "We craft compelling content that connects with your audience..."
  },
  {
    id: "4",
    title: "UI/UX Design",
    subTitle: "Designing intuitive, user-first experiences that inspire action and build trust. One seamless journey crafted with purpose.",
    description: "At Sole Digital Media, we craft UX designs that prioritize usability, clarity, and user satisfaction. From research to prototyping, we build intuitive experiences that drive engagement and elevate digital products.",
    description2: "Our design philosophy centers on empathy and innovation, ensuring that every interface we create is both functional and delightful to use. We conduct thorough user research to understand needs and behaviors, translating insights into designs that enhance user satisfaction.",
    list: [
      {
        title: "User Research & Analysis",
        description: "Conduct in-depth studies to understand user behaviors, needs, and motivations to inform design decisions."
      },
      {
        title: "Wireframing & Prototyping",
        description: "Create visual representations and interactive prototypes to visualize and test design concepts."
      },
      {
        title: "UI/UX Design",
        description: "Design intuitive and aesthetically pleasing interfaces that enhance user interaction and satisfaction."
      },
      {
        title: "Usability Testing",
        description: "Evaluate the effectiveness and efficiency of designs through user testing to identify areas for improvement."
      }
    ],
    bgImage: "/assets/img/ux.jpg",
    content: "Our UI/UX team designs intuitive interfaces that users love..."
  },
  {
    id: "5",
    title: "SEO Optimization",
    subTitle: "SEO optimization unlocks visibility, connecting brands with the audiences that matter most.",
    description: "Comprehensive, data-driven SEO strategies are essential to boosting online visibility and ranking higher in search results. By combining technical audits, content optimization, and continuous performance monitoring, we create websites that are both search engine–friendly and user-centric—driving sustainable growth, increased traffic, and higher conversions in a competitive digital marketplace.",
    description2: "Our SEO experts stay abreast of the latest algorithm changes to ensure your website maintains high rankings and attracts quality traffic. We implement ethical SEO practices that focus on long-term success, helping your brand establish authority and trust online.",
    list: [
      {
        title: "Technical SEO Audits",
        description: "Analyze website infrastructure to identify and fix issues affecting search engine crawling and indexing."
      },
      {
        title: "On-Page Optimization",
        description: "Optimize individual web pages to improve search engine rankings and enhance user experience."
      },
      {
        title: "Content Strategy & Keyword Research",
        description: "Develop content plans based on thorough keyword analysis to target relevant search queries."
      },
      {
        title: "Link Building & Authority Growth",
        description: "Acquire high-quality backlinks to increase domain authority and improve search engine visibility."
      }
    ],
    bgImage: "/assets/img/digital-marketing.jpg",
    content: "From keyword research to technical SEO, we’ve got you covered..."
  },
  {
    id: "6",
    title: "Social Media Management",
    subTitle: "Social media management drives meaningful connections that build brand loyalty and boost engagement.",
    description: "Effective social media strategies combine content creation, community engagement, and data analytics to grow your brand's online presence. By managing platforms strategically, we foster authentic audience relationships that translate into business growth.",
    description2: "Our team curates and schedules content that resonates with your audience, fostering community growth and brand advocacy. We monitor performance metrics to continually refine our strategies, ensuring optimal engagement and reach.",
    list: [
      {
        title: "Content Creation & Scheduling",
        description: "Develop and plan engaging content calendars to maintain a consistent social media presence."
      },
      {
        title: "Community Management",
        description: "Engage with your audience by responding to comments, messages, and fostering discussions."
      },
      {
        title: "Social Media Advertising",
        description: "Create and manage targeted ad campaigns to increase brand awareness and drive conversions."
      },
      {
        title: "Analytics & Performance Tracking",
        description: "Monitor key metrics to assess campaign effectiveness and inform future strategies."
      }
    ],
    bgImage: "/assets/img/ux.jpg",
    content: "We manage, plan, and execute your social media strategy..."
  },
  {
    id: "7",
    title: "Video Production",
    subTitle: "Captivating stories that engage audiences and elevate your brand.",
    description: "From concept to final cut, our video production services combine creativity, technical expertise, and storytelling to deliver compelling videos that resonate with your audience and drive meaningful results.",
    description2: "We produce high-quality videos that align with your brand's message, enhancing engagement and conversion rates. Our team handles every aspect of production, ensuring a seamless process from pre-production planning to post-production editing.",
    list: [
      {
        title: "Concept Development & Storyboarding",
        description: "Ideate and plan video content, creating detailed storyboards to visualize the narrative."
      },
      {
        title: "Filming & Direction",
        description: "Capture high-quality footage with professional direction to bring your story to life."
      },
      {
        title: "Post-Production & Editing",
        description: "Edit and enhance video content, adding effects, music, and graphics for a polished final product."
      },
      {
        title: "Animation & Motion Graphics",
        description: "Incorporate dynamic animations and graphics to convey complex ideas engagingly."
      }
    ],
    bgImage: "/assets/img/ux.jpg",
    content: "From promos to interviews, our video team handles it all..."
  },
  {
    id: "8",
    title: "Influencer Marketing",
    subTitle:
      "Influencer marketing drives authentic connections and builds trust—one collaboration at a time.",
    description: "Partner with trusted influencers to amplify your brand.",
    description2:
      "We identify and collaborate with influencers who align with your brand values, ensuring authentic and effective campaigns. Our approach focuses on building long-term partnerships that drive engagement and foster brand loyalty.",
    list: [
    {
      title: "Influencer Campaign Strategy",
      description: "Develop comprehensive influencer marketing plans that align with your brand objectives, target audience, and desired outcomes. This includes selecting the right platforms, defining campaign goals, and outlining key performance indicators."
    },
    {
      title: "Creator Sourcing & Management",
      description: "Identify and engage with influencers who resonate with your brand's values and audience. Manage relationships, negotiate contracts, and ensure smooth collaboration throughout the campaign lifecycle."
    },
    {
      title: "Content Collaboration & Production",
      description: "Work closely with influencers to co-create authentic and engaging content that aligns with both the creator's style and your brand messaging, ensuring maximum impact and audience engagement."
    },
    {
      title: "Analytics & Performance Reporting",
      description: "Monitor campaign performance using advanced analytics tools to track metrics such as reach, engagement, conversions, and ROI. Provide detailed reports to assess effectiveness and inform future strategies."
    }
  ],
    bgImage: "/assets/img/ux.jpg",
    content: "We connect you with the right influencers for maximum reach...",
  },
];
export async function generateMetadata({
  params,
}: {
  params: { id: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.id === params.id);

  if (!service) {
    return {
      title: "Not Found - Sole Digital",
      description: "The requested service was not found.",
    };
  }

  return {
    title: `${service.title} - Sole Digital`,
    description: service.description,
  };
}

export default function ServiceDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const service = services.find((s) => s.id === params.id);
  if (!service) return notFound();

  return (
    <Wrapper>
      <ServiceDetails service={service} />
    </Wrapper>
  );
}
