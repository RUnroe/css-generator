import { Fragment } from 'react';
import '../Panel.css';
import './ExportPanel.css';

const ExportPanel = ({isOpen, exportData, removeExportData}) => {
      

    const exportSectionToJSX = (key, value) => {

        let children;
        if(key === "variables") {
            children = value.map((data, index) => (
                <div className='child' key={`variable${index}`}>
                    <div className='data'>
                        <p>{data.property}</p>
                        <p>{data.value}</p>
                    </div>
                    <button>✕</button>
                </div>
            ));
        }

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
  