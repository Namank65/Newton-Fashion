import toast from "react-hot-toast"
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { context, server } from '.';
import Browse from "./Components/Body/Browse";

function App() {
  const {setUser, setIsAuthenticated} = useContext(context);

  useEffect(() => {
    
    axios.get(`${server}/users/profile`,{
      withCredentials: true
    }).then(res => {
      setUser(res.data.user)
      setIsAuthenticated(true)
      toast.success("Welcome To Nubi Fashion")
      
    }).catch((error) => {
      toast.error("Login First")
      setUser({})
      setIsAuthenticated(false)
    })
  
  }, [])

  return (
    <div className="App">
      <Browse/>
    </div>
  );
}

export default App;
