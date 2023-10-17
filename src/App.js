// import "../src/components/pages/displaytable.css";
import Nav from "./components/Nav";
import DisplayTable  from "./components/pages/DisplayTable";
import LineChart from "./components/pages/LineChart";
import { Route, Routes } from "react-router-dom";
import Name from "./components/Name";

function App() {
  return (
    <body>
    <div className="App">
      <Name/>
      <Nav />
      <Routes>
        <Route path="/LineChart" element={<LineChart />} />
        <Route path="/" element={<DisplayTable />} />
      </Routes>
    </div>
    </body>
  );
}

export default App;
