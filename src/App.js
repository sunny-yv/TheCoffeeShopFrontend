
import Login from './pages/Login'
import SignUp from './pages/SignUp'
import OrderStaff from './pages/OrderStaff'

import { BrowserRouter, Route, Routes } from 'react-router-dom';
function App() {
    return ( 
       <BrowserRouter>
       <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<SignUp/>}/>
        <Route path='/orderstaff' element={<OrderStaff/>}/>
       </Routes>
       </BrowserRouter>
    );
}

export default App;