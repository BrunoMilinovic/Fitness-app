import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import Style from "../styles/nav.module.css";
import { useRouter } from "next/router";
import { useUser } from "@auth0/nextjs-auth0";
function Navigation2() {
  const { user } = useUser();
  const router = useRouter();
  function myFunction() {
    var element = document.getElementById("collapsibleNavbar");
    element.classList.toggle("show");
  }

  const UserLogin = async (e) => {
    const res = await fetch("http://localhost:2000/api/user/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: user.email,
      }),
    });
    const data = await res.json();
    if (data.Role === "visitor") {
      router.push(`/profile/${data.id}`);
    }
    if (data.Role === "admin") {
      router.push("/profile/");
    }
    if (!data.Role) {
      alert("Please check your username and password");
    }
  };
  return (
    <nav className="navbar navbar-expand-md bg-dark px-3 navbar-dark">
      {user && (
        <div className={Style.flex}>
          <img
            src={user.picture}
            alt={user.name}
            className={`${Style.user_image} rounded-circle`}
          />
        </div>
      )}
      <a className="navbar-brand" href="#">
        Double Power
      </a>

      {!user && (
        <button class={Style.button_32} role="button">
          {" "}
          <Link class={Style.g} href="/api/auth/login">
            Login
          </Link>
        </button>
      )}
      {user && (
        <div className={Style.flex}>
          <h5 className={Style.user_name}>
            <i class={` ${Style.icon} fas fa-user`}></i>: {user.name}
          </h5>
          <i class={` ${Style.icon} fas fa-envelope`}></i>:{" "}
          <h5 className={Style.user_email}>: {user.email}</h5>
        </div>
      )}

      <button
        className="navbar-toggler "
        type="button"
        onClick={() => myFunction()}
        data-toggle="collapse "
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className="collapse navbar-collapse 
      "
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            {user && (
              <a className="nav-link" href="/">
                Quick Start
              </a>
            )}
          </li>
          <li className="nav-item">
            {user && (
              <a className="nav-link" href="/blog">
                Blog
              </a>
            )}
          </li>

          <li className="nav-item">
            {user && (
              <a className="nav-link" onClick={() => UserLogin()} href="#">
                Profile
              </a>
            )}
          </li>

          <li className="nav-item">
            {user && (
              <a className="nav-link">
                <Link href="/api/auth/logout">
                  <em style={{ color: "red", cursor: "pointer" }}>Logout</em>
                </Link>
              </a>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation2;
