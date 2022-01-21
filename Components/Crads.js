import React, { useState } from "react";
import Cards from "../Components/LoginCards";
import Style from "../styles/Trening.module.css";
function trening({ user }) {
  const [Trener, setTrener] = useState("Select a trener");
  const [Plan, setPlan] = useState("");
  const [Program, setProgram] = useState("");
  const [Number_Trening, setNumber_Trening] = useState("");
  const [Working_team, setWorking_team] = useState("");
  const [Food, setFood] = useState("");
  const [Weight, setWeight] = useState("");
  const [Height, setHeight] = useState("");
  const [checkedItems, setCheckedItems] = useState({});

  const SelectTrening = async (e) => {
    const res = await fetch("http://localhost:2000/api/user/plan", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Trener,
        Plan,
        Program,
        Number_Trening,
        Working_team,
        Food,
        Weight,
        Height,
        User_name: user.name,
        User_email: user.email,
      }),
    });
    const data = await res.json();
    if (data) {
      alert("Your trainer will contact you soon!");
    } else {
      alert("You already create a trening plan, wait for trainer!");
    }
  };

  const handleChange = (event) => {
    // updating an object instead of a Map
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    });
  };
  return (
    <div class={`${Style.register} container-fluid`}>
      <div class="row">
        <div class={`row ${Style.register_left}`}>
          <h2 class="h3 block-title text-center">
            <em style={{ color: "yellow", fontSize: 48 + "px" }}>
              {" "}
              What we do
            </em>
            <small style={{ fontSize: 18 + "px" }}>
              {" "}
              Whatever we do, we do with your end user in mind{" "}
            </small>
          </h2>
          <div class={`col-md-6 `}>
            <p>
              Attract new members and increase revenue with a gym management
              software designed by experts in the fitness industry.winded.Short
              on know-how? You may be getting advice from all directions.
              “Direct mail still works.” “Everybody’s on SnapChat.” “Email is
              dead; you’ve gotta do Google Ads.” It’s nearly impossible to
              unravel the tangled web of conflicting opinions and figure out
              what will actually put feet on your treadmills.winded.Short on
              know-how? You may be getting advice from all directions. “Direct
              mai.
            </p>
          </div>

          <div class={`col-md-6`}>
            <p>
              Our easy-to-use, all-in-one fitness management system is the best
              in the market to simplify your business and maximize profitability
              and growth.winded.Short on know-how? You may be getting advice
              from all directions. “Direct mail still works.” “Everybody’s on
              SnapChat.” “Email is dead; you’ve gotta do Google Ads.” It’s
              nearly impossible to unravel the tangled web of conflicting
              opinions and figure out what will actually put feet on your
              treadmills.
            </p>{" "}
          </div>
          {user && (
            <div style={{ marginLeft: 230 + "px" }}>
              <input
                type="submit"
                value="Start Trening"
                onClick={() => SelectTrening()}
              />
            </div>
          )}
        </div>
        {!user && <Cards />}
        {user && (
          <div class={`col-md-12 ${Style.register_right} `}>
            <div class="tab-content" id="myTabContent">
              <div class="tab-pane fade show active">
                <h3 class={Style.register_heading}>
                  Make Better Informed Decisions
                </h3>

                <div class={`row ${Style.register_form}`}>
                  <div class="row d-flex justify-content-center mt-100">
                    <div class="card-body text-center">
                      <label class={Style.check}>
                        {" "}
                        <input type="checkbox" onChange={handleChange} />{" "}
                        <span>Weight loss</span>{" "}
                      </label>{" "}
                      <label class={Style.check}>
                        {" "}
                        <input type="checkbox" onChange={handleChange} />{" "}
                        <span>Traing body</span>{" "}
                      </label>{" "}
                      <label class={Style.check}>
                        {" "}
                        <input type="checkbox" onChange={handleChange} />{" "}
                        <span>Weight</span>{" "}
                      </label>{" "}
                      <label class={Style.check}>
                        {" "}
                        <input type="checkbox" onChange={handleChange} />{" "}
                        <span>Junk Food</span>{" "}
                      </label>{" "}
                      <label class={Style.check}>
                        {" "}
                        <input type="checkbox" onChange={handleChange} />{" "}
                        <span>Hard worker</span>{" "}
                      </label>{" "}
                      <label class={Style.check}>
                        {" "}
                        <input type="checkbox" onChange={handleChange} />{" "}
                        <span>Condition</span>{" "}
                      </label>
                      <hr class="mb-30" />{" "}
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setTrener(e.target.value)}
                      >
                        <option class="hidden" selected disabled>
                          Select a trener
                        </option>
                        <option value="Jim warten">Jim warten</option>
                        <option value="Iban dsa">Iban dsa</option>
                        <option value="Jasmina varic">Jasmina varic</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setPlan(e.target.value)}
                      >
                        <option class="hidden" selected disabled>
                          workout plan
                        </option>
                        <option value="CrossFitnes">CrossFitnes</option>
                        <option value="Gym">Gym</option>
                        <option value="Yogs"> Yogs</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setProgram(e.target.value)}
                      >
                        <option class="hidden" selected disabled>
                          Starting point
                        </option>
                        <option value="Beginner">Beginner</option>
                        <option value="Advance">Advance</option>
                        <option value="Hardcore"> Hardcore</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setNumber_Trening(e.target.value)}
                      >
                        <option class="hidden" selected disabled>
                          Number of trening
                        </option>
                        <option value="2">2</option>
                        <option value="3-4">3-4</option>
                        <option value="5 and more"> 5 and more</option>
                      </select>
                    </div>
                  </div>
                  <div class="col-md-6">
                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setWorking_team(e.target.value)}
                      >
                        <option class="hidden" selected disabled>
                          Working in Team
                        </option>
                        <option value="Invidual">Invidual</option>
                        <option value="Yes...">Yes...</option>
                        <option value="It dosent matter">
                          It dosent matter
                        </option>
                      </select>
                    </div>

                    <div class="form-group">
                      <select
                        class="form-control"
                        onChange={(e) => setFood(e.target.value)}
                      >
                        <option class="hidden" selected disabled>
                          Food regulation
                        </option>
                        <option value="It dosent matter">Yes</option>
                        <option value="It dosent matter">No</option>
                      </select>
                    </div>
                    <div class="form-group">
                      {" "}
                      <input
                        type="text"
                        value={Weight}
                        onChange={(e) => setWeight(e.target.value)}
                        class="form-control"
                        placeholder="Your Weight / wanted weight / kg"
                      ></input>
                    </div>
                    <input
                      value={Height}
                      onChange={(e) => setHeight(e.target.value)}
                      type="text"
                      class="form-control"
                      placeholder="Your Height / cm"
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default trening;
