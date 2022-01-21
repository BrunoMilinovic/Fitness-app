import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";
export default function Home({ name }) {
  const [Name, setName] = useState("");
  const [Treningtype, setTreningtype] = useState("");
  const [Pauze, setPauze] = useState("");
  const [Ponavljanje, setPonavljanje] = useState("");
  const [Date, setDate] = useState("");
  const [Hour, setHour] = useState("");
  const [Opistreninga, setOpistreninga] = useState("");
  const router = useRouter();
  const UserLogin = async (e) => {
    const res = await fetch("http://localhost:2000/api/user/trenis", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Treningtype,
        Name,
        Ponavljanje,
        Date,
        Hour,
        Opistreninga,
        Pauze,
      }),
    });
    const data = await res.json();
    console.log(data);
    if (data) {
      alert(
        `Trening was created for user : ${Name} , for date: ${Date} and hour: ${Hour}  `
      );
    }
  };

  return (
    <section className="vh-100">
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <span className="h1 fw-bold  mb-0">Double </span>
            <span className="h3 fw-bold mb-0"> &nbsp;Power</span>
            <p>Create a trening for a user</p>
            <div className="card">
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img
                    src="https://www.journal.hr/wp-content/uploads/2022/05/Martina-Boss-Garmin-Venu-2-Polleo-Sport-naslovna-4.jpg"
                    alt="login form"
                    className="img-fluid"
                  />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3"></i>
                      <i className="fa-solid fa-dumbbell"></i>
                      <span className="h1 fw-bold   mb-0">Start </span>
                      <span className="h1 fw-bold mb-0"> &nbsp;Trening</span>
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputEmail4">Name</label>
                        <select
                          class="form-control"
                          onChange={(e) => setName(e.target.value)}
                        >
                          <option class="hidden" selected disabled>
                            Choose a User
                          </option>
                          {name.map((item) => {
                            return (
                              <option value={`${item.name}`}>
                                {item.name}
                              </option>
                            );
                          })}
                        </select>
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputPassword4">Type of trening</label>
                        <input
                          type="text"
                          class="form-control"
                          id="inputPassword4"
                          value={Treningtype}
                          onChange={(e) => setTreningtype(e.target.value)}
                          placeholder="Body,arms,.."
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="inputAddress">Pauze</label>
                      <input
                        type="text"
                        value={Pauze}
                        onChange={(e) => setPauze(e.target.value)}
                        class="form-control"
                        id="inputAddress"
                        placeholder="30 sec "
                      />
                    </div>
                    <div class="form-group">
                      <label for="inputAddress2">Broj ponavljanja</label>
                      <input
                        type="text"
                        value={Ponavljanje}
                        onChange={(e) => setPonavljanje(e.target.value)}
                        class="form-control"
                        id="inputAddress2"
                        placeholder="x2,x3,..."
                      />
                    </div>
                    <div class="form-row">
                      <div class="form-group col-md-6">
                        <label for="inputCity">Date of trening</label>
                        <input
                          value={Date}
                          onChange={(e) => setDate(e.target.value)}
                          type="date"
                          class="form-control"
                          id="inputCity"
                        />
                      </div>
                      <div class="form-group col-md-6">
                        <label for="inputCity">Hour of trening</label>
                        <input
                          value={Hour}
                          onChange={(e) => setHour(e.target.value)}
                          type="time"
                          class="form-control"
                          id="inputCity"
                        />
                      </div>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlTextarea1">
                        Example textarea
                      </label>
                      <textarea
                        value={Opistreninga}
                        onChange={(e) => setOpistreninga(e.target.value)}
                        class="form-control"
                        id="exampleFormControlTextarea1"
                        placeholder="1. Arms x3,
                          2. Body x3 create a mustrum"
                        rows="3"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      onClick={() => UserLogin()}
                      class="btn btn-primary"
                    >
                      Create a trening
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
