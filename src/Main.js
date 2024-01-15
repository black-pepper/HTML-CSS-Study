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
        setTagData((prevTagData) => {
            const updatedTagData = [...prevTagData];
            // Ensure the index is valid
            if (index >= 0 && index < updatedTagData.length) {
              updatedTagData[index] = {
                ...updatedTagData[index],
                htmlProperty: {
                  ...updatedTagData[index].htmlProperty,
                  ...newHtmlProperty,
                },
              };
            }
            return updatedTagData;
          });
    };
    const updateCSSProperties = (index, newCssProperty) => {
        setTagData((prevTagData) => {
            const updatedTagData = [...prevTagData];
            // Ensure the index is valid
            if (index >= 0 && index < updatedTagData.length) {
              updatedTagData[index] = {
                ...updatedTagData[index],
                cssProperty: {
                  ...updatedTagData[index].cssProperty,
                  ...newCssProperty,
                },
              };
            }
            return updatedTagData;
          });
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
                    <HTMLPropertyList tagData={tagData} updateHTMLProperties={updateHTMLProperties} selectedElement={selectedElement}/>
                </div>
                <div className="col">
                    <CSSPropertyList tagData={tagData} updateCSSProperties={updateCSSProperties} selectedElement={selectedElement}/>
                </div>
                <div className="col">
                    <ElementList tagData={tagData} AddTagData={addTagData} removeTagData={removeTagData} selectedElement={selectedElement} setSelectedElement={setSelectedElement}/>
                </div>
            </div>
        </div>
    )
}
export default Main;