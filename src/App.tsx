import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Quiz } from "./components/Quiz/Quiz";
import { UserContextProvider } from "./context/UserContext";
import { CoursesPage } from "./pages/CoursesPage";
import { AppleCarousel } from "./components/AppleCarousel/AppleCarousel";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoursesPage />,
  },
  {
    path: "/quiz",
    element: <Quiz />,
  },
  {
    path: "*",
    element: <p>Page not found</p>,
  },
]);

function App() {
  return (
    <>
      <UserContextProvider>
        <AppleCarousel />
      </UserContextProvider>
    </>
  );
}

export default App;
