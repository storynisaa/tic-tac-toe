import React from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { border } from "./styles";

const customStyles = {
  overlay: {
    backgroundColor: "rgb(127, 218, 218)"
  }
};

export const ResultModal = ({ isOpen, close, startNewGame, winner }) => {
  return (
    <StyledModal
      isOpen={isOpen}
      onRequestClose={close}
      style={customStyles}
      ariaHideApp={false}
    >
      <ModalWrapper>
        <ModalTitle>Game over</ModalTitle>
        <ModalContent>{winner}</ModalContent>

        <ModalFooter>
          <Button onClick={close}>Tutup</Button>
          <Button onClick={startNewGame}>Mulai</Button>
        </ModalFooter>
      </ModalWrapper>
    </StyledModal>
  );
};
const StyledModal = styled(Modal)`
  height: 300px;
  position: relative;
  margin: 0 auto;
  top: 10%;
  right: auto;
  bottom: auto;
  width: 320px;
  outline: none;
  display: flex;
  flex-direction: column;
  font-family : Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;
const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  background-color: rgb(127, 218, 218);
  max-height: 100%;
  height: 100%;
  align-items: center;
  backface-visibility: hidden;
  padding: 1.25rem;
  ${border};
  font-family: Futura Md BT;
`;

const ModalTitle = styled.p`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
  font-family : Futura Md BT;
  font-colour : white;
  text-transform: uppercase;
`;

const ModalContent = styled.p`
  flex: 1 1 auto;
  text-align: center;
  font-family: Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;
ModalContent.displayName = "ModalContent";

const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
  flex: 0 0 auto;
  width: 100%;
  font-family: Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;

const Button = styled.button`
  font-size: 16px;
  font-family: Futura Md BT;
  background-colour: rgb(127, 218, 218);
`;
