import { Layout } from "./components/Layout/Layout";
import { CoursesGrid } from "./components/CoursesGrid/CoursesGrid";
import { Wrapper } from "./components/Wrapper/Wrapper";

function App() {
  return (
    <>
      <Layout>
        <Wrapper>
          <CoursesGrid />
        </Wrapper>
      </Layout>
    </>
  );
}

export default App;
