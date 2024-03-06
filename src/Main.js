import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import ResultBox from './components/ResultBox';
import HTMLPropertyList from './components/HTMLPropertyList';
import ElementList from './components/ElementList';
import CSSPropertyList from './components/CSSPropertyList';
import TagData from './dto/TagData';
import PropertyData from './dto/PropertyData';

const Main = () => {
  let tagData = useRef({});
  let endIndex = useRef(0); 
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
    if (!tagData.current[index].htmlProperty[type]){
      tagData.current[index].htmlProperty[type] = new PropertyData(value, 0);
    }
    tagData.current[index].htmlProperty[type].value = value;
    setSelectedElement(JSON.parse(JSON.stringify(tagData.current[index])));
  };
  
  const updateCSSProperties = (index, type, value) => {
    if (!tagData.current[index].cssProperty[type]){
      tagData.current[index].cssProperty[type] = new PropertyData(value, 0);
    }
    tagData.current[index].cssProperty[type].value = value;
    setSelectedElement(JSON.parse(JSON.stringify(tagData.current[index])));
  };

  const addTagData = (tagType, index) => {
    if(index === -1) {
      tagData.current[endIndex.current++] = new TagData(tagType, 0, -1);
    } else {
      tagData.current[index].children.push(endIndex.current);
      tagData.current[endIndex.current++] = new TagData(tagType, tagData.current[index].depth+1, index);
    }
    updateTagList();
  }

  const removeTagData = (indexToRemove) => {
    if(indexToRemove===selectedIndex){
      setSelectedElement(null);
      setSelectedIndex(null);
    }
    const DFS = (target) => {
      if (tagData.current[target] && tagData.current[target].children) {
        for (const child of tagData.current[target].children) DFS(child);
      }
      delete tagData.current[target];
    }
    if(tagData.current[indexToRemove].parent !== -1) {
      tagData.current[tagData.current[indexToRemove].parent].children
        = tagData.current[tagData.current[indexToRemove].parent].children.filter((value) => value !== indexToRemove);
    }
    DFS(indexToRemove)
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
    for(const i in tagData.current) {
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