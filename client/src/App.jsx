import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import DisplayWaitlist from './components/DisplayWaitlist'
import WaitlistForm from './components/WaitlistForm'
import EditWaitlist from './components/EditWaitlist'
import EditReservation from './components/EditReservation'
import ReservationForm from './components/ReservationForm'
import DetailReservation from './components/DetailReservation'

function App() {


  return (
    <div>
      <BrowserRouter>

        <Routes>

          <Route path="/" element={<DisplayWaitlist/>}/>
          <Route path="/create/waitlist" element={<WaitlistForm/>}/>
          <Route path="/create/reservation" element={<ReservationForm/>}/>
          <Route path="/details/reservation/:id" element={<DetailReservation/>}/>
          <Route path="/edit/waitlist/:id" element={<EditWaitlist/>}/>
          <Route path="/edit/reservation/:id" element={<EditReservation/>}/>

        </Routes>
      
      </BrowserRouter>
    </div>

  )
}

export default App
