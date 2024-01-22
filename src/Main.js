import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
  }, [selectedIndex, tagData]);

  const updateSeletedIndex = (index) => {
    setSelectedIndex(index);
    setSelectedElement(tagData[index]);
  }

  const updateHTMLProperties = (index, newHtmlProperty) => {
    setTagData((prevTagData) => {
      if (index >= 0 && index < prevTagData.length) {
        const updatedTagData = [...prevTagData];
        updatedTagData[index] = {
          ...updatedTagData[index],
          htmlProperty: {
            ...updatedTagData[index].htmlProperty,
            ...newHtmlProperty,
          },
        };
        setTagData(updatedTagData);
        setSelectedElement(updatedTagData[index]);
      }
      return prevTagData;
    });
  };
  
  const updateCSSProperties = (index, newCssProperty) => {
    setTagData((prevTagData) => {
      if (index >= 0 && index < prevTagData.length) {
        const updatedTagData = [...prevTagData];
        updatedTagData[index] = {
          ...updatedTagData[index],
          cssProperty: {
            ...updatedTagData[index].cssProperty,
            ...newCssProperty,
          },
        };
        setTagData(updatedTagData);
        setSelectedElement(updatedTagData[index]);
      }
      return prevTagData;
    });
  };
  const addTagData = (tagType) => {
    setTagData([...tagData, { tag: tagType, htmlProperty: {}, cssProperty: {} }]);
  }
  const removeTagData = (indexToRemove) => {
    debugger;
    if(indexToRemove===selectedIndex){
      setSelectedElement(null);
      setSelectedIndex(null);
    }
    const updatedTagData = tagData.filter((_, index) => index !== indexToRemove);
    setTagData(updatedTagData);
  };

  return (
    <div className="container">
      <ResultBox 
        tagData={tagData}
      />
      <div className="row h-50">
        <div className="col">
          <HTMLPropertyList
            selectedElement={selectedElement}
            updateHTMLProperties={updateHTMLProperties}
            selectedIndex={selectedIndex} />
        </div>
        <div className="col">
          <CSSPropertyList
            selectedElement={selectedElement}
            updateCSSProperties={updateCSSProperties}
            selectedIndex={selectedIndex} />
        </div>
        <div className="col">
          <ElementList
            tagData={tagData}
            AddTagData={addTagData}
            removeTagData={removeTagData}
            selectedIndex={selectedIndex}
            setSelectedIndex={updateSeletedIndex} />
        </div>
      </div>
      <footer className="py-3 mt-auto"></footer>
    </div>
  )
}
export default Main;