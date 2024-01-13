import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import SelectTagList from './SelectTagList';

const ElementList = () => {
    
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const handleTagSelect = (tagType) => {
        setElements([...elements, tagType]);
    };

    const handleTagRemove = (indexToRemove) => {
        const updatedElements = elements.filter((_, index) => index !== indexToRemove);
        setElements(updatedElements);
    };

      const handleElementSelect = (index) => {
        setSelectedElement(elements[index]);
      };

    return (
        <div className="card">
            <div class="card-header">
                <b>ELEMENT</b>
            </div>
        <div className="list-group list-group-flush">
            {elements.map((element, index) => (
                <button 
                    className="list-group-item list-group-item-action d-flex justify-content-between align-items-center" 
                    key={index}
                    onClick={() => handleElementSelect(index)}
                >
                    {element}
                    <button
                        type="button"
                        className="btn-close"
                        aria-label="Close"
                        onClick={() => handleTagRemove(index)}>
                    </button>
                </button>
            ))}

            <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#addTag">
            Add Tag
            </button>

            <div className="modal fade"
                id="addTag"
                tabindex="-1"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Select Tag</h1>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close">
                            </button>
                        </div>
                        <div className="modal-body">
                            <SelectTagList onTagSelect={handleTagSelect} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
    )
}
export default ElementList;