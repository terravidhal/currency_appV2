import React from 'react';
import './Results.css';


const Results = (props) => {
  const { allTabs, currentTabIndex } = props;

  return (
    <div className="Results">
      { allTabs[currentTabIndex].content }
    </div>
  )
}

export default Results;
