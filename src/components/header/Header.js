import Hamburger from 'hamburger-react';
import './Header.css';

const Header = ({isLeftPanelOpen, setLeftPanelOpen, isRightPanelOpen, setRightPanelOpen}) => {
    return (
        <div className="header">
            <Hamburger toggled={isLeftPanelOpen} toggle={setLeftPanelOpen} size={24} color="#485284" direction="right"/>
            <h1>CSS Generator</h1>
            <Hamburger toggled={isRightPanelOpen} toggle={setRightPanelOpen} size={24} color="#485284" />

        </div>
    );
  }
  
  export default Header;
  