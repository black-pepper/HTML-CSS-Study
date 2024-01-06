import React, { useState } from 'react';
import'bootstrap/dist/css/bootstrap.min.css';

import ResultBox from './components/ResultBox';
import HTMLPropertyList from './components/HTMLPropertyList';
import ElementList from './components/ElementList';
import CSSPropertyList from './components/CSSPropertyList';


const Main = () => {
    return (
        <div class="container">
            <ResultBox/>
            <div class="row">
                <div class="col">
                    <HTMLPropertyList/>
                </div>
                <div class="col">
                    <CSSPropertyList/>
                </div>
                <div class="col">
                    <ElementList/>
                </div>
            </div>
        </div>
    )
}
export default Main;