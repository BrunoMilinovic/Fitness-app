import React from "react";
import StyleList from "../../styles/List.module.css";
import Link from "next/link";
import List from "./ListofUsers";
function index() {
  return (
    <div className="container">
      <div className="container-fluid p-0">
        <h1 className="h3 mb-3"></h1>
        <div className="row">
          <div className="col-xl-12">
            <header class={StyleList.masthead}>
              <div class="container">
                <div class="row align-items-center">
                  <div class="col-lg-7 py-5">
                    <h1 class="mb-4" style={{ color: "red" }}>
                      Try The All-In-One Software For Coaches, Personal Trainers
                      & Clubs
                    </h1>
                    <h2
                      class="m-0"
                      style={{
                        color: "snow",
                        fontSize: 20 + "px",
                        lineHeight: 1.6,
                      }}
                    >
                      Try The All-In-One Software For Coaches, Personal Trainers
                      "$" Clubs <a href="/themes">themes</a>, My Double Power
                      Hub is an online web and mobile app, enabling personal
                      trainers, coaches and gym owners to manage their clients
                      by creating customisable training and nutrition
                      programmes, whilst tracking their progress and
                      achievements
                    </h2>
                  </div>
                  <div class="col-lg-5">
                    <div class={`py-5 px-4 ${StyleList.masthead_cards}`}>
                      <div class="d-flex">
                        <a href="#" class="w-50 pr-3 pb-4">
                          <div
                            style={{ marginRight: 22 + "px" }}
                            class={`${StyleList.card} border-0 ${StyleList.borderred} shadow-lg shadow-hover`}
                          >
                            <div class="card-body text-center">
                              <Link href="/">
                                <div>
                                  <div class="text-center">
                                    <i class="fa fa-pencil fa-4x my-2"></i>
                                  </div>

                                  <em>Quick Start</em>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </a>
                        <a href="#" class="w-50 pl-3 pb-4">
                          <div
                            class={`${StyleList.card} border-0 ${StyleList.borderblue} shadow-lg shadow-hover`}
                          >
                            <div class="card-body text-center">
                              <Link href="/trening">
                                <div>
                                  <div class="text-center">
                                    <i class="fa fa-th fa-4x my-2"></i>
                                  </div>

                                  <em>Trening</em>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="d-flex">
                        <a href="#" class="w-50 pr-3">
                          <div
                            style={{ marginRight: 22 + "px" }}
                            class={`${StyleList.card} border-0 ${StyleList.bordergreen} shadow-lg shadow-hover`}
                          >
                            <div class="card-body text-center">
                              <Link href="/api/auth/logout">
                                <div>
                                  <div class="text-center">
                                    <i class="fa fa-4x fa-code my-2"></i>
                                  </div>

                                  <em>Logout</em>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </a>
                        <a href="#" class="w-50 pl-3">
                          <div
                            class={`${StyleList.card} border-0 ${StyleList.borderyellow} shadow-lg shadow-hover`}
                          >
                            <div class="card-body text-center">
                              <Link href="/blog">
                                <div>
                                  <div class="text-center">
                                    <i class="fa fa-4x fa-list my-2"></i>
                                  </div>
                                  <em>Blog</em>
                                </div>
                              </Link>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div class="shape"></div>
                    </div>
                  </div>
                </div>
              </div>
              <svg
                style={{ pointerevents: "none" }}
                class="wave"
                width="100%"
                height="50px"
                preserveAspectRatio="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 1920 75"
              >
                <defs>
                  <clipPath id="a">
                    <rect class="a" width="1920" height="75"></rect>
                  </clipPath>
                </defs>
                <title>wave</title>
                <g class="b">
                  <path
                    class="c"
                    d="M1963,327H-105V65A2647.49,2647.49,0,0,1,431,19c217.7,3.5,239.6,30.8,470,36,297.3,6.7,367.5-36.2,642-28a2511.41,2511.41,0,0,1,420,48"
                  ></path>
                </g>
                <g class="b">
                  <path
                    class="d"
                    d="M-127,404H1963V44c-140.1-28-343.3-46.7-566,22-75.5,23.3-118.5,45.9-162,64-48.6,20.2-404.7,128-784,0C355.2,97.7,341.6,78.3,235,50,86.6,10.6-41.8,6.9-127,10"
                  ></path>
                </g>
                <g class="b">
                  <path
                    class="d"
                    d="M1979,462-155,446V106C251.8,20.2,576.6,15.9,805,30c167.4,10.3,322.3,32.9,680,56,207,13.4,378,20.3,494,24"
                  ></path>
                </g>
                <g class="b">
                  <path
                    class="d"
                    d="M1998,484H-243V100c445.8,26.8,794.2-4.1,1035-39,141-20.4,231.1-40.1,378-45,349.6-11.6,636.7,73.8,828,150"
                  ></path>
                </g>
              </svg>
            </header>
            <List />
          </div>
        </div>
      </div>
    </div>
  );
}

export default index;
