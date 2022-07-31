import styled from "styled-components";

const StatusBar = ({ title=undefined, imageSrc, dateDescription }) => {
  return (
    <Container>
      <FilmWallPaper>
        <img src={imageSrc} alt=""/>
      </FilmWallPaper>
      <div>
        {title === undefined ? 'Carregando...' :
        <>
          <p>{title}</p>
          <p>{dateDescription}</p>
        </>
        }
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
  color: #293845;
  font-size: 26px;

  div > p{
    margin-bottom: 5px;
  }
`;

const FilmWallPaper = styled.div`
  width: 66px;
  height: 87px;

  background-color: white;
  box-shadow: 1px 1px 2px 2px rgba(0,0,0,0.2);
  border-radius: 2px;

  margin: 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 48px;
    height: 72px;

    object-fit: cover;
  }
`;

export default StatusBar;