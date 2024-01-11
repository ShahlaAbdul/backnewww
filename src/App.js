import './App.css';
import MainLayout from './Layout/MainLayout';
import AddPage from './Pages/AddPage/AddPage';
import Home from './Pages/Homepage/Home';
import { BrowserRouter, Route, Routes  } from "react-router-dom";

function App() {
  return (
    <BrowserRouter >
    <Routes>
      <Route element={<MainLayout></MainLayout>}>
      <Route path="/" element={<Home></Home>} /> 
      <Route path='/add' element={<AddPage></AddPage>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
