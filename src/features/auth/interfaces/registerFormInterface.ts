export interface RegisterFormInterface {
    name: string;
    email: string;
    password: string;
    role: "doctor" | "patient" | "";
  }