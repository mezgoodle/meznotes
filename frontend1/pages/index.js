import { useState, useEffect } from "react";
import Head from "next/head";

import AddButton from "../components/AddButton";
import ListItem from "../components/ListItem";

export default function Home({ data }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(data);
  }, []);

  return (
    <>
      <Head>
        <title>Notes list</title>
      </Head>
      <div className="notes">
        <div className="notes-header">
          <h2 className="notes-title">&#9782; Notes</h2>
          <p className="notes-count">{notes.length}</p>
        </div>
        <div className="notes-list">
          {notes.map((note, index) => (
            <ListItem key={index} note={note} />
          ))}
        </div>
        <AddButton />
      </div>
    </>
  );
}

export async function getStaticProps() {
  // Fetch data from external API
  const response = await fetch("http://127.0.0.1:8000/api/notes/");
  const data = await response.json();

  // Pass data to the page via props
  return { props: { data } };
}
