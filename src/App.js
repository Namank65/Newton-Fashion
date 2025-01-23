import toast from "react-hot-toast"
import { useContext, useEffect } from 'react';
import axios from 'axios';
import { context, server } from '.';
import Browse from "./Components/Body/Browse";

function App() {
  const {userDetail, setUserDetail, setIsAuthenticated ,isAdmin, setIsAdmin} = useContext(context);

  useEffect(() => {
    
    axios.get(`${server}/users/profile`,{
      withCredentials: true
    }).then(res => {
      setUserDetail("hi")
      setIsAdmin(res?.data?.data?.user?.role)
      setIsAuthenticated(true)
      toast.success(`Welcome To Nubi Fashion ${res.data.data.user.userName}`)
      console.log(res)
      
    }).catch((error) => {
      toast.error("Login First")
      // setUserDetail({})
      setIsAdmin("")
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
