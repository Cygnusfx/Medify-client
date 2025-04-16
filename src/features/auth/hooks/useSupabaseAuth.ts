import { supabaseClient } from "../../../services/supabaseClient";

export default function useSupabaseAuth() {
  return {
    logInWithEmailPassword,
    registerWithEmailPassword,
    signInWithGoogle,
  };
}

async function logInWithEmailPassword(email: string, password: string) {
  try {
    const responseFromSupabase = await supabaseClient.auth.signInWithPassword({
      email: email,
      password: password,
    });
    if (responseFromSupabase.data.session?.access_token)
      return responseFromSupabase.data.session.access_token;
  } catch (error) {
    console.log(error);

    return null;
  }
}

async function registerWithEmailPassword(email: string, password: string) {
  try {
    const responseFromSupabase = await supabaseClient.auth.signUp({
      email: email,
      password: password,
    });
    if (responseFromSupabase.data.session?.access_token)
      return responseFromSupabase.data.session.access_token;
  } catch (error) {
    console.log(error);

    return null;
  }
}

async function signInWithGoogle() {
  try {
    await supabaseClient.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${window.location.origin}/auth/callback`,
      },
    });
    const token = (await supabaseClient.auth.getSession()).data.session?.access_token;
    
    return true;
  } catch (error) {
    console.log(error);
    return null;
  }
}
