import React, {useState} from 'react';
import Header from './components/Header';
import SkillsList from './components/SkillsList';
import HireMeBtn from './components/HireMeBtn';
import Portfolio from './components/Portfolio';

function App() {
  return (
    <>
      <Header />
      <SkillsList />
      <HireMeBtn />
      <Portfolio />
    </>
  )
}

export default App;
