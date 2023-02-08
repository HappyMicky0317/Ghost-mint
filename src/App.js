import React from "react";
import "./App.scss";

import { LastLocationProvider } from "react-router-last-location";
import { ViewportProvider } from "./contexts/viewport.context";
import Auth from 'src/components/Auth';
import Routes from 'src/Routes';
import '../node_modules/react-vis/dist/style.css';


function App(props) {
  return (
    <div>
      <ViewportProvider>
        <LastLocationProvider>
          <Auth>
            <Routes />
          </Auth>
        </LastLocationProvider>
      </ViewportProvider>
    </div>
  );
}

export default App;
