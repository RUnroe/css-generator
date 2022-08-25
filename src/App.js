import { useEffect, useState } from 'react';
import ContentMain from './components/content/ContentMain';
import ExportPanel from './components/export-panel/ExportPanel';
import Header from "./components/header/Header";
import NavPanel from './components/nav-panel/NavPanel';

const App = () => {
  const [isLeftPanelOpen, setLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setRightPanelOpen] = useState(false);

  const [exportData, setExportData] = useState({});


  //Note objectKeyPath: separate path with '>'. (eg. 'form>inputGroup') 
  const separateObjectKeyPath = (objectKeyPath) => {
    return objectKeyPath.split(">");
  }

  const addExportData = (objectKeyPath, objectValue) => {
    let keyPathArray = separateObjectKeyPath(objectKeyPath);
    //Get a deep copy of the exportData object
    let tempExportData = JSON.parse(JSON.stringify(exportData));
    let observedKey = tempExportData;
    //Loop through keys and find right key/value pair in object
    for(let i = 0; i < keyPathArray.length; i++) {
      //If there is no value, set the value to an empty object
      if( !observedKey[keyPathArray[i]] ) observedKey[keyPathArray[i]] = {};
      //If this is the last loop, set the value. Otherwise, set observedKey again
      if(keyPathArray.length-1 === i)
        observedKey[keyPathArray[i]] = objectValue;
      else
        observedKey = observedKey[keyPathArray[i]];
    }
    //set value in temp exportData object
    // console.log(tempExportData);
    setExportData(tempExportData);
  }

  // useEffect(() => {
  //   addExportData("form>inputGroup", true);
  //   removeExportData("form>inputGroup");
  // }, [])

  const removeExportData = (objectKeyPath) => {
    let keyPathArray = separateObjectKeyPath(objectKeyPath);
    //Get a deep copy of the exportData object
    let tempExportData = JSON.parse(JSON.stringify(exportData));
    let observedKey = tempExportData;
    //Loop through keys and find right key in object
    for(let i = 0; i < (keyPathArray.length - 1); i++) {
      observedKey = observedKey[keyPathArray[i]];
      if (typeof observedKey === 'undefined') break;
    }
    //Delete property
    delete observedKey[keyPathArray.pop()];
    //set value in temp exportData object
    // console.log(tempExportData);
    setExportData(tempExportData);
  }

  return (
    <div className="app">
      <Header isLeftPanelOpen={isLeftPanelOpen} setLeftPanelOpen={setLeftPanelOpen} isRightPanelOpen={isRightPanelOpen} setRightPanelOpen={setRightPanelOpen}/>
      <NavPanel isOpen={isLeftPanelOpen}/>
      <ExportPanel isOpen={isRightPanelOpen}/>
      <ContentMain isLeftOpen={isLeftPanelOpen} isRightOpen={isRightPanelOpen}/>
    </div>
  );
}

export default App;
