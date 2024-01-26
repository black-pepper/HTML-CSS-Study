import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const SelectTagList = ({ onTagSelect }) => {
  const handleTagClick = (tagType) => {
    // 클릭한 태그를 부모 컴포넌트에 전달
    onTagSelect(tagType);
  };

    return (
      <div className="list-group">
        {TagType.map((tagType, index) => (
          <button 
            className="list-group-item list-group-item-action" 
            key={index}
            onClick={() => handleTagClick(tagType)}
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            {tagType}
          </button>
        ))}
      </div>
    );
  };
export default SelectTagList;

const TagType = [
    "div", "section", "article", "nav", "span", "p", "a", "br"
]