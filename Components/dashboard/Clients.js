import Link from "next/link";
import React from "react";
import UpdateFrom from "./UpdateClient";
import ListofTrening from "./ListofTrening";
import Choose from "../Choose";
function Clients({ item }) {
  return (
    <div className="container">
      <div className="main-body">
        <nav aria-label="breadcrumb" className="main-breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="index.html">Home</a>
            </li>
            <li className="breadcrumb-item">
              <a href="#">User</a>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              User Profile / {item.id}
            </li>
          </ol>
        </nav>

        <div className="row gutters-sm">
          <div className="col-md-4 mb-3">
            <div className="card">
              <div className="card-body">
                <div className="d-flex flex-column align-items-center text-center">
                  <img
                    src={` https://bootdey.com/img/Content/avatar/avatar7.png`}
                    alt="Admin"
                    className="rounded-circle"
                    width="150"
                  />
                  <div className="mt-3">
                    <h4>{item.name}</h4>
                    <p className="text-secondary mb-1">
                      Joined {item.createdAt.slice(0, 10)} -
                      <small> Time: {item.createdAt.slice(11, 19)}</small>
                    </p>
                    <p className="text-muted font-size-sm">
                      Last seen {item.updatedAt.slice(11, 13)} hours ago
                    </p>{" "}
                    <button className="btn btn-outline-primary">
                      Quick Start
                    </button>
                  </div>
                </div>
              </div>
              <Choose item={item} />
            </div>
            <div className="card mt-3">
              <ul className="list-group list-group-flush">
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-twitter mr-2 icon-inline text-info"
                    >
                      <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                    </svg>
                    Twitter
                  </h6>
                  <span className="text-secondary">@{item.name}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-instagram mr-2 icon-inline text-danger"
                    >
                      <rect
                        x="2"
                        y="2"
                        width="20"
                        height="20"
                        rx="5"
                        ry="5"
                      ></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                    Instagram
                  </h6>
                  <span className="text-secondary">{item.email}</span>
                </li>
                <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">
                  <h6 className="mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-facebook mr-2 icon-inline text-primary"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </h6>
                  <span className="text-secondary">{item.name}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8">
            {/* <UpdateFrom /> */}
            <div className="row gutters-sm">
              <div className="col-md-12">
                <div className="card h-100">
                  <div className="card-body">
                    <div>
                      <h1>
                        <strong>We believe</strong> that the internet should be
                        public, open and accessible.
                      </h1>
                      <p>
                        We understand that for many of our members, exercise
                        plays a huge part of your physical and mental wellbeing.
                        And we believe that taking care of that right now has
                        never been more important. To better support you as we
                        get back to the gym, we will be updating our blog
                        regularly to provide you with workout ideas (for the gym
                        and home), wellbeing and nutrition content.
                      </p>
                    </div>
                    <h6 className="d-flex align-items-center mb-3">
                      <i className="material-icons text-danger mr-2">
                        assignment
                      </i>
                      Project Status
                    </h6>
                    <small>Abs</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 40 + "%" }}
                        aria-valuenow="80"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Back</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 30 + "%" }}
                        aria-valuenow="72"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Cardio</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 10 + "%" }}
                        aria-valuenow="89"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Chest</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: 90 + "%" }}
                        aria-valuenow="55"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Legs</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 50 + "%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Legs</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 20 + "%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                    <small>Legs</small>
                    <div className="progress mb-3" style={{ height: 5 + "px" }}>
                      <div
                        className="progress-bar bg-danger"
                        role="progressbar"
                        style={{ width: 50 + "%" }}
                        aria-valuenow="66"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>{" "}
            </div>
            <ListofTrening item={item} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
