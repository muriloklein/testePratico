import { RouterProvider } from "react-router-dom";
import router from "./router";
import "./styles/App.sass";

function App() {
  return <RouterProvider router={router} />;
}

export default App;
