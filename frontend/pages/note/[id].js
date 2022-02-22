import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import Image from "next/image";
import arrow from "../../assets/arrow-left.svg";

export default function Note({ data, id }) {
  const router = useRouter();
  const [note, setNote] = useState(null);

  useEffect(() => {
    setNote(data);
  }, [id]);

  const createNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const updateNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(note),
    });
  };

  const deleteNote = async () => {
    await fetch(`http://127.0.0.1:8000/api/notes/${id}/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    router.push("/");
  };

  const handleSubmit = () => {
    if (id !== "new" && note.body === "") {
      deleteNote();
    } else if (id !== "new") {
      updateNote();
    } else if (id === "new" && note !== null) {
      createNote();
    }
    router.push("/");
  };

  const handleChange = (value) => {
    setNote((note) => ({ ...note, body: value }));
  };

  return (
    <>
      <Head>
        {id !== "new" ? (
          <title>Editing note {id}</title>
        ) : (
          <title>Adding new note</title>
        )}
      </Head>
      <div className="note">
        <div className="note-header">
          <h3>
            <Image src={arrow} alt="Back to the list" onClick={handleSubmit} />
          </h3>
          {id !== "new" ? (
            <button onClick={deleteNote}>Delete</button>
          ) : (
            <button onClick={handleSubmit}>Done</button>
          )}
        </div>
        <textarea
          onChange={(e) => {
            handleChange(e.target.value);
          }}
          value={note?.body}
        ></textarea>
      </div>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const id = query.id;
  if (id === "new") return { props: { id: "new" } };
  const response = await fetch(`http://127.0.0.1:8000/api/notes/${id}/`);
  const data = await response.json();

  return { props: { data, id } };
}
