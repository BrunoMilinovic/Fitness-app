import React from "react";
import BlogStyle from "../styles/Blog.module.css";
import Link from "next/link";
function BlogAside({ user }) {
  return (
    <div className="col-lg-4 m-15px-tb ">
      <div>
        {user && (
          <div className={BlogStyle.card2}>
            <h2>Create a New Post</h2>
            <p>
              “We align our success with the success of our customers which is
              why our offering transcends our software. ”
            </p>
            <Link href="/newblog">
              <button className={BlogStyle.button53} role="button">
                Add a Post
              </button>
            </Link>
            <hr className={BlogStyle.hr} />
          </div>
        )}
        <div className={BlogStyle.card2}>
          <h3>Popular Post</h3>
          <div className="box posts">
            <ul className="list-unstyled">
              <li className={BlogStyle.popLi}>
                <i className="fa fa-chevron-right"></i>
                <a className={BlogStyle.popPost} href="#">
                  Introducing WordPress 4.0 “Benny”
                </a>
                <div className={BlogStyle.date}>27/02/2014</div>
              </li>
              <li className={BlogStyle.popLi}>
                <i className="fa fa-chevron-right"></i>
                <a className={BlogStyle.popPost} href="#">
                  Nature Center: Earth Day Festival
                </a>
                <div className={BlogStyle.date}>18/02/2014</div>
              </li>
              <li className={BlogStyle.popLi}>
                <i className="fa fa-chevron-right"></i>
                <a className={BlogStyle.popPost} href="#">
                  Two New Stores Set to Open in Downtown
                </a>
                <div className={BlogStyle.date}>05/02/2014</div>
              </li>
            </ul>
          </div>
        </div>
        <hr className={BlogStyle.hr} />
        <div className={BlogStyle.card2}>
          <h2>Last posts</h2>
          <br />
          <div className="row row-cols-1 row-cols-md-2">
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://prod-ne-cdn-media.puregym.com/media/810063/gymtimidation.jpg?quality=80&mode=pad&width=970"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">Suffering From Gymtimidation?</h5>
                  <p className="card-text">
                    While we love the gym and helping our members embark on
                    their own fitness journeys, we’re mindful that for some,
                    entering the gym can be the source...
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://prod-ne-cdn-media.puregym.com/media/788576/salmon.jpg?quality=80&mode=pad&width=992"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">CALORIES AND WEIGHT LOSS</h5>
                  <p className="card-text">
                    If you’re looking to lose weight, the huge number of diet
                    plans and nutritional guidance available can seem
                    overwhelming, with many competing ideas and eating styles on
                    offer.
                  </p>
                </div>
              </div>
            </div>

            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://prod-ne-cdn-media.puregym.com/media/789823/blogimages_longform_age-05_12.jpg?quality=80&mode=pad&width=992"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">10 YOGA POSES</h5>
                  <p className="card-text">
                    If you’re looking to improve flexibility and increase range
                    of motion, yoga holds the key. But there are other reasons
                    to include yoga in your daily regimen.
                  </p>
                </div>
              </div>
            </div>
            <div className="col mb-4">
              <div className="card">
                <img
                  src="https://prod-we-cdn-media.puregym.com/media/796561/extra_images_0006_kaybeth.jpg?quality=80&mode=pad&width=992"
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">UPPER BODY DUMBBELL WORKOUT</h5>
                  <p className="card-text">
                    Watch the full workout featuring personal trainer Beth
                    Trueman and PureGym Insider @kaypuregym and give it a go!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={BlogStyle.card2}>
          <h2>Tags</h2>
          <hr className={BlogStyle.hr} />
          <div className={BlogStyle.Spantags}>
            <span className="badge rounded-pill bg-primary">Gym</span>
            <span className="badge rounded-pill bg-secondary">Fitness</span>
            <span className="badge rounded-pill bg-success">Workout</span>
            <span className="badge rounded-pill bg-danger">Blog</span>
            <span className="badge rounded-pill bg-warning text-dark">
              Warning
            </span>
            <span className="badge rounded-pill bg-info text-dark">#Healt</span>
            <span className="badge rounded-pill bg-light text-dark">Run</span>
            <span className="badge rounded-pill bg-dark">Toga</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogAside;
