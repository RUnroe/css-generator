import './Content.css';

const ContentMain = ({isLeftOpen, isRightOpen}) => {
    return (
        <div className={`content-section ${isLeftOpen ? "left-open" : ""} ${isRightOpen ? "right-open" : ""}`}>
            <h2>Content Title</h2>
        </div>
    );
  }
  
  export default ContentMain;
  