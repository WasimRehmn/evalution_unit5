import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Div = styled.div`
    top: 0;
    width: 98vw;
    height: 2rem;
    background-color: black;

    // & > Link {
    //     text-decoration: none;
    //     font-weight: 600;
    //     font-size: 20;
    //     color: white;
    //     padding: 0 2rem;
    // }
`;
export const Navbar = () => {
    return (
        <Div>
            <Link
                style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "white",
                    padding: "0 2rem",
                }}
                to=" /"
            >
                Home
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "white",
                    padding: "0 2rem",
                }}
                to="/register"
            >
                Regiter
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "white",
                    padding: "0 2rem",
                }}
                to="/login"
            >
                Login
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "white",
                    padding: "0 2rem",
                }}
                to="/InputDetail"
            >
                Employee Register
            </Link>
            <Link
                style={{
                    textDecoration: "none",
                    fontWeight: "600",
                    fontSize: "20px",
                    color: "white",
                    padding: "0 2rem",
                }}
                to="/EmployeetDetail"
            >
                Employee Detail
            </Link>
        </Div>
    );
};
