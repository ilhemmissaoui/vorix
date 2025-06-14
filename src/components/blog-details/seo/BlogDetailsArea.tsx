"use client";
import Link from "next/link";
import React from "react";

const BlogDetailsArea = () => {
  return (
    <>
      <div className="blog-page-wrap">
        <div className="divider"></div>

        <div className="container">
          <div className="row g-4 g-xl-5">
            <div className="col-12 col-md-7 col-lg-8">
              <div className="single-blog">
                <img src="/assets/img/blogs/seo.jpg" alt="" />
                <div className="blog-meta d-flex align-items-center">
                  <a href="#">March 26, 24</a>
                  <div className="dot"></div>
                  <a href="#">SEO</a>
                </div>
                <a className="post-title mb-5" href="#">
                  A new digital strategy is putting SEO in the spotlight.
                  Businesses are turning to professional SEO services to boost
                  visibility and gain a competitive edge online. Industry
                  experts say it's the most effective way to get to the
                  limelight in search engine rankings. While results don't
                  happen overnight, a well-crafted SEO plan can steadily
                  increase traffic, improve engagement, and elevate your brand's
                  online presence. If you're aiming to stand out, SEO is the
                  long-term move to watch.
                </a>
              </div>

              <div className="blog-details-content">
                <p>What are professional SEO services?</p>

                <p>
                  Professional SEO services are strategic techniques used to
                  improve a website's visibility on search engines like Google.
                  These services include keyword optimization, content creation,
                  technical audits, and backlink building. The goal is to help
                  businesses climb search rankings and get noticed by the right
                  audience. With consistent efforts, SEO can push a brand into
                  the digital limelight—boosting traffic, credibility, and
                  long-term growth.
                </p>

                <div className="blog-quote">
                  <div className="blog-quote-icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="60"
                      height="60"
                      viewBox="0 0 60 60"
                      fill="none"
                    >
                      <path
                        d="M34.5977 30.898H47.481C47.003 36.6266 42.2094 41.1427 36.3885 41.1427C35.8702 41.1427 35.451 41.564 35.451 42.0849V48.1495C35.451 48.6704 35.8702 49.0917 36.3885 49.0917C46.8877 49.0917 55.4297 40.5078 55.4297 29.9558V9.9615C55.4297 9.44064 55.0104 9.01929 54.4922 9.01929H34.5977C34.0794 9.01929 33.6602 9.44064 33.6602 9.9615V29.956C33.6602 30.4766 34.0796 30.898 34.5977 30.898ZM35.5352 10.9037H53.5547V29.956C53.5547 39.1527 46.3567 46.6913 37.326 47.1817V42.9932C44.0625 42.5092 49.3944 36.8467 49.3944 29.9558C49.3944 29.4349 48.9752 29.0136 48.4569 29.0136H35.5352V10.9037Z"
                        fill="#0E0E0E"
                      />
                      <path
                        d="M6.48438 30.8982H19.3696C18.8916 36.6269 14.0999 41.1429 8.27706 41.1429C7.75881 41.1429 7.33956 41.5643 7.33956 42.0851V48.1497C7.33956 48.6706 7.75881 49.092 8.27706 49.092C18.7763 49.092 27.3183 40.508 27.3183 29.956V9.96174C27.3183 9.44089 26.899 9.01953 26.3808 9.01953H6.48438C5.96613 9.01953 5.54688 9.44089 5.54688 9.96174V29.9562C5.54688 30.4769 5.96631 30.8982 6.48438 30.8982ZM7.42188 10.904H25.4431V29.9562C25.4431 39.1529 18.2451 46.6916 9.21438 47.1819V42.9934C15.9509 42.5095 21.2828 36.847 21.2828 29.956C21.2828 29.4352 20.8636 29.0138 20.3453 29.0138H7.42188V10.904Z"
                        fill="#0E0E0E"
                      />
                    </svg>
                  </div>

                  <p>
                    “And the day came when staying hidden in search results was
                    more costly than the effort it took to rise to the top.”
                  </p>
                </div>

                <p>
                  SEO isn't just a buzzword—it's essential to your digital
                  success. Search engines like Google use complex algorithms to
                  rank content, and SEO helps optimize your site's structure,
                  content, and performance to boost visibility and traffic. At
                  Sole Digital Media, our experts stay ahead of algorithm
                  updates to craft strategies that keep your business leading in
                  the digital space.
                </p>
              </div>

             

            

              <div className="divider-sm"></div>

           


            </div>

            <div className="col-12 col-md-7 col-lg-4">
              <div className="d-flex flex-column gap-5">

                <div className="blog-widget">
                  <h4 className="mb-4">Categories</h4>

                  <ul className="blog-list">
                    <li>
                      <Link href="/blog-details">
                        Agency
                        <span>(03)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details">
                        Business
                        <span>(01)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details">
                        Development
                        <span>(05)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details">
                        UI/UX Design
                        <span>(02)</span>
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog-details">
                        Marketing
                        <span>(04)</span>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="blog-widget">
                  <h4 className="mb-4">Recent Post</h4>

                  <div className="d-flex flex-column gap-4">
                    <div className="widget-blog-post">
                      <div className="blog-thumbnail">
                        <img src="/assets/img/bg-img/41.jpg" alt="" />
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
                        <img src="/assets/img/bg-img/42.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <h6>
                          <Link href="/blog-details">
                            Providing Brilliant Ideas For your Business
                          </Link>
                        </h6>
                        <p className="mb-0">March 26, 2024</p>
                      </div>
                    </div>

                    <div className="widget-blog-post">
                      <div className="blog-thumbnail">
                        <img src="/assets/img/bg-img/43.jpg" alt="" />
                      </div>
                      <div className="blog-content">
                        <h6>
                          <Link href="/blog-details">
                            The Latest Trends With Digital Marketing
                          </Link>
                        </h6>
                        <p className="mb-0">March 26, 2024</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="divider"></div>
      </div>
    </>
  );
};

export default BlogDetailsArea;
