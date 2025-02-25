import styled from "styled-components";
import CountLinker from "./components/CountLinker";
import Footer from "./components/Footer";
import Header from "./components/Header";
import ImageRow from "./components/ImageRow";
import SectionTwo from "./components/SectionTwo";
import { ProjectProvider } from "./contexts/ProjectProvider";

const Container = styled.div`
  background-color: var(--white);
`;

function App() {
  return (
    <Container>
      <ProjectProvider>
        <Header />
        <CountLinker transform={false}>01</CountLinker>
        <ImageRow />
        <SectionTwo />
        <CountLinker transform={true}>02</CountLinker>
        <Footer />
      </ProjectProvider>
    </Container>
  );
}

export default App;
