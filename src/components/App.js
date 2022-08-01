import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from './Header';
import Home from './Home';
import SelectedFilmPage from "./SelectedFilmPage";
import SectionPage from "./SectionPage"
import SuccesPage from "./SuccesPage"

import GlobalStyle from './styles/GlobalStyle'

function App() {

  const [requestInfo, setRequestInfo] = useState({})
  const [routerPage, setRouterPage] = useState('')

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header routerPage={routerPage}/>
        <Routes>
          <Route path="/" element={<Home setRouterPage={setRouterPage}/>} />
          <Route path="/filme/:filmId" element={<SelectedFilmPage setRouterPage={setRouterPage} />} />
          <Route 
            path="/sessao/:sectionId" 
            element={
              <SectionPage 
                requestInfo={requestInfo} 
                setRequestInfo={setRequestInfo} 
                setRouterPage={setRouterPage}
               />
            } 
          />
          <Route 
            path="/sucesso" 
            element={
              <SuccesPage 
                requestInfo={requestInfo} 
                setRequestInfo={setRequestInfo} 
                setRouterPage={setRouterPage} 
              />
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
