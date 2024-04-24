import React from 'react';
import './Tab.css';

const Tab = (props) => {
  const { allTabs, currentTabIndex, setCurrentTabIndex } = props;

  return (
    <div className="Tab">
      {
        allTabs.map((item, index) => (
          <div key={item.title} className={`tab tb ${ index === currentTabIndex ?"selectedTab" : "nonSelectedTab"  }`} 
          onClick={(e) => setCurrentTabIndex(index) }>
            <img className={'img'+index} src={"../src/assets/"+ item.title +".svg"} alt={item.title} />
            <div className="title-tab">
               { item.title }
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default Tab;
