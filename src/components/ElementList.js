import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const ElementList = () => {
    return (
        <div class="list-group" style={{margin:10}}>
            <li class="list-group-item">요소 목록1</li>
            <li class="list-group-item">요소 목록2</li>
            <li class="list-group-item">요소 목록3</li>
        </div>
    )
}
export default ElementList;