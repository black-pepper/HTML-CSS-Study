import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const CSSPropertyList = ({tagData, updateCSSProperties}) => {
    return (
        <div className="card">
            <div className="card-header">
                <b>CSS PROPERTY</b>
            </div>
            <div className="list-group list-group-flush">
                {propertys.map((property, index) => (
                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index} style={{ whiteSpace: 'nowrap' }}>
                        {property}:
                        <input 
                            className="form-control form-control-sm"
                            style={{ marginLeft: 10 }}>
                        </input>
                    </li>
                ))}
            </div>
        </div>
    )
}
export default CSSPropertyList;

const propertys = ["font-size", "font-weight", "color", "letter-spacing", "display", "border"];