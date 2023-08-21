import { useState } from "react";
import Header from "./components/Header";
import Add from "./components/Add";
import Retrieve from "./components/Retrieve";
import "./app.css";
import Tabs from "./components/Tabs";

const TABS = {
  Add: "Add",
  Retrieve: "Retrieve",
};

const App = () => {
  const [currentTab, setCurrentTab] = useState(TABS.Add);

  const changeTab = (value) => {
    setCurrentTab(value);
  };

  return (
    <div>
      <Header />
      <div className="wrapper">
        <Tabs changeTab={changeTab} currentTab={currentTab} />
        {currentTab === TABS.Add ? <Add /> : <Retrieve />}
      </div>
    </div>
  );
};

export default App;
