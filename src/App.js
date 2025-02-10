import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import axios from "axios";
import { context, server } from ".";
import { ShopContext } from "./Context/ShopContext";
import AppRoute from "./Components/Body/AppRoute";

function App() {
  const { setIsAuthenticated, setIsAdmin } = useContext(context);
  const { getCart } = useContext(ShopContext);

  useEffect(() => {
    axios
      .get(`${server}/users/profile`, {
        withCredentials: true,
      })
      .then((res) => {
        setIsAdmin(res?.data?.data?.user?.role);
        getCart();
        setIsAuthenticated(true);
        toast.success(`Welcome Back ${res?.data?.data?.user?.userName}`);
      })
      .catch((error) => {
        toast.error("Login First");
        setIsAdmin("");
        setIsAuthenticated(false);
      });
  }, []);

  return (
    <div className="App">
      <AppRoute />
    </div>
  );
}

export default App;
