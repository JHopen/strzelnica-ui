import React from "react";
import {createRoot} from "react-dom/client";
import SideBar from "./sideBar/sidebar";
import MainContent from "./mainContent/mainContent";

import './index.css'

function MainPage() {
  return <div className="content">
      <React.StrictMode>  
          <SideBar/>
          <MainContent/>
      </React.StrictMode> 
    </div>
}

const container =  document.getElementById('root');
const root = createRoot(container);
root.render(<MainPage/>);
