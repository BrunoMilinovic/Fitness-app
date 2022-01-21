import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";
import Nav from "../Components/Navigation";
import Cards from "../Components/Crads";
import Footer from "../Components/Footer";

export default function Home() {
  const [email, setemail] = useState("");
  const { user } = useUser();
  useEffect(() => {
    if (user) {
      const UserLogin = async (e) => {
        const res = await fetch("http://localhost:2000/api/user/createuser", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            email: user.email,
            name: user.name,
          }),
        });
      };
      setemail(user.email);
      UserLogin();
    }
    console.log(user);
  }, [user]);

  return (
    <div>
      <Nav user={user} />
      <Cards user={user} />
      <Footer />
    </div>
  );
}
