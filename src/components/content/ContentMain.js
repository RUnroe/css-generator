import { useEffect, useState } from 'react';
import { Toaster } from 'react-hot-toast';
import './Content.css';
import Form from './Form';
import Type from './Type';
import Variables from './Variables';

const ContentMain = ({isLeftOpen, isRightOpen, exportData, addExportData, removeExportData}) => {
    const [variables, setVariables] = useState([]);
    const updateVariables = (value) => {setVariables(value)};

    useEffect(() => {
        addExportData("variables", variables);
    }, [variables]);

    return (
        <>
        <div><Toaster/></div>
        <div className={`content-section ${isLeftOpen ? "left-open" : ""} ${isRightOpen ? "right-open" : ""}`}>
            <div className='content-container'>
                <Variables variables={variables} setVariables={updateVariables}/>
                <Type exportData={exportData} addExportData={addExportData} removeExportData={removeExportData}/>
                <Form exportData={exportData} addExportData={addExportData} removeExportData={removeExportData}/>
            </div>
        </div>
        </>
    );
  }
  
  export default ContentMain;
  