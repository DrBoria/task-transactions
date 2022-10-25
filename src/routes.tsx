import { Route, Routes } from 'react-router-dom';



import MainPage from 'pages/MainPage';


export default () => (
  <Routes>
    <Route path='/' element={ <MainPage />} />
  </Routes>
);