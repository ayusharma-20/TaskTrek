import React from "react";
import "./Tag.css";

const Tag = ({ tagName, selectTag, selected }) => {
  const tagStyle = {
    Lecture: { backgroundColor: "#fda821" },
    DSA: { backgroundColor: "#15d4c8" },
    Development: { backgroundColor: "#ffd12c" },
    Workout: { backgroundColor: "#4cdafc" },
    default: { backgroundColor: "#f9f9f9" },
  };
  return (
    <button
      type="button"
      className="tag"
      style={selected ? tagStyle[tagName] : tagStyle.default}
      onClick={() => {
        selectTag(tagName);
      }}
    >
      {tagName}
    </button>
  );
};

export default Tag;
