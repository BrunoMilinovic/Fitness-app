import React, { useEffect, useState } from "react";

import Treningcard from "../Treningcard";
function ListofTrening({ item }) {
  // dohvatit treninge preko usera i rendat treninge !!!! map.trening !!! ,
  // dodat wiev all pomocu css da se rasiri i suzi kvadrat ,
  //dodat jos mozda obavezna polja u formama za input !
  const [items, setitem] = useState([]);
  useEffect(() => {
    const users = async () => {
      const res = await fetch("http://localhost:2000/api/user/maptrening", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: item.name,
        }),
      });
      const data = await res.json();
      setitem(data);
      console.log(data);
    };
    users();
  }, []);
  return (
    <div>
      {items.map((item) => (
        <Treningcard item={item} />
      ))}
    </div>
  );
}

export default ListofTrening;
