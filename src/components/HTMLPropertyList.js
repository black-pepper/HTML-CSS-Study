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

	return (
		<div className="card">
			<div className="card-header" id={selectedIndex}>
				<b>HTML PROPERTY</b>
			</div>
			<ul className="list-group list-group-flush">
				<li className="list-group-item list-group-item-secondary" key="-1">
					<input
            className="form-control form-control-sm" 
            placeholder="content"
            onChange={(event) => updateHTMLProperties(selectedIndex, { ["content"]: event.target.value })}
            value={getData("content") || ''}
          />
				</li>
				{propertys.map((property, index) => (
					<li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
						{property}:
						<input
							className="form-control form-control-sm"
							style={{ marginLeft: 10 }}
							onChange={(event) => updateHTMLProperties(selectedIndex, { [property]: event.target.value })}
							value={getData(property) || ''}
						/>
					</li>
				))}
			</ul>
		</div>
	)
}
export default HTMLPropertyList;

const propertys = ["href", "target"];