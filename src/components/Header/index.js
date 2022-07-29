import styled from "styled-components";

const Header = () => {
  return (
    <Container>
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

  h1 {
    font-size: 34px;
    font-family: 'Roboto';
    font-weight: 400;
    color: #E8833A;
  }
`;

export default Header;