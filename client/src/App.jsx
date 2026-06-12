import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import Login from "./pages/authentication/Login";
import { Toaster } from "react-hot-toast";
import { getOtherUserThunk, getUserProfileThunk } from "./store/slice/user/user.thunk";

function App() {
  const [count, setCount] = useState(0);

  const state = useSelector((state) => state.userSlice);
  const dispatch = useDispatch();
  console.log(state);

  useEffect(() => {
    (async () => {
     await dispatch(getUserProfileThunk());
      await dispatch(getOtherUserThunk())
    })();
  }, []);

  return (
    <>
      {/* <h1>He</h1>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-error">Error</button> */}
      <Toaster position="top-center" reverseOrder={false} />
    </>
  );
}

export default App;
