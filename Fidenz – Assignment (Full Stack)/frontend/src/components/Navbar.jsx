import React, { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-purple-600 dark:bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Weather Analytics</h1>
      <div className="flex items-center gap-4">
        <button
          onClick={toggleDarkMode}
          className="bg-purple-400 dark:bg-gray-700 px-3 py-1 rounded"
        >
          {darkMode ? "Light" : "Dark"}
        </button>

        {isAuthenticated ? (
          <button
            onClick={() => logout({ returnTo: window.location.origin })}
            className="bg-red-500 px-3 py-1 rounded"
          >
            Logout
          </button>
        ) : (
          <button
            onClick={() => loginWithRedirect()}
            className="bg-green-500 px-3 py-1 rounded"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
