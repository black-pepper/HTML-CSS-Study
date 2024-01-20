import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CSSPropertyList = ({ selectedElement, updateCSSProperties, selectedIndex}) => {
  const getData = (property) => {
		if (selectedIndex == null) return null;
		if (selectedElement == null) return null;
    if (!("cssProperty" in selectedElement)) return null;
    if (property in selectedElement.cssProperty) return selectedElement.cssProperty[property];
		return null;
	}

  return (
    <div className="card h-50">
      <div className="card-header">
        <b>CSS PROPERTY</b>
      </div>
      <div className="list-group list-group-flush overflow-auto">
        {properties.map((property, index) => (
          <li className="list-group-item d-flex justify-content-between align-items-center" key={index} style={{ whiteSpace: 'nowrap' }}>
            {property}:
            <input
              className="form-control form-control-sm"
              style={{ marginLeft: 10 }}
              onChange={(event) => updateCSSProperties(selectedIndex, { [property]: event.target.value })}
							value={getData(property) || ''}
            />
          </li>
        ))}
      </div>
    </div>
  )
}
export default CSSPropertyList;

const properties = ["color", "font-size", "font-family", "margin", "padding", "border", "background-color", "text-align", "display", "width", "height"]
// const propertys = ["font-size", "font-weight", "color", "letter-spacing", "display", "border"];