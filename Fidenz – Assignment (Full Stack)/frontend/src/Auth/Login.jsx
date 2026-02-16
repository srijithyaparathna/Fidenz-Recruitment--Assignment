import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    }
  }, [isAuthenticated, navigate]);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400">
        <p className="text-lg font-semibold text-purple-800">Loading...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-200 to-purple-400 dark:from-gray-900 dark:to-gray-800 transition-colors">
      <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-8 w-full max-w-md text-center">
        <h1 className="text-2xl font-bold text-purple-700 dark:text-purple-400 mb-2">
          Fidenz Weather Analytics
        </h1>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Secure Comfort Index Dashboard
        </p>

        <div className="text-6xl mb-6">🌤️</div>

        <button
          onClick={() => loginWithRedirect()}
          className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-full font-semibold transition duration-300 shadow-md"
        >
          Login with Auth0
        </button>

        <p className="text-xs text-gray-500 dark:text-gray-500 mt-6">
          Authorized access only • MFA enabled
        </p>
      </div>
    </div>
  );
};

export default Login;
