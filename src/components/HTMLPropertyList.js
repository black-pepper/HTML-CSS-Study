import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HTMLPropertyList = ({ selectedElement, updateHTMLProperties, selectedIndex }) => {
  const getData = (property) => {
    if (selectedIndex == null) return null;
    if (selectedElement == null) return null;
    if (!("htmlProperty" in selectedElement)) return null;
    if (property in selectedElement.htmlProperty) return selectedElement.htmlProperty[property];
    return null;
  }

  const getpropertys = (selectedElement) => {
    if (selectedElement == null) return [];
    switch (selectedElement.tag) {
      case 'a': return ["href", "target"];
      default: return [];
    }
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
                onChange={(event) => updateHTMLProperties(selectedIndex, { [property]: event.target.value })}
                value={getData(property) || ''}
              />
            </li>
          ))}
        
      </div>
      <div className="card-footer" style={{padding:0}}>
        <div className="btn-group" role="group" style={{width:'100%'}}> 
          <button
            className="list-group-item btn btn-secondary"
            style={{ width: '100%', padding:10}}
          >
            Add HTML property
          </button>
        </div>
      </div>
    </div>
  )
}
export default HTMLPropertyList;