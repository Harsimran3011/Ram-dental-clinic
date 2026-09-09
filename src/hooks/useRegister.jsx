import { useState } from "react";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const registerUser = async (data) => {
    setLoading(true);
    setError("");

    try {
      // Future: Supabase / Backend API
      console.log("Register Data:", data);

      await new Promise((resolve) => setTimeout(resolve, 1000));

      return {
        success: true,
        message: "Account created successfully",
      };
    } catch (error) {
      setError("Something went wrong. Please try again.");

      return {
        success: false,
        message: "Registration failed",
      };
    } finally {
      setLoading(false);
    }
  };

  return {
    registerUser,
    loading,
    error,
  };
};

export default useRegister;
