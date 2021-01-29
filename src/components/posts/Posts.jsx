import React from "react";
import PostItem from "../postItem/PostItem";

const Posts = ({ data, delateItem, onTogleImportant, onTogleliked }) => {
  const elements = data.map((item) => {
    return (
      <PostItem
        label={item.label}
        key={item.id}
        delateItem={() => delateItem(item.id)}
        onTogleImportant={() => onTogleImportant(item.id)}
        onTogleliked={() => onTogleliked(item.id)}
        important={item.important}
        liked={item.liked}
      />
    );
  });
  return <ul className="list-group">{elements}</ul>;
};

export default Posts;
