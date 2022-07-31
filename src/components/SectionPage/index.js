import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";

import StatusBar from '../StatusBar';

const SectionPage = ({ setRequestInfo }) => {
  const navigate = useNavigate();

  const [sectionInfo, setSectionInfo] = useState({});
  const [movieInfo, setMovieInfo] = useState({});
  const [dateInfo, setDateInfo] = useState({});
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [clientName, seClientName] = useState('')
  const [clientCPF, seClientCPF] = useState('')

  const { sectionId } = useParams();

  useEffect(() => {
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${sectionId}/seats`);
    promisse.catch((error) => {
      console.log('Ouve um erro', error)
    })
    promisse.then((res) => {
      setSectionInfo(res.data)
      setMovieInfo(res.data.movie)
      setDateInfo(res.data.day)
    })
  }, [])

  function handleSeatClick(clickedSeat) {
    if (clickedSeat.isAvailable) {
      let seatsList = [...selectedSeats]
      let isInList = false;
      if (seatsList.length === 0) {
        seatsList.push(clickedSeat)
      } else {
        seatsList.map((item, index) => {
          if (item.id === clickedSeat.id) {
            seatsList.splice(index, 1)
            isInList = true;
          }
        })
        if(!isInList){
          seatsList.push(clickedSeat)
        }
      }
      console.log(seatsList);
      setSelectedSeats(seatsList)
    }else{
      alert('Esse assento não está disponível!')
    }
  }

  function handleSubmit (e) {
    e.preventDefault();

    const ids = selectedSeats.map(item => item.id);
    const name = clientName;
    const cpf = clientCPF;

    if(ids.length === 0){
      alert('Por favor, escolha os assentos!')
    }else if(cpf.length > 11 || cpf.length < 11){
      alert('Por favor, digite seu CPF corretamente sem pontos ou caracteres especiais')
    }else{
      const body = {
        ids,
        name,
        cpf
      }
      
      const promisse = axios.post('https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many', body);
      promisse.catch(error => {
        console.log('Ouve um:', error);
        alert('Ouve um erro na requisição!');
        navigate('/');
      })
      promisse.then(res => {
        console.log(res.data);
        setRequestInfo({
          section: sectionInfo.name,
          selectedSeats, 
          dateInfo,
          movieInfo,
          name,
          cpf
        })
        navigate('/sucesso')
      })
    }

  }

  const SeatButton = ({ seatInfo }) => {

    let color = seatInfo.isAvailable ? '' : '#FBE192';
    let selected = false;
    selectedSeats.map(seat => {
      if (seat.id === seatInfo.id) {
        selected = true;
      }
    })

    return (
      <Seat color={color} selected={selected} onClick={() => handleSeatClick(seatInfo)} >{seatInfo.name}</Seat>
    )
  }

  return (
    <>
      <Container>
        <h1>Selecione o(s) assento(s)</h1>
        <Seats>
          {sectionInfo.seats !== undefined ?
            sectionInfo.seats.map((item) => <SeatButton key={item.id} seatInfo={item} />)
            : <h1>Carregando assentos...</h1>
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

        <FormArea>
          <form onSubmit={handleSubmit}>
            <label>Nome do comprador:</label>
            <input 
              type='text' 
              placeholder="Digite seu nome..." 
              value={clientName}
              onChange={(e) => seClientName(e.target.value)}
              required
            />
            <label>CPF do comprador:</label>
            <input 
              type='number' 
              placeholder="Digite seu CPF..." 
              value={clientCPF}
              onChange={(e) => seClientCPF(e.target.value)}
              required
            />
            <button type="submit">Reservar assento(s)</button>
          </form>
        </FormArea>

      </Container>
      {sectionInfo !== undefined ?
        <StatusBar
          title={movieInfo.title}
          imageSrc={movieInfo.posterURL}
          dateDescription={`${dateInfo.weekday} ${sectionInfo.name}`} />
        : <StatusBar></StatusBar>
      }
    </>
  )
}

const FormArea = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;

  form {
    display: flex;
    flex-direction: column;
  }
  label {
    margin: 5px 0;
  }

  input {
    height: 50px;
    padding: 10px;

    font-size: 18px;
    border: 1px solid #D4D4D4;
    margin-bottom: 10px;

    &::placeholder {
      font-style: italic;
    }
  }

  button {
    width: 225px;
    height: 40px;
    background-color: #E8833A;

    text-align: center;
    margin: auto;
    margin-top: 30px;

    border: 0;
    border-radius: 3px;
    font-size: 18px;
    color: white;
  }
`;

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
  background-color: ${props => props.selected ? '#8DD7CF' : props.color};

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