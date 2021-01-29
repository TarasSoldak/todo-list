import React from "react";

const Header = ({ liked, allPosts }) => {
  return (
    <div className="d-flex justify-content-between align-item-end">
      <h1>Taras Soldak</h1>
      <h2>
        {allPosts} запиcи з них сподобалось {liked}
      </h2>
    </div>
  );
};

export default Header;
