"use client"
import { useState } from "react";

type Props = {
  onLogin: () => void;
};

const LoginBox = ({ onLogin }: Props) => {
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === "password123") {
      onLogin();
    } else {
      setErrorMessage("Incorrect access code!");
    }
  };

  return (
    <div className="border border-gray-300 p-4 rounded-md max-w-md mx-auto mt-8">
      <h2 className="text-sm  mb-4">Please, Login to access notes.</h2>
      {errorMessage && (
        <p className="text-red-500 font-semibold mb-4">{errorMessage}</p>
      )}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-gray-800 font-semibold mb-2">
            Access code
          </label>
          <input
            type="password"
            value={password}
            placeholder="**********"
            onChange={handlePasswordChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            autoComplete="off"
            autoFocus

          />
        </div>
        <button
          type="submit"
          className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg shadow-md"
        >
          Access
        </button>
      </form>
    </div>
  );
};

export default LoginBox;
