import React from "react";

function Footer() {
  return (
    <div style={{ backgroundColor: "#212529" }}>
      <footer class="text-center text-white">
        <div class="container">
          <section className="border-top border-danger">
            <div class="row text-center d-flex justify-content-center pt-5">
              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a
                    href="#!"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Best gym
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a
                    href="#!"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    About us
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a
                    href="#!"
                    style={{ color: "yellow", textDecoration: "none" }}
                  >
                    Best price
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a
                    href="#!"
                    style={{ color: "yellow", textDecoration: "none" }}
                  >
                    Monthly
                  </a>
                </h6>
              </div>

              <div class="col-md-2">
                <h6 class="text-uppercase font-weight-bold">
                  <a
                    href="#!"
                    style={{ color: "yellow", textDecoration: "none" }}
                  >
                    Results
                  </a>
                </h6>
              </div>
            </div>
          </section>

          <hr class="my-5" />

          <section class="mb-5">
            <div class="row d-flex justify-content-center">
              <div class="col-lg-8">
                <p>
                  From gym promotional messages and class reminders to wait list
                  notifications and gym membership renewal messages, see how you
                  can use this high-priority channel to improve your
                  communication. Articipants will get a programme providing the
                  perfect ‘first workout’ to start your membership. Book your
                  spot on our Class Timetable in the Members Area or via our
                  Mobile App.
                </p>
              </div>
            </div>
          </section>

          <section class="text-center mb-5">
            <a href="" class="text-white me-4">
              <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-google"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="text-white me-4">
              <i class="fab fa-github"></i>
            </a>
          </section>
        </div>

        <div class="text-center p-3">
          © 2022 Copyright:
          <a href="https://mdbootstrap.com/" style={{ color: "yellow" }}>
            {" "}
            Double-power.com
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
