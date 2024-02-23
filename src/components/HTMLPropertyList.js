import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectHTMLProperty from './SelectHTMLProperty';

const HTMLPropertyList = ({ selectedElement, updateHTMLProperties, selectedIndex }) => {
  const getData = (property) => {
    if (selectedIndex == null) return null;
    if (selectedElement == null) return null;
    if (!("htmlProperty" in selectedElement)) return null;
    if (property in selectedElement.htmlProperty) return selectedElement.htmlProperty[property].value;
    return null;
  }

  const getpropertys = (selectedElement) => {
    let result = new Set();
    if (selectedElement == null) return [];
    switch (selectedElement.tag) {
      case 'a': result = new Set(["href", "target"]); break;
      default: result = new Set();
    }
    if(selectedElement && selectedElement.htmlProperty) {
      Object.keys(selectedElement.htmlProperty).map((property) => (
        result.add(property)
      ))
    }
    return Array.from(result);
  }

  const handlePropertyAdd = (property) => {
    updateHTMLProperties(selectedIndex, property, null);
  }

  return (
    <div className="card" style={{ height: '280px', marginTop: 20 }}>
      <div className="card-header" id={selectedIndex}>
        <b>HTML PROPERTY</b>
      </div>
      <div className="list-group list-group-flush overflow-auto">
          <li className="list-group-item list-group-item-secondary" key="-1">
            <input
              className="form-control form-control-sm"
              disabled={(selectedElement)?false:true}
              placeholder="content"
              onChange={(event) => updateHTMLProperties(selectedIndex, "content", event.target.value )}
              value={getData("content") || ''}
            />
          </li>
          {getpropertys(selectedElement).map((property, index) => (
            <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
              {property}:
              <input
                className="form-control form-control-sm"
                disabled={(selectedElement)?false:true}
                style={{ marginLeft: 10 }}
                onChange={(event) => updateHTMLProperties(selectedIndex, { [property.value]: event.target.value })}
                value={getData(property) || ''}
              />
            </li>
          ))}
        
      </div>
      <div className="card-footer" style={{padding:0}}>
        <div className="btn-group" role="group" style={{width:'100%'}}> 
          <button
            className="list-group-item btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#addHTMLProperty"
            style={{ width: '100%', padding:10}}
          >
            Add HTML property
          </button>
        </div>

        <div className="modal fade"
          id="addHTMLProperty"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add HTML Property</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <SelectHTMLProperty onTagSelect={handlePropertyAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default HTMLPropertyList;