import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

import ResultBox from './components/ResultBox';
import HTMLPropertyList from './components/HTMLPropertyList';
import ElementList from './components/ElementList';
import CSSPropertyList from './components/CSSPropertyList';


const Main = () => {
    const [tagData, setTagData] = useState([]);

    const updateHTMLProperties = (index, properties) => {
      };
    const updateCSSProperties = (index, properties) => {
      };

    return (
        <div className="container">
            <ResultBox/>
            <div className="row">
                <div className="col">
                    <HTMLPropertyList/>
                </div>
                <div className="col">
                    <CSSPropertyList/>
                </div>
                <div className="col">
                    <ElementList/>
                </div>
            </div>
        </div>
    )
}
export default Main;