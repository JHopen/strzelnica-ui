import React from "react";
import {createRoot} from "react-dom/client";

import './index.css'

function MainPage() {
  return <div>
      <React.StrictMode>  
        <div></div>
      </React.StrictMode> 
    </div>
}

const container =  document.getElementById('root');
const root = createRoot(container);
root.render(<MainPage/>);
