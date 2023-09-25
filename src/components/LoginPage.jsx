import React, { useState, useEffect } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

  const handleMouseEnter = () => {
    // Check if both username and password fields are empty
    if (username.trim() === "" && password.trim() === "") {
      // Calculate random coordinates within the parent element's boundaries
      const parentElement = document.getElementById("button-container");
      if (parentElement) {
        const parentRect = parentElement.getBoundingClientRect();
        const newX =
          Math.random() * (parentRect.width - 100) + 20; // Adjust as needed
        const newY =
          Math.random() * (parentRect.height - 40) + 10; // Adjust as needed
        setButtonPosition({ x: `${newX}px`, y: `${newY}px` });
      }
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };


  // Reset the button's position when input fields change or user stops hovering
  useEffect(() => {
    setButtonPosition({ x: "50%", y: "50%" }); // Centered position
  }, [username, password]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 p-5">
      <div className="bg-gray-800 p-8 rounded-lg shadow-lg shadow-gray-700 ring-2 w-full max-w-md relative text-white">
        <div className="w-full flex justify-center itemc flex-col">
        <h1 className="font-bold text-center text-2xl">Log in Page</h1>
        <p className="text-center font-semibold text-green-500">{username !== '' && password !== '' ? "Now you can Login" : ""}</p>
        </div>
        <h2 className="text-3xl font-extrabold text-gray-800 mb-4">Login</h2>
        <div className="mb-4">
          <label
            className="block  text-sm font-bold mb-2"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="shadow appearance-none text-black border w-full py-2  leading-tight focus:outline-none focus:shadow-outline rounded-full px-5"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="mb-4 relative">
          <label
            className="block text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            className="shadow appearance-none text-black border w-full py-2  leading-tight focus:outline-none focus:shadow-outline rounded-full px-5"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="absolute top-0 right-0 mr-2 "
            onClick={togglePasswordVisibility}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </div>
        <div
          id="button-container"
          className="w-full h-24 relative"
        >
          <button
            onMouseEnter={handleMouseEnter}
            style={{
              position: "absolute",
              top: buttonPosition.y,
              left: buttonPosition.x,
              transition: "top 0.1s ease-in-out, left 0.1s ease-in-out", // Add transition properties
            }}
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </div>
        <div className="w-full text-center mt-5">
            <p className="text-gray-500">Don't have an account yet? <span className="text-white font-semibold curp">Sign Up</span></p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
