import React from 'react';
import Router from "./Router";
import {Header} from "./components/Header";
import "./assets/styles/vendors/style.css"
import Loading from './components/Uikit/Loading';

const App = () => {
  return (
    <>
      <Loading>
        <Header />
        <main >
          <Router/>
        </main>
      </Loading>
    </>
  )
}

export default App;
