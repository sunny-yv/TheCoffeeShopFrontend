import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrderStaff from "./pages/OrderStaff";
import HomeStaff from "./pages/HomeStaff";
import BookingStaff from "./pages/BookingStaff";
import Location from "./pages/Location";
import HomePage from "./pages/HomePage";
import Booking from "./pages/Booking";
import IntroductionPage from "./pages/IntroductionPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/orderstaff" element={<OrderStaff />} />
        <Route path="/homestaff" element={<HomeStaff />} />
        <Route path="/location" element={<Location />} />
        <Route path="/bookingstaff" element={<BookingStaff />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/introductionpage" element={<IntroductionPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
