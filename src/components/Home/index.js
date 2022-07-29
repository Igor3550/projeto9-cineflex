import styled from 'styled-components'

const Home = () => {
  return (
    <>
      <Container>
        <p>Selecione o filme</p>
        <Films>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </Films>
      </Container>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    font-size: 24px;
    font-family: 'Roboto';
    margin: 50px 0;
  }
`;
const Films = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  
  justify-content: center;
  margin: 0 10px;

  div {
    width: 145px;
    height: 210px;

    border-radius: 5px;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
    padding: 2px;
    margin: 10px;
  }
`;

export default Home;