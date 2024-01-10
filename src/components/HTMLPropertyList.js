import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const HTMLPropertyList = () => {
    return (
        <div class="list-group" style={{margin:10}}>
            <li class="list-group-item list-group-item-action list-group-item-primary"><b>HTML PROPERTY</b></li>
            {propertys.map((property, index) => (
                <li class="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {property}
                </li>
            ))}
        </div>
    )
}
export default HTMLPropertyList;

const propertys = ["href", "target"];