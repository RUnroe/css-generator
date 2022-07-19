import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './Content.css';
import Variables from './Variables';

const ContentMain = ({isLeftOpen, isRightOpen}) => {
    const [variables, setVariables] = useState([]);
    const updateVariables = (value) => {setVariables(value)};

    return (
        <>
        <div><Toaster/></div>
        <div className={`content-section ${isLeftOpen ? "left-open" : ""} ${isRightOpen ? "right-open" : ""}`}>
            <Variables variables={variables} setVariables={updateVariables}/>
        </div>
        </>
    );
  }
  
  export default ContentMain;
  