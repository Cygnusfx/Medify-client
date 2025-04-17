import axios from "axios";

export default function useAuthViaServer () {
    return { logInWithEmailPasswordService, registerWithEmailPasswordService, signInWithGoogleService };
}

async function logInWithEmailPasswordService (email: string, token : string) {
    try {
      const responseFromServer = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/auth/login`,
        { email },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      localStorage.setItem("username", responseFromServer.data.data.username);

      return true;
    } catch (error) {
      return false;
    }
}

async function registerWithEmailPasswordService (name: string, email: string, role: string, token : string) {
  try {
    const responseFromServer = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/register`,
      { name, email, role },
      {
        headers: {
            'Authorization': `Bearer ${token}`
        }
      }
    );
    console.log(responseFromServer);
    
    localStorage.setItem("username", responseFromServer.data.data.username);

    return true;
  } catch (error) {
    console.log(error);
    
    return false;
  }
}

async function signInWithGoogleService(token: string) {
  try {
    const responseFromServer = await axios.post(
      `${import.meta.env.VITE_SERVER_URL}/auth/sign-in`,
      {},
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}