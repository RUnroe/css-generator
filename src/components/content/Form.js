import React, { useState } from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { vs2015 } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Form = () => {
    const [formGroupCode, setFormGroupCode] = useState(`
<div className="input-group">
    <label htmlFor="demo-input">Input Label:</label>
    <input id="demo-input" type="text" />
</div>
    `);
    const [inputTypeCode, setInputTypeCode] = useState(`
<div className="input-group">
    <label htmlFor="demo-textarea">Textarea Label:</label>
    <textarea id="demo-textarea" type="text" textarea/>
    <input type="checkbox" />
    <input type="radio" />
    <select>
        <option>Option 1</option>
        <option>Option 2</option>
        <option>Option 3</option>
    </select>
</div>
    `);
    return (  
        <div id='form' className='form-section section'>
            <a href='#form'><h2>Form</h2></a>
            <hr/>

            <div className='nested-section'>
                <h3>Input Groups</h3>
                <p>A wrapper for a form input and label. This wrapper adds styles to its children inputs, textareas, and labels.</p>
                <div className="demo-container">
                    <h4>Basic input-group</h4>
                    <div className="demo-display">
                        <div className="input-group">
                            <label htmlFor="demo-input">Input Label:</label>
                            <input id="demo-input" type="text" />
                        </div>
                    </div>
                
                    <SyntaxHighlighter language="html" style={vs2015}>
                        {formGroupCode}
                    </SyntaxHighlighter>

                </div>
                <div className="demo-container">
                    <h4>Types of inputs</h4>
                    <div className="demo-display">
                        <div className="input-group">
                            <label htmlFor="demo-textarea">Textarea Label:</label>
                            <textarea id="demo-textarea" type="text" textarea/>
                            <input type="checkbox" />
                            <input type="radio" />
                            <select>
                                <option>Option 1</option>
                                <option>Option 2</option>
                                <option>Option 3</option>
                            </select>
                        </div>
                    </div>
                
                    <SyntaxHighlighter language="html" style={vs2015}>
                        {inputTypeCode}
                    </SyntaxHighlighter>

                </div>
                
            </div>

        </div>
    );
}
 
export default Form;
