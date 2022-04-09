import axios from "axios";
import React, { useState } from "react";

export const EmployeeListing = () => {
    const [empData, setEmpData] = useState({
        name: "",
        age: "",
        gender: "",
        contact: "",
        department: "",
        salary: "",
        image: "",
    });
    const handle = (e) => {
        const { name } = e.target;
        setEmpData({
            ...empData,
            [name]: e.target.value,
        });
        // console.log(formData);
    };
    const listEmployee = () => {
        axios.post("http://localhost:3001/EmpData", empData);
    };
    return (
        <div>
            <h1>Employee Listing</h1>
            <form onSubmit={listEmployee}>
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    onChange={handle}
                />
                <input
                    name="age"
                    type="text"
                    placeholder="age"
                    onChange={handle}
                />
                <input
                    name="gender"
                    type="text"
                    placeholder="gender"
                    onChange={handle}
                />
                <input
                    name="contact"
                    type="text"
                    placeholder="contact"
                    onChange={handle}
                />
                <input
                    name="department"
                    type="text"
                    placeholder="department"
                    onChange={handle}
                />
                <input
                    name="salary"
                    type="text"
                    placeholder="salary"
                    onChange={handle}
                />
                <input
                    name="image"
                    type="text"
                    placeholder="image"
                    onChange={handle}
                />
                <input type="submit" />
            </form>
        </div>
    );
};
