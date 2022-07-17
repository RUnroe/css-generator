import { useState } from 'react';
import Header from "./components/header/Header";

const App = () => {
  const [isLeftPanelOpen, setLeftPanelOpen] = useState(false);
  const [isRightPanelOpen, setRightPanelOpen] = useState(false);
  return (
    <div className="app">
      <Header isLeftPanelOpen={isLeftPanelOpen} setLeftPanelOpen={setLeftPanelOpen} isRightPanelOpen={isRightPanelOpen} setRightPanelOpen={setRightPanelOpen}/>
      
    </div>
  );
}

export default App;
