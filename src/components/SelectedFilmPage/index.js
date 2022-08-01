import { useState, useEffect } from "react";
import styled from "styled-components";
import StatusBar from "../StatusBar";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

const SelectedFilmPage = ({ setRouterPage }) => {

  const [filmInfo, setFilmInfo] = useState({})

  const { filmId } = useParams();

  useEffect(() => {
    setRouterPage('film')
    const promisse = axios.get(`https://mock-api.driven.com.br/api/v7/cineflex/movies/${filmId}/showtimes`);
    promisse.catch((error) => {
      console.log('Ouve um erro:', error);
    })
    promisse.then((res) => {
      setFilmInfo(res.data);
    })
  }, [])

  const Section = ({ weekDay, date, showTimes }) => {
    return (
      <div>
        <p>{weekDay} {date}</p>
       {showTimes.map(time => <Link key={time.id} to={`/sessao/${time.id}`}><button>{time.name}</button></Link>)}
      </div>
    )
  }

  return (
    <>
    <Container>
      <h1>Selecione o horário</h1>

      {filmInfo.days === undefined ? <h1>Carregando...</h1> : filmInfo.days.map(day => {
        return <Section key={day.id} weekDay={day.weekday} date={day.date} showTimes={day.showtimes} />
      })}

    </Container>
    <StatusBar title={filmInfo.title} imageSrc={filmInfo.posterURL}/>
    </>
  )
}

const Container = styled.div`
  height: 80vh;
  display: flex;
  flex-direction: column;
  
  font-family: 'Roboto';
  overflow-y: scroll;

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