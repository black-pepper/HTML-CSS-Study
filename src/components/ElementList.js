import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SelectTagList from './SelectTagList';
import { Block } from '@mui/icons-material';

const ElementList = ({ tagData, AddTagData, removeTagData, selectedIndex, setSelectedIndex }) => {

  const handleTagDataSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleTagAdd = (tagType) => {
    AddTagData(tagType);
  }

  return (
    <div className="card h-50">
      <div className="card-header">
        <b>ELEMENT</b>
      </div>
      <div className='card-body overflow-auto' style={{padding:0}}>
      <div className="card-group list-group list-group-flush overflow-auto">
        {tagData.map((item, index) => (
          <button
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedIndex === index ? 'active' : ''}`}
            key={index}
            onClick={() => handleTagDataSelect(index)}
          >
            {item.tag}
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => removeTagData(index)}
            >
            </button>
          </button>
        ))}
      </div>
      </div>
      <div className="card-footer" style={{padding:0}}>
          <button
            className="list-group-item"
            data-bs-toggle="modal"
            data-bs-target="#addTag"
            style={{ width: '100%', padding:10}}
          >
            Add Tag
          </button>

        
        <div className="modal fade"
          id="addTag"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Select Tag</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <SelectTagList onTagSelect={handleTagAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default ElementList;