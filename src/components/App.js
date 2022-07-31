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

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filme/:filmId" element={<SelectedFilmPage />} />
          <Route path="/sessao/:sectionId" element={<SectionPage requestInfo={requestInfo} setRequestInfo={setRequestInfo} />} />
          <Route path="/sucesso" element={<SuccesPage requestInfo={requestInfo} setRequestInfo={setRequestInfo}/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
