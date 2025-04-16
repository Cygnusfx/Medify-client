import React, { useState } from "react";

export const Login: React.FC = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };
  const handleSubmit = () => {
    console.log("Form Data:", formData);
    alert("Form submitted successfully!");
  };
  return (
    <>
      <div className="flex justify-center items-center w-full h-screen bg-black">
        <div className="bg-white p-8 rounded shadow-md w-96">
          <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
          <form className="flex flex-col">
            <input
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              type="text"
              placeholder="Email"
              className="border p-2 mb-4 rounded"
            />
            <input
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              type="password"
              placeholder="Password"
              className="border p-2 mb-4 rounded"
            />
            <button
                onClick={(e) => {
                    e.preventDefault();
                    handleSubmit();
                }}
              type="submit"
              className="bg-blue-500 text-white py-2 rounded"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

