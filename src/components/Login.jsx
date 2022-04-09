import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { store_data } from "../Redux/action";

export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [loginData, setLoginData] = useState({
        username: "",
        password: "",
    });
    // console.log(profile.name === undefined);

    const handleLogin = (e) => {
        const { name } = e.target;
        setLoginData({
            ...loginData,
            [name]: e.target.value,
        });
        // console.log(loginData);
    };

    const loginUser = async (e) => {
        e.preventDefault();
        try {
            let res = await fetch(
                `https://masai-api-mocker.herokuapp.com/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(loginData),
                }
            );
            let data = await res.json();

            getDetails(loginData.username, data.token);
        } catch (err) {
            console.log(err);
            navigate("/register");
        }
    };

    const getDetails = async (username, token) => {
        try {
            let res = await fetch(
                `https://masai-api-mocker.herokuapp.com/user/${username}`,
                {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            let data = await res.json();
            dispatch(store_data(data));
            console.log(data);
            navigate("/");
            // pass(profile);
        } catch (err) {
            console.log(err);
        }
    };
    // console.log(profile);
    return (
        <div>
            <form onSubmit={loginUser}>
                <input
                    onChange={handleLogin}
                    name="username"
                    type="text"
                    placeholder="Username"
                />
                <input
                    onChange={handleLogin}
                    name="password"
                    type="password"
                    placeholder="Password"
                />
                <input type="submit" />
            </form>
        </div>
    );
};
