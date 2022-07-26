import Header from '../Header';

import './style.css';

const Home = () => {
  return (
    <>
      <Header />
      <div className='home-page'>
        <p>Selecione o filme</p>
        <div className="films">
          <div className="film"></div>
          <div className="film"></div>
          <div className="film"></div>
          <div className="film"></div>
        </div>
      </div>
    </>
  )
}

export default Home;