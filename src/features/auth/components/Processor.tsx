import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabaseClient } from '../../../services/supabaseClient';
import useAuthViaServer from '../hooks/useAuthViaServer';

const Processor : React.FC = () => {
    const navigate = useNavigate();
    const { signInWithGoogleService } = useAuthViaServer();
    useEffect(() => {
        const fetchTokenAndSendToServer = async () => {
          const token = (await supabaseClient.auth.getSession()).data.session?.access_token;
          if (!token) {
            navigate("/login");
            return;
          }
          console.log('ha');
          
          const responseFromServer = await signInWithGoogleService(token);
          if (responseFromServer) {
            console.log(responseFromServer);
            
            navigate(`/username/dashboard`);
          }
        }
        fetchTokenAndSendToServer();
    }, []);
  return (
    <div>Loading...</div>
  )
}

export default Processor;