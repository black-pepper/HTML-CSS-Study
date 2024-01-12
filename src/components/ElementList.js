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
        <div className="list-group">
            <li className="list-group-item list-group-item-action list-group-item-primary"><b>ELEMENT</b></li>
            {elements.map((element, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                    {element}
                        <button  type="button" className="btn-close" aria-label="Close" onClick={() => handleTagRemove(index)}></button>
                </li>
            ))}
            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
            Add Tag
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Select Tag</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
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