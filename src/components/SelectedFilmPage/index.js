import styled from "styled-components";
import StatusBar from "../StatusBar";

const SelectedFilmPage = () => {
  return (
    <>
    <Container>
      <h1>Selecione o horário</h1>
      <div>
        <p>Quinta-feira 24-06-2022</p>
        <button>15:00</button>
        <button>19:00</button>
      </div>
      <div>
        <p>Sexta-feira 25-06-2022</p>
        <span>
          <button>15:00</button>
          <button>19:00</button>
        </span>
      </div>
    </Container>
    <StatusBar />
    </>
  )
}

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  
  font-family: 'Roboto';

  h1 {
    font-size: 24px;
    margin: auto;
    padding: 40px 0;
  }

  div {
    font-size: 18px;
    margin: 20px;
  }

  span {
    display: flex;
  }

  button {
    width: 85px;
    height: 40px;

    color: white;
    text-align: center;
    background-color: #E8833A;

    border: 0;
    border-radius: 3px;
    margin: 0 5px;
    margin-top: 15px;
  }

`;


export default SelectedFilmPage;