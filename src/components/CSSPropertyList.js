import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const CSSPropertyList = () => {
    return (
        <div className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-primary"><b>CSS PROPERTY</b></li>
            {propertys.map((property, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index} style={{ whiteSpace: 'nowrap' }}>
                    {property}:<input className="form-control form-control-sm" style={{ marginLeft: 10 }}></input>
                </li>
            ))}
        </div>
    )
}
export default CSSPropertyList;

const propertys = ["font-size", "font-weight", "color", "letter-spacing", "display", "border"];