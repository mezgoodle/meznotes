import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg";

const NotePage = () => {
  const params = useParams();
  const noteId = params.id;
  const navigate = useNavigate();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [params.id]);

  const getNote = async () => {
    if (noteId === "new") return;
    const response = await fetch(`/api/notes/${noteId}/`);
    const data = await response.json();
    setNote(data);
  };

  // const createNote = async () => {
  //   await fetch(`/api/notes/${noteId}/update`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(note),
  //   });
  // };

  const updateNote = async () => {
    await fetch(`/api/notes/${noteId}/update`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    await fetch(`/api/notes/${noteId}/delete`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigate("/");
  };

  const handleSubmit = () => {
    if (noteId !== "new" && !note.body) {
      deleteNote();
    } else if (noteId !== "new") {
      updateNote();
    }
    navigate("/");
  };

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <ArrowLeft onClick={handleSubmit} />
        </h3>
        {noteId !== "new" ? (
          <button onClick={deleteNote}>Delete</button>
        ) : (
          <button>Done</button>
        )}
      </div>
      <textarea
        onChange={(e) => {
          setNote({ ...note, body: e.target.value });
        }}
        defaultValue={note?.body}
      ></textarea>
    </div>
  );
};

export default NotePage;
