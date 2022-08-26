import { Fragment } from 'react';
import '../Panel.css';
import './ExportPanel.css';
import toast from 'react-hot-toast';

const ExportPanel = ({isOpen, exportData, removeExportData, variables, updateVariables}) => {
    const deleteVar = (id) => {
        updateVariables(variables.filter((v) => v.id !== id));
        toast.success("Variable Deleted");
    }

    const exportSectionToJSX = (key, value) => {
        // console.log(value);
        //If the value is falsey or it is an empty array, do not display anything in the export list
        if(!value || (Array.isArray(value) && !value.length)) return <></>;

        //Populate the children of the export list
        let children;
        if(key === "variables") {
            children = value.map((data, index) => (
                <div className='child' key={`variable${index}`}>
                    <div className='data'>
                        <p>{data.property}:</p>
                        <p>{data.value}</p>
                    </div>
                    <button className='export-remove' onClick={() => {deleteVar(data.id)}}>✕</button>
                </div>
            ));
        }
        //Generate the section and title for the export list
        return (
        <div className={`export-section ${key}`}>
            <p>{key}</p>
           {children}
        </div>
        );
    }


    return (
        <div className={`export-panel panel ${!isOpen ? "hidden" : ""}`}>
            <h2>Export</h2>
            <div>
                {Object.entries(exportData).map((data, index) => (
                    <Fragment key={`export${index}`}>{exportSectionToJSX(data[0], data[1])}</Fragment>
                ))}
            </div>
        </div>
    );
  }
  
  export default ExportPanel;
  