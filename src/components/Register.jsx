import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        username: "",
        mobile: "",
        description: "",
    });
    const handle = (e) => {
        const { name } = e.target;
        setFormData({
            ...formData,
            [name]: e.target.value,
        });
        // console.log(formData);
    };

    const registerUser = async (e) => {
        e.preventDefault();
        try {
            // let res =
            await fetch(
                `https://masai-api-mocker.herokuapp.com/auth/register`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(formData),
                }
            );
            // let data = await res.json();
            alert("Register Successful");
            navigate("/Login");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div>
            <form onSubmit={registerUser}>
                <input
                    name="name"
                    onChange={handle}
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    name="email"
                    onChange={handle}
                    type="text"
                    placeholder="Email"
                />
                <br />
                <input
                    name="password"
                    onChange={handle}
                    type="text"
                    placeholder="Password"
                />
                <br />
                <input
                    name="username"
                    onChange={handle}
                    type="text"
                    placeholder="Username"
                />
                <br />
                <input
                    name="mobile"
                    onChange={handle}
                    type="number"
                    placeholder="Mobile"
                />
                <br />
                <input
                    name="description"
                    onChange={handle}
                    type="text"
                    placeholder="Description"
                />
                <br />
                <input type="submit" />
            </form>
        </div>
    );
};
