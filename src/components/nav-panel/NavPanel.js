import { useEffect } from 'react';
import { Link } from 'react-scroll';
import '../Panel.css';
import './NavPanel.css';

const NavPanel = ({isOpen}) => {

    useEffect(() => {
        const handleScroll = event => {
          console.log('window.scrollY', window.scrollY);

        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);

    return (
        <div className={`nav-panel panel ${!isOpen ? "hidden" : ""}`}>
            <Link href="#variables" activeClass="active" smooth spy to="variables">Variables</Link>
            <Link href="#form" activeClass="active" smooth spy to="form">Form</Link>
            
        </div>
    );
  }
  
  export default NavPanel;
  