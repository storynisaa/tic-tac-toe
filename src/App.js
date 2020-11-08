import React from "react";
import styled from "styled-components";
import TicTacToe from "./TicTacToe";
import "papercss/dist/paper.min.css";

function App() {
  return (
    <>
      <Main>
        <TicTacToe />
      </Main>
      <Footer>
        <FooterInner>
          Khoirunnisa (1119101750){" "}
          <a href="https://github.com/Clarity-89/React_tic_tac_toe">-Alamat Github-</a>
        </FooterInner>
      </Footer>
    </>
  );
}

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: 1 0 auto;
  font-family: Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: center;
  width: 100%;
  flex: 0 0 auto;
  font-family: Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;

const FooterInner = styled.div`
  padding: 16px 0;
  font-family : Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;
export default App;
