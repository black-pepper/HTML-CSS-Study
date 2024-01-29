import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ResultBox from './components/ResultBox';
import HTMLPropertyList from './components/HTMLPropertyList';
import ElementList from './components/ElementList';
import CSSPropertyList from './components/CSSPropertyList';
import TagData from './dto/TagData';

const Main = () => {
  let tagData = useRef([]);
  const [tagList, setTagList] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [selectedElement, setSelectedElement] = useState(null);


  useEffect(() => {
  }, [tagList, selectedIndex, selectedElement]);

  const updateSeletedIndex = (index) => {
    setSelectedIndex(index);
    setSelectedElement(tagData.current[index]);
  }

  const updateHTMLProperties = (index, type, value) => {
    tagData.current[index].htmlProperty[type]=value;
    setSelectedElement(JSON.parse(JSON.stringify(tagData.current[index])));
  };
  
  const updateCSSProperties = (index, type, value) => {
    tagData.current[index].cssProperty[type]=value;
    setSelectedElement(JSON.parse(JSON.stringify(tagData.current[index])));
  };

  const addTagData = (tagType) => {
    tagData.current.push(new TagData(tagType, 0));
    setTagList(tagData.current.map(item => item.tag));
  }

  const removeTagData = (indexToRemove) => {
    if(indexToRemove===selectedIndex){
      setSelectedElement(null);
      setSelectedIndex(null);
    }
    tagData.current.splice(indexToRemove, 1);
    setTagList(tagData.current.map(item => item.tag));
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
            tagList={tagList}
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