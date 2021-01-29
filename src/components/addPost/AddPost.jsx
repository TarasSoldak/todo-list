import React, { useState } from "react";

const AddPost = ({ addPost }) => {
  const [text, setText] = useState("");

  const onInputChange = (e) => {
    setText(e.target.value);
  };
  const onSubmitForm = (e) => {
    e.preventDefault();
    if (text.trim()) {
      addPost(text);
      setText("");
    }
  };

  return (
    <form className="d-flex" onSubmit={onSubmitForm}>
      <input
        type="text"
        className="form-control"
        onChange={onInputChange}
        value={text}
        placeholder="Додати запис"
      />
      <button type="submit" className="btn btn-outline-secondary">
        Додати
      </button>
    </form>
  );
};

export default AddPost;
