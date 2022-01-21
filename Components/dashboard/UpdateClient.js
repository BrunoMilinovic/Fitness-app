import { stringify } from "postcss";
import React, { useState } from "react";
import { useRouter } from "next/router";

function UpdateClient() {
  const [Name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const router = useRouter();
  const { id } = router.query;

  // triban dovrsit id poslat , mozda dovuc od getstatic
  const UpdateClient = async () => {
    const res = await fetch(`http://localhost:2000/api/user/updateuser/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        Name,
        Email,
      }),
    });
    const data = await res.json();
    if (data.status === "updated") {
      router.push("/profile/");
    }
  };

  return (
    <div className="card">
      <div className="card-body">
        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">Full Name</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input
              type="text"
              className="form-control"
              placeholder="New User"
              value={Name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>
        <div className="row mb-3">
          <div className="col-sm-3">
            <h6 className="mb-0">Email</h6>
          </div>
          <div className="col-sm-9 text-secondary">
            <input
              type="text"
              placeholder="New Email"
              className="form-control"
              value={Email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
        </div>

        <div className="row">
          <div className="col-sm-3"></div>
          <div className="col-sm-9 text-secondary">
            <input
              type="button"
              className="btn btn-primary px-4"
              value="Save changes"
              onClick={() => UpdateClient()}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpdateClient;
