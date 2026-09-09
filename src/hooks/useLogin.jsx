import { useState } from "react";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const loginUser = async (data) => {
    setLoading(true);
    setError("");

    try {
      // Future: Supabase / API authentication
      console.log("Login Data:", data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        success: true,
        message: "Login successful",
      };
    } catch (error) {
      setError("Something went wrong. Please try again.");

      return {
        success: false,
        message: "Login failed",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    loginUser,
    loading,
    error,
  };
};

export default useLogin;
