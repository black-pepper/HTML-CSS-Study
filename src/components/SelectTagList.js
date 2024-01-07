import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const SelectTagList = () => {
    return (
      <div className="list-group" style={{ margin: 10 }}>
        {TagType.map((tagType, index) => (
          <li className="list-group-item" key={index}>
            {tagType}
          </li>
        ))}
      </div>
    );
  };
export default SelectTagList;

const TagType = [
    "div", "section", "article", "nav", "a", "br"
]