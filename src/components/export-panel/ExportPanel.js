import '../Panel.css';
import './ExportPanel.css';

const ExportPanel = ({isOpen}) => {
    return (
        <div className={`export-panel panel ${!isOpen ? "hidden" : ""}`}>
            <h2>Export</h2>
        </div>
    );
  }
  
  export default ExportPanel;
  