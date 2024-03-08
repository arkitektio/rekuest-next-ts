import {
  FaktsGuard,
  FaktsProvider,
  WellKnownDiscovery,
  demandRetrieve,
  useFakts,
  buildFailsafeDemander,
  demandDeviceToken,
  buildRemoteGrant,
} from "@jhnnsrs/fakts";
import { HerreGuard, HerreProvider, useHerre } from "@jhnnsrs/herre";
import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import { NoHerre } from "./NoHerre";
import { NoRekuest } from "./NoRekuest";
import { Callback } from "./contrib/Callback";
import { FaktsLogin } from "./contrib/FaktsLogin";
import { RekuestAutoConfigure } from "./contrib/RekuestAutoConfigure";
import { TestNode } from "./contrib/TestNode";
import { RekuestGuard, RekuestProvider } from "./rekuest";
import { PostmanProvider } from "./rekuest/postman/PostmanProvider";
import { WidgetRegistryProvider } from "./rekuest/widgets/WidgetsProvider";

export const Log = () => {
  const fakts = useFakts();
  const herre = useHerre();

  return (
    <button
      onClick={() => {
        herre.logout();
        fakts.setFakts(null);
      }}
    >
      Disconnect
    </button>
  );
};

export const ProtectedApp = () => {
  return (
    <HerreGuard fallback={<NoHerre />}>
      <RekuestProvider>
        <WidgetRegistryProvider>
          <PostmanProvider>
            <Log />
            <RekuestAutoConfigure />
            <RekuestGuard fallback={<NoRekuest />}>
              <TestNode />
            </RekuestGuard>
          </PostmanProvider>
        </WidgetRegistryProvider>
      </RekuestProvider>
    </HerreGuard>
  );
};


export const grant = buildRemoteGrant({ demand: buildFailsafeDemander(demandRetrieve, demandDeviceToken)})

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <FaktsProvider grant={grant}>
        <WellKnownDiscovery endpoints={["http://localhost:12000"]} />
        <FaktsGuard fallback={<FaktsLogin />}>
          <HerreProvider>
            <Router>
              <Routes>
                <Route path="/" element={<ProtectedApp />} />
                <Route path="/callback" element={<Callback />} />
              </Routes>
            </Router>
          </HerreProvider>
        </FaktsGuard>
      </FaktsProvider>
    </div>
  );
}

export default App;
