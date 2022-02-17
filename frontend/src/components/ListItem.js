import React from "react";

const ListItem = ({ note }) => {
  return (
    <div>
      <h3>{note.name}</h3>
    </div>
  );
};

export default ListItem;
