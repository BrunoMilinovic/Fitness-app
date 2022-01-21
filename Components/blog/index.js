import React from "react";
import BlogStyle from "../../styles/Blog.module.css";

function ha({ item }) {
  return (
    <div className={(BlogStyle.card, BlogStyle.single_post)}>
      <div className={BlogStyle.body}>
        <div className={BlogStyle.img_post}>
          <div className={BlogStyle.Written}>
            Written by {item.Email} / {item.First_Name}.
          </div>
          <img
            className="d-block img-fluid"
            src={`${item.Image}`}
            alt="First slide"
          />
        </div>
        <h3>
          <h3 className={BlogStyle.blog_h3}>
            <em>{item.Title}</em>
          </h3>
          <p className={BlogStyle.authorDate}>
            By: {item.Email} | Posted: <small> year </small>
            {item.createdAt.slice(0, 4)}, <small> hour </small>
            {item.createdAt.slice(14, 20)}
          </p>
        </h3>

        <p>{item.Message}</p>
      </div>
      <div className={BlogStyle.footer}>
        <div className={BlogStyle.actions}>
          <a className="btn btn-outline-secondary">Continue Reading</a>
        </div>
        <ul className={BlogStyle.stats}>
          <li>
            <a>General</a>
          </li>
          <li>
            <a>
              <i className="fab fa-facebook"> </i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-instagram"></i>
            </a>
          </li>
          <li>
            <a>
              <i className="fab fa-linkedin-in"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default ha;
