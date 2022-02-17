import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const NotePage = () => {
  const params = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [params.id]);

  const getNote = async () => {
    const response = await fetch(`/api/notes/${params.id}/`);
    const data = await response.json();
    setNote(data);
  };

  return (
    <div>
      <p>{note?.body}</p>
    </div>
  );
};

export default NotePage;
