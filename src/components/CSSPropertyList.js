import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SelectCSSPropertyList from './SelectCSSPropertyList';

const CSSPropertyList = ({ selectedElement, updateCSSProperties, selectedIndex }) => {
  const getData = (property) => {
    if (selectedIndex == null) return null;
    if (selectedElement == null) return null;
    if (!("cssProperty" in selectedElement)) return null;
    if (property in selectedElement.cssProperty) return selectedElement.cssProperty[property].value;
    return null;
  }

  const getInputClassName = (property) => {
    switch (property) {
      case "color": case "background-color": return "form-control form-control-color";
      default: return "form-control form-control-sm";
    }
  }

  const getInputType = (property) => {
    switch (property) {
      case "color": case "background-color": return "color";
      default: return null;
    }
  }

  const getOptions = (property) => {
    switch (property) {
      case "display": return [null, "none", "block", "inline", "inline-block"];
      case "text-align": return [null, "left", "right", "center", "justify"];
      default: return null;
    }
  }

  const handlePropertyAdd = (property) => {
    updateCSSProperties(selectedIndex, property, null);
    console.log(selectedElement);
  }

  const getPropertyList = () => {
    let result = new Set(defaultProperties);
    if(selectedElement && selectedElement.cssProperty) {
      Object.keys(selectedElement.cssProperty).map((property) => (
        result.add(property)
      ))
    }
    return Array.from(result);
  }

  return (
    <div className="card" style={{ height: '280px', marginTop: 20 }}>
      <div className="card-header">
        <b>CSS PROPERTY</b>
      </div>
      <div className="list-group list-group-flush overflow-auto">
        {getPropertyList().map((property, index) => (
          <li
            className="list-group-item d-flex justify-content-between align-items-center"
            key={index}
            style={{ whiteSpace: 'nowrap' }}>
            {property}:
            {(getOptions(property)) ? (
              <select
                className="form-select form-select-sm"
                disabled={!selectedElement}
                style={{ marginLeft: 10 }}
                onChange={(event) => updateCSSProperties(selectedIndex, property, event.target.value)}
                value={getData(property) || ''}
              >
                {getOptions(property).map((option, index) => (
                  <option value={option} key={index}>{option}</option>
                ))}
              </select>
            ) : (
              <input
                className={getInputClassName(property)}
                type={getInputType(property)}
                disabled={!selectedElement}
                style={{ marginLeft: 10 }}
                onChange={(event) => updateCSSProperties(selectedIndex, property, event.target.value)}
                value={getData(property) || ''}
              />
            )}
          </li>
        ))}
      </div>
      <div className="card-footer" style={{ padding: 0 }}>
        <div className="btn-group" role="group" style={{ width: '100%' }}>
          <button
            className="list-group-item btn btn-secondary"
            data-bs-toggle="modal"
            data-bs-target="#addCSSProperty"
            style={{ width: '100%', padding: 10 }}
            disabled={selectedIndex===null}
          >
            Add CSS property
          </button>
        </div>

        <div className="modal fade"
          id="addCSSProperty"
          tabIndex="-1"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">Add CSS Property</h1>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close">
                </button>
              </div>
              <div className="modal-body">
                <SelectCSSPropertyList onTagSelect={handlePropertyAdd} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default CSSPropertyList;

const defaultProperties = ["color", "font-size", "font-family", "margin", "padding", "border", "background-color", "text-align", "display", "width", "height"]
// const propertys = ["font-size", "font-weight", "color", "letter-spacing", "display", "border"];