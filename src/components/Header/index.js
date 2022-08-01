import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const Header = ({ routerPage }) => {
  const navigate = useNavigate();

  return (
    <Container>
      {(routerPage === 'home' || routerPage === 'succes') ? <></> :
        //<span onClick={() => {navigate(-1)}}><ion-icon name="arrow-undo-circle-outline"></ion-icon></span>
        <></>
      }
      <h1>CINEFLEX</h1>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 70px;

  background-color: #C3CFD9;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;

  position: relative;

  span{
    position: absolute;
    left: 20px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:first-child{
      color: #E8833A;
      font-size: 35px;
    }
  }

  h1 {
    font-size: 34px;
    font-family: 'Roboto';
    font-weight: 400;
    color: #E8833A;
  }
`;

export default Header;