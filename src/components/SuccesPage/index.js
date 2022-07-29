import styled from "styled-components";

const SuccesPage = () => {
  return (
    <Container>
      <Title>Pedido feito com sucesso!</Title>
      <InfoRequest>
        <div>
          <h1>Filme e sessão</h1>
          <p>Enola Holmes</p>
          <p>24/06/2022</p>
        </div>
        <div>
          <h1>Ingressos</h1>
          <p>Assento 15</p>
          <p>Assento 16</p>
        </div>
        <div>
          <h1>Comprador</h1>
          <p>Nome: Joao</p>
          <p>CPF: 123.456.789-12</p>
        </div>
      </InfoRequest>
      <BackButton >Voltar para Home</BackButton>
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