import React, { useState } from "react";
import { useRouter } from "next/router";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";

function Newpost() {
  const router = useRouter();
  const [FirstName, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Title, setTitle] = useState("");
  const [Message, setMessage] = useState("");
  const [Email, setEmail] = useState("");
  const [Subtitle, setSubtitle] = useState("");
  const [Image, setImage] = useState("");
  const SendNewPost = async (e) => {
    e.preventDefault();
    const res = await fetch("http://localhost:2000/api/user/blog/newblog", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        FirstName,
        LastName,
        Title,
        Message,
        Email,
        Subtitle,
        Image,
      }),
    });
    const data = await res.json();
    if (data.status === "ok") {
      router.push("http://localhost:3000/blog");
      console.log(data);
    }
  };

  return (
    <div className="container-fluid mt-2">
      <div className="row flex d-flex justify-content-center">
        <div className="col-lg-8 col-lg-offset-2">
          <form
            onSubmit={SendNewPost}
            id="contact-form"
            method="post"
            action="contact.php"
            role="form"
          >
            <div className="controls">
              <div className="row ">
                <div className="col-md-6 my-2">
                  <div className="form-group">
                    <label htmlFor="form_name">Firstname *</label>
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      className="form-control"
                      placeholder="Please enter your firstname *"
                      required="required"
                      data-error="Firstname is required."
                      value={FirstName}
                      onChange={(e) => {
                        setFirstName(e.target.value);
                      }}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6  my-2">
                  <div className="form-group">
                    <label htmlFor="form_lastname">Lastname *</label>
                    <input
                      id="form_lastname"
                      type="text"
                      name="surname"
                      className="form-control"
                      placeholder="Please enter your lastname *"
                      required="required"
                      data-error="Lastname is required."
                      value={LastName}
                      onChange={(e) => setLastName(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6  my-2">
                  <div className="form-group">
                    <label htmlFor="form_email">Email *</label>
                    <input
                      id="form_email"
                      type="text"
                      name="email"
                      className="form-control"
                      placeholder="Please enter your email *"
                      required="required"
                      data-error="Valid email is required."
                      value-={Email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="form-group">
                    <label htmlFor="form_phone">Title</label>
                    <input
                      id="form_phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Please enter your title"
                      value={Title}
                      onChange={(e) => {
                        setTitle(e.target.value);
                      }}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 my-2">
                  <div className="form-group">
                    <label htmlFor="form_phone">Subtitle</label>
                    <input
                      id="form_phone"
                      type="text"
                      name="phone"
                      className="form-control"
                      placeholder="Please enter your subtitle"
                      value={Subtitle}
                      onChange={(e) => setSubtitle(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-6 my-2">
                  <div className="form-group">
                    <label htmlFor="form_phone">Upload Image</label>
                    <input
                      id="image_form"
                      type="text"
                      name="image"
                      className="form-control"
                      placeholder="https://..../post_image"
                      value={Image}
                      onChange={(e) => setImage(e.target.value)}
                    />
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12 my-2">
                  <div className="form-group">
                    <label htmlFor="form_message">Message *</label>
                    <textarea
                      id="form_message"
                      name="message"
                      className="form-control"
                      placeholder="Leave your comment"
                      rows="4"
                      required="required"
                      data-error="Please,leave us a message."
                      value={Message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                    <div className="help-block with-errors"></div>
                  </div>
                </div>
                <div className="col-md-12">
                  <input
                    type="submit"
                    className="btn btn-success btn-send"
                    value="Send message"
                    onClick={SendNewPost}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <p className="text-muted">
                    <strong>*</strong> These fields are required. Contact form
                    template by{" "}
                    <a href="https://bootstrapious.com" target="_blank">
                      Bootstrapious
                    </a>
                    .
                  </p>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Newpost;
export const getServerSideProps = withPageAuthRequired();
