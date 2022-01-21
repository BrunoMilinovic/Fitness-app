import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Trening from "../Components/Upistreninga";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import Nav from "../Components/Navigation";
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

  return (
    <div>
      <Nav />
      <Trening name={name} />
    </div>
  );
}
export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:2000/api/user/users`);
  const name = await res.json();
  console.log(name);
  return {
    props: {
      name,
    },
  };
};
