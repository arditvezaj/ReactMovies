import Input from "../components/Input";
import Button from "../components/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isValid, setIsValid] = useState(true);

  const navigate = useNavigate();

  const usernameHandler = (event) => {
    setUsername(event.target.value);
  };

  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (username.trim().length === 0 || password.trim().length < 6) {
      setIsValid(false);
      return;
    }
    setIsValid(true);
    setUsername("");
    setPassword("");
    localStorage.setItem("token", username);
    navigate("/");
    window.location.reload();
  };

  return (
    <>
      <h1 className="text-3xl text-center mt-6">Login</h1>
      {!isValid && (
        <p className="text-center mt-4 text-red-500">
          Please enter valid credentials!
        </p>
      )}
      <form
        onSubmit={submitHandler}
        className="flex flex-col justify-center items-center my-6 text-lg"
      >
        <Input
          name="Username:"
          type="text"
          value={username}
          onChange={usernameHandler}
        />
        <Input
          name="Password:"
          type="password"
          value={password}
          onChange={passwordHandler}
        />
        <Button name="Login" type="submit" />
      </form>
    </>
  );
};

export default Login;
