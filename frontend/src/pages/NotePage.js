import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const params = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [params.id]);

  const getNote = async () => {
    const response = await fetch(`/api/workouts/${params.id}/`);
    const data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>{note?.name}</p>
    </div>
  );
};

export default NotePage;
