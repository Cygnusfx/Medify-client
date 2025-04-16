import React, { useState } from "react";

const Register: React.FC = () => {
  interface FormData {
    email: string;
    password: string;
    role: "doctor" | "patient" | "";
  }
  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
    role: "",
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
          <h2 className="text-2xl font-bold mb-6 text-center">Register</h2>
          <form className="flex flex-col">
            <select
              className="border p-2 mb-4 rounded-lg"
              onChange={(e) =>
                handleInputChange(
                  "role",
                  e.target.value as "doctor" | "patient"
                )
              }
              value={formData.role}
            >
              <option value="" disabled>
                Select a role
              </option>
              <option value="doctor">Doctor</option>
              <option value="patient">Patient</option>
            </select>
            <input
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              type="text"
              placeholder="Email"
              className="border p-2 mb-4 rounded-lg"
            />
            <input
              value={formData.password}
              onChange={(e) => handleInputChange("password", e.target.value)}
              type="password"
              placeholder="Password"
              className="border p-2 mb-4 rounded-lg"
            />
            <button
              onClick={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
              type="submit"
              className="bg-blue-500 text-white py-2 rounded-full cursor-pointer"
            >
              Register
            </button>
          </form>
          <hr className="my-4" />
          <button className="text-md bg-green-500 text-white py-2 w-full font-medium rounded-full cursor-pointer">
            Goolugulu
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;
