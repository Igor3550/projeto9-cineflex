import styled from "styled-components";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const SuccesPage = ({ requestInfo, setRouterPage }) => {
  const navigate = useNavigate();

  useEffect(() => {
    setRouterPage('succes')
  }, [])

  const editedCPF = `${requestInfo.cpf.slice(0, 3)}.${requestInfo.cpf.slice(3, 6)}.${requestInfo.cpf.slice(6, 9)}-${requestInfo.cpf.slice(9)}`
  return (
    <Container>
      <Title>Pedido feito com sucesso!</Title>
      <InfoRequest>
        <div>
          <h1>Filme e sessão</h1>
          <p>{requestInfo.movieInfo.title}</p>
          <p>{requestInfo.dateInfo.date} {requestInfo.section}</p>
        </div>
        <div>
          <h1>Ingressos</h1>
          {requestInfo.selectedSeats.map(item => <p key={item.id}>Assento {item.name}</p>)}
        </div>
        <div>
          <h1>Comprador</h1>
          <p>Nome: {requestInfo.name}</p>
          <p>CPF: {editedCPF}</p>
        </div>
      </InfoRequest>
      <BackButton onClick={() => navigate('/')}>Voltar para Home</BackButton>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto';
  align-items: center;
`;

const Title = styled.div`
  width: 40%;
  margin: 40px 0;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #247A6B;
`;

const InfoRequest = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  flex-direction: column;

  div{
    margin: 20px;

    h1{
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p{
      font-size: 22px;
    }
  }
`;

const BackButton = styled.button`
  width: 225px;
  height: 40px;
  background-color: #E8833A;
  margin-top: 40px;

  font-size: 18px;
  color: white;
  text-align: center;

  border: 0;
  border-radius: 3px;
`;

export default SuccesPage;