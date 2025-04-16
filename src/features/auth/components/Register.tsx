import React, { useState } from "react";
import { RegisterFormInterface } from "../interfaces/registerFormInterface";
import useSupabaseAuth from "../hooks/useSupabaseAuth";
import useAuthViaServer from "../hooks/useAuthViaServer";
import { useNavigate } from "react-router-dom";

export const Register: React.FC = () => {
  const { signInWithGoogle, registerWithEmailPassword } = useSupabaseAuth();
  const { signInWithGoogleService, registerWithEmailPasswordService } =
    useAuthViaServer();

  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterFormInterface>({
    name: "",
    email: "",
    password: "",
    role: "",
  });
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };


  const handleSubmit = async () => {
    console.log("Form Data:", formData);
    const tokenFromSupabaseAuthHook = await registerWithEmailPassword(
      formData.email,
      formData.password
    );
    if (tokenFromSupabaseAuthHook) {
      const responseFromServer = await registerWithEmailPasswordService(
        formData.name,
        formData.email,
        formData.role,
        tokenFromSupabaseAuthHook
      );
      if (responseFromServer) {
        navigate(`/username/dashboard`);
        return;
      }
      alert("Error registering user!");
    }
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
              value={formData.name}
              onChange={(e) => handleInputChange("name", e.target.value)}
              type="text"
              placeholder="Name"
              className="border p-2 mb-4 rounded-lg"
            />
            <input
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              type="email"
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
          <button onClick={async () => {
            await signInWithGoogle();
          }} className="text-md bg-green-500 text-white py-2 w-full font-medium rounded-full cursor-pointer">
            Goolugulu
          </button>
        </div>
      </div>
    </>
  );
};
