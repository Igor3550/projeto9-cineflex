import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Home = () => {

  const [listFilms, setListFilms] = useState([])

  useEffect(() => {
    const promisse = axios.get('https://mock-api.driven.com.br/api/v7/cineflex/movies')
    promisse.catch((error) => {
      console.log("Ouve um erro:", error)
    })
    promisse.then((res) => {
      setListFilms(res.data)
    })
  }, [])

  return (
    <>
      <Container>
        <p>Selecione o filme</p>
        <Films>
          {listFilms.map(film => <Link to={`/filme/${film.id}`} key={film.id}><div><img src={film.posterURL} /></div></Link>)}
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

    display: flex;
    align-items: center;
    justify-content: center;

    img{
      width: 129px;
      height: 193px;

      object-fit: cover;
    }
  }
`;

export default Home;