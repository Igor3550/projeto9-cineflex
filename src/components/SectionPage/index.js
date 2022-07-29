import styled from "styled-components";
import StatusBar from '../StatusBar';

const SectionPage = () => {

  let arrayTest = []

  for (let i=1; i<51; i++){
    if(i<10){
      arrayTest.push(`0${i}`)
    }else{
      arrayTest.push(`${i}`)
    }
  }

  return (
    <>
      <Container>
        <h1>Selecione o(s) assento(s)</h1>
        <Seats>
          {
          arrayTest.map( item => <Seat>{item}</Seat>)
          }
        </Seats>
        <DemonstrationSeats>
          <div>
            <Seat color={'#8DD7CF'}></Seat>
            <p>Selecionado</p>
          </div>
          <div>
            <Seat></Seat>
            <p>Disponível</p>
          </div>
          <div>
            <Seat color={'#FBE192'}></Seat>
            <p>Indisponível</p>
          </div>
        </DemonstrationSeats>
      </Container>
      <StatusBar dateDescription="Quinta-feira 15:00"/>
    </>
  )
}

const Container = styled.div`
  width: 100%;
  
  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: 'Roboto';

  h1 {
    font-size: 24px;
    margin: 40px 0;
  }
`;

const Seats = styled.div`
  max-width: 375px;
  height: 180px;
  display: flex;
  justify-content: center;

  padding: 5px;
  flex-wrap: wrap;

  @media (max-width: 319px){
    height: auto;
  }

`;

const Seat = styled.div`
  width: 26px;
  height: 26px;

  border-radius: 50%;
  margin: 5px;
  border: 1px solid #808F9D;
  display: flex;

  justify-content: center;
  align-items: center;
  background-color: ${props => props.color ? props.color : '#C3CFD9'};

  font-size: 12px;
`;

const DemonstrationSeats = styled.div`
  width: 320px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 10px;

  div{
    display: flex;
    flex-direction: column;
    align-items: center;

  }

  p{
    font-size: 13px;
    color: #4E5A65;
  }

  @media (max-width: 319px){
    width: 80%;
  }

`;

export default SectionPage;