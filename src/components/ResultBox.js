import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

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
        if (key != "content") result += ` ${key}="${value.value}"`;
      });
      // CSS 속성 추가
      if (!(Object.keys(cssProperty).length === 0)) {
        result += ` style="`;
        Object.entries(cssProperty).forEach(([key, value]) => {
          if (value) result += `${key}:${value.value};`;
        });
        result += `">${(htmlProperty.content) ? htmlProperty.content.value : ''}`;
        if (tagData.current[target] && tagData.current[target].children) {
          for (const child of tagData.current[target].children) DFS(child);
        }
        result += `</${tag}>`; // 태그 닫기
      } else {
        result += `>${(htmlProperty.content) ? htmlProperty.content.value : ''}`
        if (tagData.current[target] && tagData.current[target].children) {
          for (const child of tagData.current[target].children) DFS(child);
        }
        result += `</${tag}>`; // 태그 닫기
      }
    }
    for (const i in tagData.current) {
      if (tagData.current[i].depth == 0) DFS(i);
    }
    return result;
  };

  const getTagResult = () => {
    if (tagData.current == null) return null;

    // 결과를 저장할 변수
    let result = '';

    const DFS = (target) => {
      const tag = tagData.current[target].tag;
      const htmlProperty = tagData.current[target].htmlProperty;
      const cssProperty = tagData.current[target].cssProperty;
      const depth = tagData.current[target].depth;
      // 각 태그와 속성에 맞게 HTML 코드 추가
      if (depth > 0) {
        result += "  ".repeat(depth);
      }
      result += `<${tag}`;
      // HTML 속성 추가
      Object.entries(htmlProperty).forEach(([key, value]) => {
        if (key != "content") result += ` ${key}="${value.value}"`;
      });
      // CSS 속성 추가
      if (!(Object.keys(cssProperty).length === 0)) {
        result += ` style="`;
        Object.entries(cssProperty).forEach(([key, value]) => {
          if (value) result += `${key}:${value.value};`;
        });
        result += `">\n${(htmlProperty.content) ? "  ".repeat(depth + 1) + htmlProperty.content.value + '\n' : ''}`;
        if (tagData.current[target] && tagData.current[target].children) {
          for (const child of tagData.current[target].children) DFS(child);
        }
        if (depth > 0) {
          result += "  ".repeat(depth);
        }
        result += `</${tag}>\n`; // 태그 닫기
      } else {
        result += `>\n${(htmlProperty.content) ? "  ".repeat(depth + 1) + htmlProperty.content.value + '\n' : ''}`
        if (tagData.current[target] && tagData.current[target].children) {
          for (const child of tagData.current[target].children) DFS(child);
        }
        if (depth > 0) {
          result += "  ".repeat(depth);
        }
        result += `</${tag}>\n`; // 태그 닫기
      }
    }
    for (const i in tagData.current) {
      if (tagData.current[i].depth == 0) DFS(i);
    }
    return result;
  }

  const openResultWindow = () => {
    // 결과를 보여줄 HTML 코드를 작성합니다.
    const resultHTML = getResult();

    // 새 창을 엽니다.
    const resultWindow = window.open("", "_blank");

    // 새 창에 HTML을 쓰고 닫힘 이벤트를 처리합니다.
    resultWindow.document.write(resultHTML);
    resultWindow.document.close();
  };


  return (
    <div className="card mb-3" style={{ marginTop: 10 }}>
      <div className="row g-0">
        <div className="col"
          style={{ padding: 10 }}
          dangerouslySetInnerHTML={{ __html: getResult() }}
        />
        <div className="col text-bg-light"
          style={{ minHeight: "40px", whiteSpace: "pre", padding: 10, display: "block" }}>
          {getTagResult()}
          <div className='text-end'>
            <button
              style={{ marginTop: 10 }}
              type="button"
              className="btn btn-light"
              onClick={openResultWindow}
            >
              SHOW NEW WINDOW
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultBox;