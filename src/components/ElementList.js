import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SelectTagList from './SelectTagList';

const ElementList = () => {

    const [elements, setElements] = useState([]);

    const handleTagSelect = (tagType) => {
        setElements([...elements, tagType]);
    };

    const handleTagRemove = (indexToRemove) => {
        const updatedElements = elements.filter((_, index) => index !== indexToRemove);
        setElements(updatedElements);
    };

    return (
        <div class="list-group" style={{margin:10}}>
            {elements.map((element, index) => (
                <li class="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {element}
                        <button  type="button" class="btn-close" aria-label="Close" onClick={() => handleTagRemove(index)}></button>
                </li>
            ))}
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Tag
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Select Tag</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <SelectTagList onTagSelect={handleTagSelect} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ElementList;