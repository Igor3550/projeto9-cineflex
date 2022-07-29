import styled from "styled-components";

const StatusBar = ({ dateDescription }) => {
  return (
    <Container>
      <FilmWallPaper>

      </FilmWallPaper>
      <div>
        <p>Teste titulo</p>
        {dateDescription ? <p>{dateDescription}</p> : ''}
        
      </div>
    </Container>
  )
}

const Container = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;

  background-color: #DFE6ED;
  position: fixed;
  bottom: 0;

  font-family: 'Roboto';
  font-size: 26px;
`;

const FilmWallPaper = styled.div`
  width: 65px;
  height: 90px;

  background-color: white;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.2);
  border-radius: 2px;

  margin: 0 20px;
`;

export default StatusBar;