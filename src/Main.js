import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

import ResultBox from './components/ResultBox';
import HTMLPropertyList from './components/HTMLPropertyList';
import ElementList from './components/ElementList';
import CSSPropertyList from './components/CSSPropertyList';


const Main = () => {
    const [tagData, setTagData] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);

    const updateHTMLProperties = (index, newHtmlProperty) => {
    };
    const updateCSSProperties = (index, newCssProperty) => {
    };
    const addTagData = (tagType) => {
        setTagData([...tagData, {tag:tagType, htmlProperty:{}, cssProperty:{}}]);
    }
    const removeTagData = (indexToRemove) => {
        const updatedTagData = tagData.filter((_, index) => index !== indexToRemove);
        setTagData(updatedTagData);
    };

    return (
        <div className="container">
            <ResultBox/>
            <div className="row">
                <div className="col">
                    <HTMLPropertyList tagData={tagData} updateHTMLProperties={updateHTMLProperties}/>
                </div>
                <div className="col">
                    <CSSPropertyList tagData={tagData} updateCSSProperties={updateCSSProperties}/>
                </div>
                <div className="col">
                    <ElementList tagData={tagData} AddTagData={addTagData} removeTagData={removeTagData} selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
                </div>
            </div>
        </div>
    )
}
export default Main;