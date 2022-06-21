import "./App.css";
import { useGlobalContext } from "./context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CreateAccount from "./Pages/CreateAccount";
import ExceptionalDataA from "./Pages/ExceptionalDataA";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Navbar from "./Navbar";
import SideBar from "./SideBar";
import VotingCategories from "./Pages/VotingCategories";
import FutureEditions from "./Pages/FutureEditions";
import Donation from "./Pages/Donation";
import CelebratedTechies from "./Pages/CelebratedTechies";
import ConnectedTechies from "./Pages/ConnectedTechies";
import VotingPower from "./Pages/VotingPower";

function App() {
  const { openSidebar } = useGlobalContext();
  return (
    <>
      {openSidebar && <SideBar />}

      <Navbar />
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/votingPower' element={<VotingPower/>}></Route>
          <Route path='/connectedTechies' element={<ConnectedTechies/>}></Route>
          <Route path='/celebratedTechies' element={<CelebratedTechies/>}></Route>
          <Route path='/donation' element={<Donation/>}></Route>
          <Route path='/futureEditions' element={<FutureEditions/>}></Route>
          <Route path='/votingCategories' element={<VotingCategories/>}></Route>
          <Route path="/exceptionalData_a" element={<ExceptionalDataA />}></Route>
          <Route path="/createAccount" element={<CreateAccount/>}></Route>
          <Route path="/login" element={<Login/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
