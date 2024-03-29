import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SelectTagList from './SelectTagList';
import { Block } from '@mui/icons-material';

const ElementList = ({ tagData, tagList, AddTagData, removeTagData, selectedIndex, setSelectedIndex }) => {

  const handleTagDataSelect = (index) => {
    setSelectedIndex(index);
  };

  const handleTagAdd = (tagType) => {
    AddTagData(tagType, -1);
  }

  const handleSubTagAdd = (tagType) => {
    AddTagData(tagType, selectedIndex);
  }

  return (
    <div className="card"style={{ height: '280px', marginTop: 20}}>
      <div className="card-header">
        <b>ELEMENT</b>
      </div>
      <div className='card-body overflow-auto' style={{padding:0}}>
      <div className="card-group list-group list-group-flush overflow-auto">
        {tagList.map((item) => (
          <button
            className={`list-group-item list-group-item-action d-flex justify-content-between align-items-center ${selectedIndex === item ? 'active' : ''}`}
            key={item}
            onClick={() => handleTagDataSelect(item)}
          >
            {"└".repeat(tagData.current[item].depth)} {tagData.current[item].tag}
            <div
              type="button"
              className="btn-close"
              aria-label="Close"
              onClick={() => removeTagData(item)}
            >
            </div>
          </button>
        ))}
      </div>
      </div>
      <div className="card-footer" style={{padding:0}}>
        <div className="btn-group" role="group" style={{width:'100%'}}> 
          <button
            className="list-group-item btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#addTag"
            style={{ width: '100%', padding:10}}
          >
            Add Tag
          </button>
          <button
            className="list-group-item btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#addSubTag"
            style={{ width: '100%', padding:10}}
            disabled={selectedIndex===null}
          >
            Add Sub Tag
          </button>
        </div>
        
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

        <div className="modal fade"
          id="addSubTag"
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
                <SelectTagList onTagSelect={handleSubTagAdd} />
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
export default ElementList;