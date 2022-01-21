import React, { useEffect } from "react";
import Nav from "../../Components/Navigation";
import Dashboard from "../../Components/dashboard";
import { withPageAuthRequired } from "@auth0/nextjs-auth0";
function dashboard() {
  return (
    <div>
      <Nav />
      <Dashboard />
    </div>
  );
}

export default dashboard;
export const getServerSideProps = withPageAuthRequired();
//na sd povuka sam usere iz baze sad za svakog usera trebam rendar treninge
