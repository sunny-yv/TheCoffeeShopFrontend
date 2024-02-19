import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import OrderStaff from "./pages/OrderStaff";
import HomeStaff from "./pages/HomeStaff";
import BookingStaff from "./pages/BookingStaff";
import IntroLocation from "./pages/IntroLocation";
import BookingNow from "./pages/BookingNow";
import HomePage from "./pages/HomePage";
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
        <Route path="/bookingstaff" element={<BookingStaff />} />
        <Route path="/introlocation" element={<IntroLocation />} />
        <Route path="/bookingnow" element={<BookingNow />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
