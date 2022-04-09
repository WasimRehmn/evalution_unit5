import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
    return (
        <div>
            <Link to=" /">Home</Link>
            <Link to="/register">Regiter</Link>
            <Link to="/login">Login</Link>
            <Link to="/InputDetail">Employee Register</Link>
            <Link to="/EmployeetDetail">Employee Detail</Link>
        </div>
    );
};
