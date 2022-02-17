import React from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const params = useParams();

  return (
    <div>
      <h1>Single note {params.id}</h1>
    </div>
  );
};

export default NotePage;
