import React from "react";
import style from "../styles/Cards.module.css";
function al() {
  return (
    <section class="container pt-3 mb-3">
      <h2 class="h3 block-title text-center">
        <em
          style={{
            color: "white",
            fontSize: 22 + "px",
            fontStyle: "italic",
          }}
          className={style.rotate}
        >
          “Of course it’s hard. It’s supposed to be hard. If it were easy,
          everybody would do it. Hard is what makes it great.”{" "}
        </em>
      </h2>
      <div class="row pt-5 mt-30">
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
          <a class={style.card} href="#">
            <div
              class={`${style.box_shadow} ${style.bg_white} ${style.rounded_circle} ${style.mx_auto} text-center`}
              style={{
                width: 90 + "px",
                height: 90 + "px",
                margintop: -45 + "px",
              }}
            >
              <i class={`fa fa-user fa-3x ${style.head_icon}`}></i>
            </div>
            <div class="card-body text-center">
              <h3 class={`${style.card_title} ${style.pt_1}`}>UX User</h3>
              <p class={`${style.card_text} text-sm ${style.p} `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip.
              </p>
              <button
                onClick={() => {
                  alert(
                    "Best Gym offer, Please login to start using an application"
                  );
                }}
                class={`${style.text_sm} text-uppercase font-weight-bold`}
              >
                Learn More&nbsp;<i class="fe-icon-arrow-right"></i>
              </button>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
          <a class={style.card} href="#">
            <div
              class={`${style.box_shadow} ${style.bg_white} ${style.rounded_circle} ${style.mx_auto} text-center`}
              style={{
                width: 90 + "px",
                height: 90 + "px",
                margintop: -45 + "px",
              }}
            >
              <i class={`fas fa-dumbbell fa-3x ${style.head_icon}`}></i>
            </div>
            <div class="card-body text-center">
              <h3 class={`${style.card_title} ${style.pt_1}`}>BEST GYM</h3>
              <p class={`${style.card_text} text-sm ${style.p} `}>
                Full commercial gym equipment (or strength equipment) is ideal
                for gyms, health clubs, fitness centres, professional athletics
                teams, prisons, military basis, government agencies, schools and
                colleges.
              </p>
              <button
                onClick={() => {
                  alert(
                    "Best Gym offer, Please login to start using an application"
                  );
                }}
                class={`${style.text_sm} text-uppercase font-weight-bold`}
              >
                Learn More&nbsp;<i class="fe-icon-arrow-right"></i>
              </button>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
          <a class={style.card} href="#">
            <div
              class={`${style.box_shadow} ${style.bg_white} ${style.rounded_circle} ${style.mx_auto} text-center`}
              style={{
                width: 90 + "px",
                height: 90 + "px",
                margintop: -45 + "px",
              }}
            >
              <i class={`fas fa-heart fa-3x ${style.head_icon}`}></i>
            </div>
            <div class="card-body text-center">
              <h3 class={`${style.card_title} ${style.pt_1}`}>
                GYM HELPS YOUR HEALTH{" "}
              </h3>
              <p class={`${style.card_text} text-sm ${style.p} `}>
                The researchers interviewed 204 gym members and 201 people
                without memberships about their physical activity. They
                discovered that 75 percent of people who belonged to a gym met
                the federal guidelines .
              </p>
              <button
                onClick={() => {
                  alert(
                    "Best Gym offer, Please login to start using an application"
                  );
                }}
                class={`${style.text_sm} text-uppercase font-weight-bold`}
              >
                Learn More&nbsp;<i class="fe-icon-arrow-right"></i>
              </button>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
          <a class={style.card} href="#">
            <div
              class={`${style.box_shadow} ${style.bg_white} ${style.rounded_circle} ${style.mx_auto} text-center`}
              style={{
                width: 90 + "px",
                height: 90 + "px",
                margintop: -45 + "px",
              }}
            >
              <i class={`fas fa-users fa-3x ${style.head_icon}`}></i>
            </div>
            <div class="card-body text-center">
              <h3 class={`${style.card_title} ${style.pt_1}`}>
                EXERCISE WITH A FRIEND
              </h3>
              <p class={`${style.card_text} text-sm ${style.p} `}>
                Exercising with a friend or loved one can make it more fun, and
                increase your chances of sticking to your exercise plan.
                Exercising with a friend is a great way to keep you motivated.
                It’s also a great way to meet new people.
              </p>
              <button
                onClick={() => {
                  alert(
                    "Best Gym offer, Please login to start using an application"
                  );
                }}
                class={`${style.text_sm} text-uppercase font-weight-bold`}
              >
                Learn More&nbsp;<i class="fe-icon-arrow-right"></i>
              </button>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
          <a class={style.card} href="#">
            <div
              class={`${style.box_shadow} ${style.bg_white} ${style.rounded_circle} ${style.mx_auto} text-center`}
              style={{
                width: 90 + "px",
                height: 90 + "px",
                margintop: -45 + "px",
              }}
            >
              <i class={`fas fa-chart-line fa-3x ${style.head_icon}`}></i>
            </div>
            <div class="card-body text-center">
              <h3 class={`${style.card_title} ${style.pt_1}`}>
                FITNESS PROFESSIONALS
              </h3>
              <p class={`${style.card_text} text-sm ${style.p} `}>
                ASFA’s online Master Personal Trainer Certification was designed
                for fitness professionals looking to expand their knowledge to
                expert level by independently studying fitness course materials
                and equipment .
              </p>
              <button
                onClick={() => {
                  alert(
                    "Best Gym offer, Please login to start using an application"
                  );
                }}
                class={`${style.text_sm} text-uppercase font-weight-bold`}
              >
                Learn More&nbsp;<i class="fe-icon-arrow-right"></i>
              </button>
            </div>
          </a>
        </div>
        <div class="col-lg-4 col-sm-6 mb-30 pb-5">
          <a class={style.card} href="#">
            <div
              class={`${style.box_shadow} ${style.bg_white} ${style.rounded_circle} ${style.mx_auto} text-center`}
              style={{
                width: 90 + "px",
                height: 90 + "px",
                margintop: -45 + "px",
              }}
            >
              <i class={`fas fa-running fa-3x ${style.head_icon}`}></i>
            </div>
            <div class="card-body text-center">
              <h3 class={`${style.card_title} ${style.pt_1}`}>
                ACTIVE RECOVERY EXERCISE
              </h3>
              <p class={`${style.card_text} text-sm ${style.p} `}>
                An active recovery workout involves performing low-intensity
                exercise following a strenuous workout. Examples include
                walking, yoga, and swimming. Active recovery is often considered
                more beneficial.
              </p>
              <button
                onClick={() => {
                  alert(
                    "Best Gym offer, Please login to start using an application"
                  );
                }}
                class={`${style.text_sm} text-uppercase font-weight-bold`}
              >
                Learn More&nbsp;<i class="fe-icon-arrow-right"></i>
              </button>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default al;
