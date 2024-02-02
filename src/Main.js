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

  const addTagData = (tagType, index) => {
    if(index === -1) {
      tagData.current.push(new TagData(tagType, 0));
    } else {
      tagData.current[index].children.push(tagData.current.length);
      tagData.current.push(new TagData(tagType, tagData.current[index].depth+1));
    }
    updateTagList();
  }

  const removeTagData = (indexToRemove) => {
    if(indexToRemove===selectedIndex){
      setSelectedElement(null);
      setSelectedIndex(null);
    }
    tagData.current.splice(indexToRemove, 1);
    updateTagList();
  };

  const updateTagList = () => {
    let result = [];
    const DFS = (target) => {
      result.push(target)
      if (tagData.current[target] && tagData.current[target].children) {
        for (const child of tagData.current[target].children) DFS(child);
      }
    }
    for(let i=0; i<tagData.current.length; i++) {
      if(tagData.current[i].depth == 0) DFS(i);
    }
    setTagList(result);
  }

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