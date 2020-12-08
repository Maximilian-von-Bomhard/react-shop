import React from "react";
import { useParams } from "react-router-dom";

export const UserView = () => {
  const { name } = useParams();

  if (name) {
    return (
      <>
        <div id="userCard">
            <h1>Name: {name}</h1>
            <h3>Age: 187</h3>
            <h4>Adress: Ich sags dir morgen</h4>
        </div>
      </>
    );
  } else {
    return <h1>An Error occured!</h1>;
  }
};
