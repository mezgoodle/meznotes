import React from "react";
import Link from "next/link";

const ListItem = ({ note }) => {
  const textLength = 45;

  const getTitle = (note) => {
    const title = note.body.split("\n")[0];
    if (title.length > textLength) {
      return title.slice(0, textLength);
    }
    return title;
  };

  const getContent = (note) => {
    const title = getTitle(note);
    let content = note.body.replaceAll("\n", " ");
    content = content.replaceAll(title, "");

    if (content.length > textLength) {
      return content.slice(0, textLength) + "...";
    }
    return content;
  };

  const getTime = (note) => {
    return new Date(note.updated).toLocaleDateString();
  };

  return (
    <Link href={`/note/${note.id}`} passHref>
      <div className="notes-list-item">
        <h3>{getTitle(note)}</h3>
        <p>
          <span>{getTime(note)}</span>
          {getContent(note)}
        </p>
      </div>
    </Link>
  );
};

export default ListItem;
