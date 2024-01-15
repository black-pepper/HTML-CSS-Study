import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const HTMLPropertyList = ({tagData, updateHTMLProperties, selectedElement}) => {
    const getData = (property) => {
        if (selectedElement == null) return null;
    }
    return (
        <div className="card">
            <div className="card-header">
                <b>HTML PROPERTY</b>
            </div>
            <ul className="list-group list-group-flush">
                <li className="list-group-item list-group-item-secondary" key="-1">
                    <input className="form-control form-control-sm" placeholder="content"></input>
                </li>
                {propertys.map((property, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                        {property}:
                        <input 
                            className="form-control form-control-sm"
                            style={{marginLeft:10}}
                            onChange={(event) => updateHTMLProperties(selectedElement, { [property]: event.target.value })}
                        >
                            {getData(property)}
                        </input>
                    </li>
                ))}
            </ul>
        </div>
    )
}
export default HTMLPropertyList;

const propertys = ["href", "target"];