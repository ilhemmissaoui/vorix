"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};
interface BlogDetailsAreaProps {
  subTitle: string;
  title: string;
  img: string;
  content: string;
  desc: string;
}
const BlogDetailsArea: React.FC<BlogDetailsAreaProps> = ({
  subTitle,
  title,
  img,
  content,
  desc,
}) => {
  return (
    <motion.div
      className="blog-page-wrap"
      initial="hidden"
      animate="visible"
      variants={{}}
    >
      <div className="divider"></div>

      <div className="container">
        <div className="row g-4 g-xl-5">
          {/* MAIN BLOG CONTENT */}
          <motion.div
            className="col-12 col-md-7 col-lg-8"
            custom={0}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="single-blog" custom={1} variants={fadeUp}>
              <img src={img} alt="" />
              <div className="blog-meta d-flex align-items-center">
                <a href="#">March 26, 24</a>
                <div className="dot"></div>
                <a href="#">{title}</a>
              </div>
              <a className="post-title mb-5" href="#">
                {title}
              </a>
            </motion.div>

            <motion.div
              className="blog-details-content"
              custom={2}
              variants={fadeUp}
            >
              <p>{subTitle}</p>
              <p>{content}</p>

              {/* QUOTE */}
              <motion.div className="blog-quote" custom={3} variants={fadeUp}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  fill="currentColor"
                  className="bi bi-quote"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.55 3a1.5 1.5 0 0 1 1.493 1.356l.007.144v3a1.5 1.5 0 0 1-1.356 1.493L6.55 9H5a2 2 0 0 1-1.995-1.85L3 7.05V6H1.5a.5.5 0 0 1-.09-.992L1.5 5H3V4a2 2 0 0 1 1.85-1.995L5 2h1.55Zm7 0a1.5 1.5 0 0 1 1.493 1.356l.007.144v3a1.5 1.5 0 0 1-1.356 1.493L13.55 9H12a2 2 0 0 1-1.995-1.85L10 7.05V6h-1.5a.5.5 0 0 1-.09-.992L8.5 5H10V4a2 2 0 0 1 1.85-1.995L12 2h1.55Z" />
                </svg>
                <p>
                  “Mosico has been an invaluable partner to us. Their
                  professional, knowledgeable, and friendly team helped us
                  develop our website to where it is today. We were looking for
                  a new look and feel for our site and they produced a great
                  design we are proud of.”
                </p>
              </motion.div>

              <p>{desc}</p>
            </motion.div>

            {/* Tags & Share */}
            <motion.div className="tags-share" custom={4} variants={fadeUp}>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-2">
                <div className="tags d-flex gap-2 flex-wrap">
                  <a href="#">#Design</a>
                  <a href="#">#Development</a>
                </div>
                <div className="blog-share d-flex align-items-center gap-2">
                  <span>Share:</span>
                  <a href="#">
                    <i className="bi bi-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-twitter-x"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-linkedin"></i>
                  </a>
                  <a href="#">
                    <i className="bi bi-instagram"></i>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Blog Pager */}
            <motion.div className="blog-pager" custom={5} variants={fadeUp}>
              <div className="d-flex align-items-center justify-content-between flex-wrap gap-3">
                <a href="#" className="pager-link">
                  <i className="bi bi-arrow-left-short"></i>
                  Prev Post
                </a>
                <a href="#" className="pager-link">
                  Next Post
                  <i className="bi bi-arrow-right-short"></i>
                </a>
              </div>
            </motion.div>

            {/* Comments */}
            <motion.div className="blog-comments" custom={6} variants={fadeUp}>
              <h5 className="mb-4">Comments (2)</h5>
              <div className="comment d-flex mb-4">
                <div className="avatar">
                  <img src="/assets/img/blogs/avatar-1.jpg" alt="" />
                </div>
                <div className="comment-content ms-3">
                  <h6 className="mb-1">John Smith</h6>
                  <p className="mb-1">Great article! Thanks for sharing.</p>
                  <span className="text-muted">March 26, 2024</span>
                </div>
              </div>
              <div className="comment d-flex">
                <div className="avatar">
                  <img src="/assets/img/blogs/avatar-2.jpg" alt="" />
                </div>
                <div className="comment-content ms-3">
                  <h6 className="mb-1">Jane Doe</h6>
                  <p className="mb-1">
                    Very insightful. Looking forward to more.
                  </p>
                  <span className="text-muted">March 27, 2024</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* SIDEBAR */}
          <motion.div
            className="col-12 col-md-7 col-lg-4"
            custom={7}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
          >
            <motion.div className="blog-widget" custom={8} variants={fadeUp}>
              <h4 className="mb-4">Recent Post</h4>

              <div className="d-flex flex-column gap-4">
                <div className="widget-blog-post">
                  <div className="blog-thumbnail">
                    <img src="/assets/img/blogs/1.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h6>
                      <Link href="/blog-details">
                        Graphic Design Agency your Brand Needs.
                      </Link>
                    </h6>
                    <p className="mb-0">March 26, 2024</p>
                  </div>
                </div>
                <div className="widget-blog-post">
                  <div className="blog-thumbnail">
                    <img src="/assets/img/blogs/2.jpg" alt="" />
                  </div>
                  <div className="blog-content">
                    <h6>
                      <Link href="/blog-details">
                        How Digital Marketing Boosts Startups
                      </Link>
                    </h6>
                    <p className="mb-0">March 25, 2024</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="divider"></div>
    </motion.div>
  );
};

export default BlogDetailsArea;
