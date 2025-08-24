import './App.css'
import './index.css';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homebar from './HomeBar';
import MoreProduct from './MoreProduct';
import Login from './Account/Login';
import AccountPage from './Account/AccountPage'
import {Suspense} from 'react'; //Loading.. design
import { Divide } from 'lucide-react';
function App() {
return (
    <BrowserRouter>
      <>
        
        <nav>
          <Link to="/"><button>Home</button></Link>
          <Link to ="/Moreproduct"><button>More</button></Link>
          <Link to="/Login"><button>Login</button></Link>
          <Link to="/My_Account"><button>MY Account</button></Link>


        </nav>
        <Routes>
          <Route path="/" element={<Homebar/>} />
          <Route path="/Moreproduct" element={<MoreProduct/>} />
          <Route path="/Login" element = {<Login/>}></Route>
                    <Route path="/My_Account" element = {<AccountPage/>}></Route>



          
        </Routes>
        
      </>
    </BrowserRouter>
  );
}

export default App;
