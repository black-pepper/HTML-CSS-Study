import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

const CSSPropertyList = () => {
    return (
        <div class="list-group" style={{margin:10}}>
            <li class="list-group-item">속성 목록1</li>
            <li class="list-group-item">속성 목록2</li>
            <li class="list-group-item">속성 목록3</li>
        </div>
    )
}
export default CSSPropertyList;