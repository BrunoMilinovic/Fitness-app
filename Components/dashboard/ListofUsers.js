import React, { useEffect } from "react";
import { useState } from "react";
import Link from "next/link";
import Dashboard from "../../styles/Dashboard.module.css";

function Listausera() {
  const [item, setitem] = useState([]);
  useEffect(() => {
    const users = async () => {
      const res = await fetch("http://localhost:2000/api/user/render");
      const data = await res.json();
      setitem(data);
    };
    users();
  }, [item]);
  const deleteUser = async (ID, Name) => {
    if (window.confirm(`Delete the user: ${Name} `)) {
      const user = await fetch(`http://localhost:2000/api/user/delete/${ID}`, {
        method: "DELETE",
      });
      const data = user.json();
    }
  };

  return (
    <div className={Dashboard.card}>
      <div className={`${Dashboard.card_header} pb-0`}>
        <div className="card-actions float-right">
          <div className="dropdown show">
            <a href="#" data-toggle="dropdown" data-display="static">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-more-horizontal align-middle"
              >
                <circle cx="12" cy="12" r="1"></circle>
                <circle cx="19" cy="12" r="1"></circle>
                <circle cx="5" cy="12" r="1"></circle>
              </svg>
            </a>

            <div className="dropdown-menu dropdown-menu-right">
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </div>
        </div>
        <h5 className="card-title mb-0">Clients</h5>
      </div>
      <div className={Dashboard.card_body}>
        <table className="table table-striped" style={{ width: 100 + "%" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th className="d-none d-md-block">Member since</th>
              <th>Status</th>
              <th>Edit</th>
            </tr>
          </thead>
          <tbody>
            {item.map((item, index) => (
              <tr key={item.id}>
                <td>
                  <img
                    src="https://bootdey.com/img/Content/avatar/avatar2.png"
                    width="32"
                    height="32"
                    className="rounded-circle my-n1"
                    alt="Avatar"
                  />
                </td>
                <td>{item.name}</td>

                <td>{item.email}</td>
                <td
                  className="d-none d-md-block"
                  style={{
                    paddingBottom: 17 + "px",
                    borderBottomWidth: 1 + "px",
                    borderStyle: "solid",
                    borderColor: "rgb(222, 226, 230)",
                  }}
                >
                  <span> {item.createdAt.slice(0, 10)}</span>
                </td>
                <td>
                  <span
                    className={`badge`}
                    style={{
                      backgroundColor:
                        item.Status === "Active" ? "green" : "red",
                    }}
                  >
                    {item.Status}
                  </span>
                </td>
                <td>
                  <span>
                    <Link href={`/profile/` + item.id} key={item.id}>
                      <button>
                        <i class="fas fa-edit"></i>
                      </button>
                    </Link>
                    &nbsp; &nbsp;
                    <button
                      onClick={() => {
                        deleteUser(item.id, item.name);
                      }}
                    >
                      <i class="fas fa-trash-alt"></i>
                    </button>
                  </span>
                </td>
              </tr>
            ))}{" "}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Listausera;
