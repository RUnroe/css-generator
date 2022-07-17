import { useState } from 'react';
import ContentMain from './components/content/ContentMain';
import ExportPanel from './components/export-panel/ExportPanel';
import Header from "./components/header/Header";
import NavPanel from './components/nav-panel/NavPanel';

const App = () => {
  const [isLeftPanelOpen, setLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setRightPanelOpen] = useState(false);
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
