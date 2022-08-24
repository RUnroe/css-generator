import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { railscasts } from 'react-syntax-highlighter/dist/esm/styles/hljs';
const Type = () => {
    const [headerCode, setHeaderCode] = useState(`
<h1>Header 1</h1>
<h2>Header 2</h2>
<h3>Header 3</h3>
<h4>Header 4</h4>
<h5>Header 5</h5>
<h6>Header 6</h6>
    `);
    const [errorMsgCode, setErrorMsgCode] = useState(`
<p className='error-msg'>This is an error</p>
    `);
    return (  
        <div id='type' className='type-section section'>
            <a href='#type'><h2>Type</h2></a>
            <hr/>

            <div className='nested-section'>
                <div className="demo-container">
                <h4>Headers</h4>
                <div className="demo-display">
                    <h1>Header 1</h1>
                    <h2>Header 2</h2>
                    <h3>Header 3</h3>
                    <h4>Header 4</h4>
                    <h5>Header 5</h5>
                    <h6>Header 6</h6>
                </div>
                    <SyntaxHighlighter language="htmlbars" style={railscasts}>
                        {headerCode}
                    </SyntaxHighlighter>

                </div>
                <div className="demo-container">
                    <h4>Error Message</h4>
                    <div className="demo-display">
                        <p className='error-msg'>This is an error</p>
                    </div>
                
                    <SyntaxHighlighter language="htmlbars" style={railscasts}>
                        {errorMsgCode}
                    </SyntaxHighlighter>

                </div>
                
            </div>

        </div>
    );
}
 
export default Type;
