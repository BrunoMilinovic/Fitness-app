import React, { useEffect, useState } from "react";
import Style from "../styles/Choose.module.css";
function Choose({ item }) {
  const [datas, setData] = useState({ articles: [] });

  useEffect(async () => {
    const users = async () => {
      const res = await fetch("http://localhost:2000/api/user/jala", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: item.email,
        }),
      });

      const data = await res.json();
      setData(data);
      console.log(datas);
    };
    users();
  }, []);
  return (
    <div>
      <div class="col-lg-8 mx-1">
        <div class="main-title title-left">
          Details<span class="line-left"></span>
        </div>
        <h2 class="w-90">Workout plan</h2>
      </div>

      <div id="accordion" class={`${Style.accordion_style} mx-3`}>
        <div class={Style.card}>
          <div class={Style.card_header} id="headingOne">
            <h5 class="mb-0">
              <button
                class={`btn ${Style.btn_link} collapsed`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="false"
                aria-controls="collapseOne"
              >
                Personal Training Resources!
              </button>
            </h5>
          </div>
          <div
            id="collapseOne"
            class="collapse"
            aria-labelledby="headingOne"
            data-bs-parent="#accordion"
          >
            <div class={`${Style.card_body} position-relative`}>
              <strong>PERSONALIZED</strong>
              <p>
                With personal training, the focus is you. We design a program
                specific to your health and fitness goal and work with you to
                achieve them.
              </p>
              <p>
                Your PERSONALIZED trener: <strong>{datas.Trener}</strong>{" "}
              </p>
            </div>
          </div>
        </div>
        <div class={Style.card}>
          <div class={Style.accordion_style} id="headingTwo">
            <h5 class="mb-0">
              <button
                class={`btn ${Style.btn_link} collapsed`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Gym workout vs. home workout: The good and the bad
              </button>
            </h5>
          </div>
          <div
            id="collapseTwo"
            class="collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordion"
          >
            <div class={`${Style.card_body} position-relative`}>
              <strong>Gym vs Home</strong>
              <p>
                <strong>02</strong>​ GYM: You will never get bored
                <br />
                <strong>03</strong> GYM: It is easy to stay motivated
                <br />
                <strong>04</strong>​ GYM: Professional guidance
                <br />
                <strong>05</strong>​ HOME: It is cheaper
                <br />
                <strong>06</strong> HOME: It is hassle-free
                <br />
                <strong>07</strong> ​HOME: More privacy and fewer germs
                <br />
              </p>
              <p>
                Your way of trening: <strong>{datas.Plan}</strong>{" "}
              </p>
            </div>
          </div>
        </div>
        <div class={Style.card}>
          <div class={Style.accordion_style} id="headingThree">
            <h5 class="mb-0">
              <button
                class={`btn ${Style.btn_link} collapsed`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                How to Know If You’re A Beginner, Intermediate or Advanced
                Lifter
              </button>
            </h5>
          </div>
          <div
            id="collapseThree"
            class="collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordion"
          >
            <div class={`${Style.card_body} position-relative`}>
              <strong>PROGRAM</strong>
              <p>
                Depending on your training experience and lifting ability you
                will want to adjust your workouts to match your level. This is
                because lifters at different stages of their journey need
                different things to make the most progress possible.
              </p>
              <p>
                Your level: <strong>{datas.Program}</strong> <br /> Way of
                working: {datas.Working_team}
              </p>
            </div>
          </div>
        </div>
        <div class={Style.card}>
          <div class={Style.accordion_style} id="headingFour">
            <h5 class="mb-0">
              <button
                class={`btn ${Style.btn_link} collapsed`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                How Often Should You Work Out?
              </button>
            </h5>
          </div>
          <div
            id="collapseFour"
            class="collapse"
            aria-labelledby="headingFour"
            data-bs-parent="#accordion"
          >
            <div class={`${Style.card_body} position-relative`}>
              <strong>Number of trening per week</strong>
              <p>
                How many times have you joined a gym or committed to an exercise
                plan to lose weight, only to back out after a few weeks because
                you have no idea how often you should work out?
              </p>
              <p>
                Your optimal number of trening:{" "}
                <strong>{datas.Number_Trening}</strong> times per week{" "}
              </p>
            </div>
          </div>
        </div>
        <div class={Style.card}>
          <div class={Style.accordion_style} id="headingFive">
            <h5 class="mb-0">
              <button
                class={`btn ${Style.btn_link} collapsed`}
                data-bs-toggle="collapse"
                data-bs-target="#collapseFive"
                aria-expanded="false"
                aria-controls="collapseFive"
              >
                How might I roll out an improvement to my application?
              </button>
            </h5>
          </div>
          <div
            id="collapseFive"
            class="collapse"
            aria-labelledby="headingFive"
            data-bs-parent="#accordion"
          >
            <div class={`${Style.card_body} position-relative`}>
              <p>
                <strong>Name:</strong> {datas.User_name}
                <br />
                <strong>Email:</strong> {datas.User_email}
                <br />
                <strong>Height:</strong> {datas.Height} / cm <br />{" "}
                <strong>Weight:</strong> {datas.Weight} / kg
              </p>
              <p>
                Your optimal number of trening:{" "}
                <strong>{datas.Number_Trening}</strong> times per week{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choose;
