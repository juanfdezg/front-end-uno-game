import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../auth/AuthContext";
import API_URL from "../common/config";

function UserCheck() {
  const { token } = useContext(AuthContext);
  const [msg, setMsg] = useState("");

  const config = {
    'method' : 'get',
    'url' : `${API_URL}/scope-users/protecteduser`,
    'headers' : {
        'Authorization' : `Bearer ${token}`
    }
  };
  useEffect(() => {
    axios(config).then((response) => {
        console.log("Enviaste un token bueno, y estás logeado!!!");
        console.log(response);
        setMsg(response.data.message);
    }).catch((error) => {
        console.log("Hubo un error, no estás logeado/el token expiró")
        console.log(error);
        setMsg(error.message);
    });
  }, []);

  return (
    <h1>{msg}</h1>
  )
}

export default UserCheck;

