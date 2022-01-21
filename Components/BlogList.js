import React from "react";
import Aside from "./BlogAside";
import Blog from "./blog";

import BlogStyle from "../styles/Blog.module.css";
function Bloglist({ posts, user }) {
  return (
    <div id="main-content" className={BlogStyle.blog_page}>
      <div className="container">
        <div className="row clearfix">
          <div className="col-lg-8 col-md-12 left-box">
            <div>
              <h1 className={BlogStyle.h11}>
                <strong>We believe</strong>that the internet should be public,
                open and accessible.
              </h1>
              <p className={BlogStyle.texttitle}>
                We understand that for many of our members, exercise plays a
                huge part of your physical and mental wellbeing. And we believe
                that taking care of that right now has never been more
                important. To better support you as we get back to the gym, we
                will be updating our blog regularly to provide you with workout
                ideas (for the gym and home), wellbeing and nutrition content.
              </p>
            </div>
            {posts.map((item, index) => (
              <Blog key={index} item={item} />
            ))}
          </div>

          <Aside user={user} />
        </div>
      </div>
    </div>
  );
}
export default Bloglist;
