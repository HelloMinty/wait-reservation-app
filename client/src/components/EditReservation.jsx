import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate , Link} from "react-router-dom";
import styles from "../components/css/CreateEditStyle.module.css"

const EditReservation = () => {
    const {id} = useParams();
    const [reservationName, setReservationName] = useState("");
    const [reservationParty, setReservationParty] = useState("");
    const [reservationTime, setReservationTime] = useState("");
    const [reservationNotes, setReservationNotes] = useState("");
    const [nameError, setNameError] = useState("");
    const [partyError, setPartyError] = useState("");
    const [timeError, setTimeError] = useState("");
    const navigate = useNavigate();
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/reservation/${id}`)
        .then(res =>{
            console.log(res.data)
            setReservationName(res.data.name)
            setReservationParty(res.data.party)
            setReservationTime(res.data.time)
            setReservationNotes(res.data.notes)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/reservation/${id}`, {name: reservationName, party: reservationParty, time: reservationTime, notes: reservationNotes})
        .then(res => {
            console.log(res)
            navigate("/")
        })
        .catch(err => {
            console.log(err)
            setNameError(err.response.data.errors.name.message)
            setPartyError(err.response.data.errors.party.message)
            setTimeError(err.response.data.errors.time.message)

        })
    }

    return (
        <div className={styles.backgroundER}>
            <div className={styles.container}>
                <h1>Edit {reservationName}s Party</h1>
                <Link className={styles.homelink} to="/">Home</Link>
                <form onSubmit={submitHandler}>
                    <div>
                        {nameError ? <p className={styles.validationStyle}>{nameError}</p>: null}  
                        <label className={styles.labeltext}>`Name: </label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="name"
                            value={reservationName}
                            onChange ={(e)=>setReservationName(e.target.value)}
                            /> 
                    </div>
                    <div>
                        {partyError ? <p className={styles.validationStyle}>{partyError}</p>: null}
                        <label className={styles.labeltext}>#Party:</label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="party"
                            value={reservationParty}
                            onChange ={(e)=>setReservationParty(e.target.value)}
                            /> 
                    </div>
                    <div>
                        {timeError ? <p className={styles.validationStyle}>{timeError}</p>: null}
                        <label className={styles.labeltext}>`Time : </label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="time"
                            value={reservationTime}
                            onChange ={(e)=>setReservationTime(e.target.value)}
                            /> 
                    </div>
                    <div>
                        <label className={styles.labeltext}>`Notes: </label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="notes"
                            value={reservationNotes}
                            onChange ={(e)=>setReservationNotes(e.target.value)}
                            /> 
                    </div>
                    <button className={styles.submitbtn}>Edit</button>
                </form>
            </div>
        </div>
    )
}
export default EditReservation;