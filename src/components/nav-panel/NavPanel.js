import '../Panel.css';
import './NavPanel.css';

const NavPanel = ({isOpen}) => {
    return (
        <div className={`nav-panel panel ${!isOpen ? "hidden" : ""}`}>
            
        </div>
    );
  }
  
  export default NavPanel;
  