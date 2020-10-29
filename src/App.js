import React from "react";
import NavBar from "Components/NavBar";
import List from "Components/List";
import Details from "Components/Details";
import { Container, Wrapper, Main } from "Styles/styles";
import Global from "Styles/global";

const App = () => {
  const [list, setList] = React.useState();
  const [detail, setDetail] = React.useState();

  return (
    <Container>
      <Wrapper>
        <Global />
        <NavBar handle={(item) => setList(item)} />
        <Main>
          <List list={list} handle={(item) => setDetail(item)} />
          <Details item={detail} />
        </Main>
      </Wrapper>
    </Container>
  );
};

export default App;
