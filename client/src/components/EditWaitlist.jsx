import { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate , Link} from "react-router-dom";
import styles from "../components/css/CreateEditStyle.module.css"

const EditWaitlist = () => {
    const {id} = useParams();
    const [waitlistName, setWaitlistName] = useState("");
    const [waitlistParty, setWaitlistParty] = useState("");
    const [waitlistTime, setWaitlistTime] = useState("");
    const [nameError, setNameError] = useState("");
    const [partyError, setPartyError] = useState("");
    const [timeError, setTimeError] = useState("");
    const navigate = useNavigate();
    useEffect(()=> {
        axios.get(`http://localhost:8000/api/waitlist/${id}`)
        .then(res =>{
            console.log(res.data)
            setWaitlistName(res.data.name)
            setWaitlistParty(res.data.party)
            setWaitlistTime(res.data.time)
        })
        .catch(err => {
            console.log(err)
        })
    }, [id])

    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/waitlist/${id}`, {name: waitlistName, party: waitlistParty, time: waitlistTime})
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
        <div className={styles.backgroundE}>
            <div className={styles.container}>
                <h1>Edit {waitlistName}s Party</h1>
                <Link className={styles.homelink} to="/">Home</Link>
                <form onSubmit={submitHandler}>
                    <div>
                        {nameError ? <p className={styles.validationStyle}>{nameError}</p>: null}  
                        <label className={styles.labeltext}>`Name : </label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="name"
                            value={waitlistName}
                            onChange ={(e)=>setWaitlistName(e.target.value)}
                            /> 
                    </div>
                    <div>
                        {partyError ? <p className={styles.validationStyle}>{partyError}</p>: null}
                        <label className={styles.labeltext}>#Party:</label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="party"
                            value={waitlistParty}
                            onChange ={(e)=>setWaitlistParty(e.target.value)}
                            /> 
                    </div>
                    <div>
                        {timeError ? <p className={styles.validationStyle}>{timeError}</p>: null}
                        <label className={styles.labeltext}>`Time : </label>
                        <input 
                            className={styles.labelstyle}
                            type="text"
                            id="time"
                            value={waitlistTime}
                            onChange ={(e)=>setWaitlistTime(e.target.value)}
                            /> 
                    </div>
                    <button className={styles.submitbtn}>Edit</button>
                </form>
            </div>
        </div>
    )
}
export default EditWaitlist;