import React from "react";
import "./postItem.css";

const PostItem = ({
  important,
  label,
  delateItem,
  onTogleImportant,
  onTogleliked,
  liked,
}) => {
  let classNames = important ? "activStar" : "";
  return (
    <li className="d-flex justify-content-between li-block">
      <div>
        <span onClick={onTogleImportant} className={classNames}>
          {label}
        </span>
      </div>
      <div className="d-flex justify-content-center align-items-center">
        <div className={classNames}>
          <i className="fa fa-star"></i>
        </div>

        <div className="btnColor" onClick={delateItem}>
          <i className="fa fa-trash-o"></i>
        </div>
        <div className={liked ? "likeColor" : ""} onClick={onTogleliked}>
          <i className="fa fa-heart"></i>
        </div>
      </div>
    </li>
  );
};

export default PostItem;
