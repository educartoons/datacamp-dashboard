import { lazy } from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import { Layout } from "./components/Layout/Layout";
import { Wrapper } from "./components/Wrapper/Wrapper";

const CoursesPage = lazy(() => import("./pages/CoursesPage"));
const QuizPage = lazy(() => import("./pages/QuizPage"));

function App() {
  return (
    <>
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
    </>
  );
}

export default App;
