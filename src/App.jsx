// import logo from './logo.svg';
import { Routes, Route } from "react-router-dom";
import "./App.css";
import { Home } from "./components/Home";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Register } from "./components/Register";
import { EmployeeListing } from "./components/EmployeeListing";
import { EmployeeDetails } from "./components/EmployeeDetails";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/register" element={<Register />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route
                    path="/InputDetail"
                    element={<EmployeeListing />}
                ></Route>
                <Route
                    path="/EmployeetDetail"
                    element={<EmployeeDetails />}
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
