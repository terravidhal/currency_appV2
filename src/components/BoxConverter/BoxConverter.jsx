import React, { useState } from 'react';
import './BoxConverter.css';
import Convert from '../Convert/Convert';
import Send from '../Send/Send';
import Graphics from '../Graphics/Graphics';
import Alerts from '../Alerts/Alerts';
import Tab from '../Tab/Tab';
import Results from '../Results/Results';


const BoxConverter = () => {

  const tabsArray = [
    { title: "Convert", content: <Convert/> },
    { title: "Send", content: <Send/> },
    { title: "Graphics", content: <Graphics/> },
    { title: "Alerts", content: <Alerts/> },
  ];

  
  const [ allTabs, setAllTabs ] = useState(tabsArray);

  const [ currentTabIndex, setCurrentTabIndex ] = useState(0);

  return(
    <div className="BoxConverter">
       <Tab 
        allTabs={ allTabs } 
        currentTabIndex={ currentTabIndex }
        setCurrentTabIndex={ setCurrentTabIndex } 
      />
      <Results allTabs={ allTabs } currentTabIndex={ currentTabIndex } />
    </div>
  );
};


export default BoxConverter;
