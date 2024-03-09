import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { CoursesGrid } from "./components/CoursesGrid/CoursesGrid";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { Quiz } from "./components/Quiz/Quiz";
import { UserContext, UserContextProvider } from "./context/UserContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoursesGrid />,
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
        <Layout>
          <Wrapper>
            <RouterProvider router={router} />
          </Wrapper>
        </Layout>
      </UserContextProvider>
    </>
  );
}

export default App;
