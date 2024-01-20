import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const ResultBox = ({ tagData }) => {
  const getResult = () => {
    if (tagData == null) return null;

    // 결과를 저장할 변수
    let result = '';

    // tagData를 순회하며 HTML 문자열 생성
    tagData.forEach(({ tag, htmlProperty, cssProperty }) => {
      // 각 태그와 속성에 맞게 HTML 코드 추가
      result += `<${tag}`;
      // HTML 속성 추가
      Object.entries(htmlProperty).forEach(([key, value]) => {
        if(key!="content") result += ` ${key}="${value}"`;
      });
      // CSS 속성 추가
      if(!(Object.keys(cssProperty).length===0)) { 
        result += ` style="`;
        Object.entries(cssProperty).forEach(([key, value]) => {
          result += `${key}:${value};`;
        });
        result += `">${(htmlProperty.content)?htmlProperty.content:''}</${tag}>\n`; // 태그 닫기
      } else {
        result += `>${(htmlProperty.content)?htmlProperty.content:''}</${tag}>\n`; // 태그 닫기
      }
    });
    return result;
  };

  return (
    <div className="card" style={{ marginTop: 20, marginBottom: 20 }}>
      <div className="card-body" dangerouslySetInnerHTML={{ __html: getResult() }} />
      <div class="card-footer text-body-secondary">
        {getResult()}
      </div>
    </div>
  );
};

export default ResultBox;