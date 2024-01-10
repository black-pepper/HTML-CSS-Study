import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const CSSPropertyList = () => {
    return (
        <div class="list-group" style={{margin:10}}>
            <li class="list-group-item list-group-item-action list-group-item-primary"><b>CSS PROPERTY</b></li>
            {propertys.map((property, index) => (
                <li class="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {property}
                </li>
            ))}
        </div>
    )
}
export default CSSPropertyList;

const propertys = ["font-size", "font-weight", "color", "letter-spacing", "display", "border"];