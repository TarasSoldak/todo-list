import React from "react";

const PostFilter = ({ filter, onFilterSelect }) => {
  const buttons = [
    { name: "all", label: "Всі" },
    { name: "like", label: "Сподобались" },
  ];
  const buttonsElem = buttons.map(({ name, label }) => {
    const active = filter === name;
    const classes = active ? "btn-info" : "btn-outline-secondary";
    return (
      <button
        key={name}
        className={`btn ${classes}`}
        onClick={() => onFilterSelect(name)}
      >
        {label}
      </button>
    );
  });
  return (
    <div className="btn-croup">
      {buttonsElem}
      {/* <button className="btn btn-info">Всі</button>
      <button className="btn btn-outline-secondary">Сподобались</button> */}
    </div>
  );
};

export default PostFilter;
