import { useState } from 'react';
import './Content.css';
import Variables from './Variables';

const ContentMain = ({isLeftOpen, isRightOpen}) => {
    const [variables, setVariables] = useState([]);
    const updateVariables = (value) => {setVariables(value)};

    return (
        <div className={`content-section ${isLeftOpen ? "left-open" : ""} ${isRightOpen ? "right-open" : ""}`}>
            <Variables variables={variables} setVariables={updateVariables}/>
        </div>
    );
  }
  
  export default ContentMain;
  