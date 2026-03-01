
import './App.css';
import NavBar from './NavBar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Logout from './Logout';
import Profile from './Profile';
import Footer from './Footer';
import SignUp from './SignUp';
import PrivateComponent from './PrivateComponent';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
       <NavBar/>
       <Routes>
        <Route element={PrivateComponent}/>
          <Route path="/" element={<Home />} />
          <Route path="/Add" element={<AddProduct />} />
          <Route path="/Update" element={<UpdateProduct />} />
          <Route path="/Logout" element={<Logout />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/SignUp" element={<SignUp />} />
        </Routes>
        

      </BrowserRouter>
      <Footer/>
     
      
    </div>
  );
}

export default App;
