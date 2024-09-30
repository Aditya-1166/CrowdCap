import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot from 'react-dom/client'
import { BrowserRouter as Router } from "react-router-dom";
import { ChainId, ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";
import { Sepolia } from "@thirdweb-dev/chains";

import App from "./App";
import { StateContextProvider } from "./context";
import "./index.css";

const root = document.getElementById("root");

createRoot(root).render(
  <ThirdwebProvider
    supportedWallets={[metamaskWallet({ recommended: true })]}
    activeChain={Sepolia}
    clientId="60b861374eb0ac176c982a7f6eb6dac6">
    <Router>
      <StateContextProvider>
        <App />
      </StateContextProvider>
    </Router>
  </ThirdwebProvider>
);
