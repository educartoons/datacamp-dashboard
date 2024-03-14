import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Wrapper } from "./components/Wrapper/Wrapper";
import { UserContextProvider } from "./context/UserContext";

const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));

function App() {
  return (
    <>
      <UserContextProvider>
        <Layout>
          <Wrapper>
            <Router>
              <Routes>
                <Route path="/" element={<CoursesPage />} />
                <Route path="/quiz" element={<QuizPage />} />
              </Routes>
            </Router>
          </Wrapper>
        </Layout>
      </UserContextProvider>
    </>
  );
}

export default App;
