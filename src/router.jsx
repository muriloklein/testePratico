import Contacts from "./pages/Contacts";
import RootLayout from "./pages/RootLayout";
import Home from "./pages/Home";
import AllContacts from "./pages/Contacts/allContacts";
import UpdateContact from "./pages/Contacts/updateContact";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "Contacts",
        element: <Contacts />,
        children: [
          { index: true, element: <AllContacts /> },
          { path: ":id/update", element: <UpdateContact /> },
        ],
      },
    ],
  },
]);

export default router;
