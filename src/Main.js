import React, { useState, useEffect } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

import ResultBox from './components/ResultBox';
import HTMLPropertyList from './components/HTMLPropertyList';
import ElementList from './components/ElementList';
import CSSPropertyList from './components/CSSPropertyList';

const Main = () => {
    const [tagData, setTagData] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);
    const [selectedElement, setSelectedElement] = useState(null);

    useEffect(() => {
      // Fetch the selectedElement using selectedIndex
      const selectedElement = tagData[selectedIndex];
      // Handle the selectedElement as needed (e.g., updating HTML properties)
      console.log('Selected Element:', selectedElement);
    }, [selectedIndex, tagData]);

    const updateSeletedIndex = (index) => {
      setSelectedIndex(index);
      setSelectedElement(tagData[index]);
    }

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
          console.log(tagData);
          setSelectedElement(tagData[index]);
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
                    <HTMLPropertyList 
                      tagData={selectedElement}
                      updateHTMLProperties={updateHTMLProperties} 
                      selectedIndex={selectedIndex}/>
                </div>
                <div className="col">
                    <CSSPropertyList 
                      tagData={tagData} 
                      updateCSSProperties={updateCSSProperties} 
                      selectedIndex={selectedIndex}/>
                </div>
                <div className="col">
                    <ElementList 
                      tagData={tagData} 
                      AddTagData={addTagData} 
                      removeTagData={removeTagData} 
                      selectedIndex={selectedIndex} 
                      setSelectedIndex={updateSeletedIndex}/>
                </div>
            </div>
        </div>
    )
}
export default Main;