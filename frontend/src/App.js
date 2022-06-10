import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";

import { MainContainer } from "./components/MainContainer";

const Grid = styled.div`
  display: grid;
`;

const Flex = styled.div`
  display: flex;
`;

const App = () => {
  return (
      <Router>
        <MainContainer>
          <Grid>
            <h1>Prechess</h1>
          </Grid>
        </MainContainer>
      </Router>
  );
}

export default App;
