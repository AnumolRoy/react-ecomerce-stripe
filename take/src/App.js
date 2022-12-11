
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComponent from './components/Navbar';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Cancel from './pages/Cancel';
import Store from './pages/Store';
import Success from './pages/Success';
import CartProvider from './CartContext';
// localhost:3000 -> Home
// localhost:3000/success -> Success

function App() {
  return (
    <CartProvider>
      
        <Container>
          <NavbarComponent></NavbarComponent>
          <BrowserRouter>
            <Routes>
              <Route index element={<Store />} />
              <Route path="success" element={<Success />} />
              <Route path="cancel" element={<Cancel />} />
            </Routes>
          </BrowserRouter>
        </Container>
     
    </CartProvider>
  );
}

export default App;





// import './App.css';
// import NavbarComponet from './components/Navbar';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import {Container} from "react-bootstrap";
// import {BrowserRouter,Routes,Route} from "react-router-dom";
// import Cancel from './pages/Cancel';
// import Success from './pages/Success';
// import Store from './pages/Store';



// //localhost:300->home
// //localhost:300/success->success

// function App() {
//   return (
//   <Container>
//      <NavbarComponet>
//       <BrowserRouter>
//       <Routes>
//         <Route index element={<Store/>} />
//         <Route path="success" element={<Success/>}/>
//         <Route path="cancel" element={<Cancel/>}/>

//       </Routes>
//       </BrowserRouter>
  
//      </NavbarComponet>
//   </Container>
//   );
// }

// export default App;
