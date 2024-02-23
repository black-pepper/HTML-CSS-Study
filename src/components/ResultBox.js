import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { VpnLock } from '@mui/icons-material';

const ResultBox = ({ tagData }) => {
  const getResult = () => {
    if (tagData.current == null) return null;

    // 결과를 저장할 변수
    let result = '';

    const DFS = (target) => {
      const tag = tagData.current[target].tag;
      const htmlProperty = tagData.current[target].htmlProperty;
      const cssProperty = tagData.current[target].cssProperty;
      // 각 태그와 속성에 맞게 HTML 코드 추가
      result += `<${tag}`;
      // HTML 속성 추가
      Object.entries(htmlProperty).forEach(([key, value]) => {
        if(key!="content") result += ` ${key}="${value.value}"`;
      });
      // CSS 속성 추가
      if(!(Object.keys(cssProperty).length===0)) { 
        result += ` style="`;
        Object.entries(cssProperty).forEach(([key, value]) => {
          if(value) result += `${key}:${value.value};`;
        });
        result += `">${(htmlProperty.content)?htmlProperty.content.value:''}`;
          if (tagData.current[target] && tagData.current[target].children) {
            for (const child of tagData.current[target].children) DFS(child);
          }
        result += `</${tag}>`; // 태그 닫기
      } else {
        result += `>${(htmlProperty.content)?htmlProperty.content.value:''}`
          if (tagData.current[target] && tagData.current[target].children) {
            for (const child of tagData.current[target].children) DFS(child);
          }
        result += `</${tag}>`; // 태그 닫기
      }
    }
    for(const i in tagData.current) {
      if(tagData.current[i].depth == 0) DFS(i);
    }
    return result;
  };

  return (
    <div className="card" style={{ marginTop: 20 }}>
      <div className="card-body" dangerouslySetInnerHTML={{ __html: getResult() }} />
      <div className="card-footer text-body-secondary">
        {getResult()}
      </div>
    </div>
  );
};

export default ResultBox;