import { Route, Routes } from 'react-router-dom';



import DemoPage from 'pages/DemoPage';


export default () => (
  <Routes>
    <Route path='/' element={ <DemoPage />} />
  </Routes>
);