import React from "react";
import Nav from "../../Components/Navigation";

import Client from "../../Components/dashboard/Clients";
export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:2000/api/user/render");
  const data = await res.json();

  const paths = data.map((item) => {
    return {
      params: { id: item.id.toString() },
    };
  });

  return {
    paths,
    fallback: false,
  };
};
export const getStaticProps = async ({ params }) => {
  const res = await fetch(`http://localhost:2000/api/user/get/${params.id}`);
  const userss = await res.json();
  console.log(userss);
  return {
    props: {
      userss,
    },
  };
};
function hj({ userss }) {
  return (
    <div>
      <Nav />
      <br />
      {userss.map((item) => {
        return (
          <div key={item.id}>
            <Client item={item} />
          </div>
        );
      })}
    </div>
  );
}
export default hj;
