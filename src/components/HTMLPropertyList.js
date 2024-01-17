import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const HTMLPropertyList = ({HTMLProperty, updateHTMLProperties, selectedIndex}) => {
    const getData = (property) => {
        if (selectedIndex == null) return null;
        if (HTMLProperty == null) return null;
        if (property in HTMLProperty) return HTMLProperty[property];
        return null;
    }
    return (
        <div className="card">
            <div className="card-header" id={selectedIndex}>
                <b>HTML PROPERTY</b>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-secondary" key="-2">
                    selectedIndex: {selectedIndex}
                </li>
                <li className="list-group-item list-group-item-secondary" key="-1">
                    <input className="form-control form-control-sm" placeholder="content"></input>
                </li>
                {propertys.map((property, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        {property}:
                        <input 
                            className="form-control form-control-sm"
                            style={{marginLeft:10}}
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