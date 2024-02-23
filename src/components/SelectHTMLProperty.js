import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const SelectHTMLProperty = ({ onTagSelect }) => {
  const handleTagClick = (property) => {
    // 클릭한 태그를 부모 컴포넌트에 전달
    onTagSelect(property);
  };

    return (
      <div className="list-group">
        {properties.map((property, index) => (
          <button 
            className="list-group-item list-group-item-action" 
            key={index}
            onClick={() => handleTagClick(property)}
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            {property}
          </button>
        ))}
      </div>
    );
  };
export default SelectHTMLProperty;

const properties = [
    "name", "charset"
]