import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const HTMLPropertyList = () => {
    return (
        <div className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-primary"><b>HTML PROPERTY</b></li>
            <li className="list-group-item list-group-item-secondary" key="-1">
                <input className="form-control form-control-sm" placeholder="content"></input>
            </li>
            {propertys.map((property, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {property}:<input className="form-control form-control-sm" style={{marginLeft:10}}></input>
                </li>
            ))}
        </div>
    )
}
export default HTMLPropertyList;

const propertys = ["href", "target"];