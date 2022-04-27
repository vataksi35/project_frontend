import React, { useEffect, useState } from "react";
import Booking101 from "./rooms/Booking101";
import App from "./App";


function Client() {
  const [clients, setClients] = useState(null);

  const addClient = (client) => {
    console.log(JSON.stringify(client));
    fetch("http://localhost:3001/client", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(client),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        
        setClients((prevClients) => [...prevClients, res]);
      });
  };

  useEffect(() => {
    fetch("http://localhost:3001/client")
      .then((res) => res.json())
      .then((res) => setClients(res));
  }, []);

  return (
    <div>
      <Booking101
        titleText="Book the room"
        buttonText= {<App/>}
        onSubmit={addClient}
      />
    </div>
  );
}

export default Client;