import React, { useState, useEffect } from "react";

const NotesListPage = () => {
  let [notes, setNotes] = useState([]);

  useEffect(() => {
    getNotes();
  }, []);

  const getNotes = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/workouts/");
    const data = await response.json();
    setNotes(data);
  };

  return (
    <div>
      <div className="notes-list">
        {notes.map((note, index) => (
          <h3 key={index}>{note.name}</h3>
        ))}
      </div>
    </div>
  );
};

export default NotesListPage;
