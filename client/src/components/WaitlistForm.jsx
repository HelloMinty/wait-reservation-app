import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../components/css/CreateEditStyle.module.css"



const WaitlistForm = () => {
    const [name, setName] = useState("")
    const [party, setParty] = useState("")
    const [time, setTime] = useState("")
    const [nameError, setNameError] = useState("");
    const [partyError, setPartyError] = useState("");
    const [timeError, setTimeError] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:8000/api/waitlist", {name, party, time})
        .then(res => {
            console.log(res)
            navigate("/")
            
        })
        .catch(err => {
            console.log(err.response.data.errors)
            setNameError(err.response.data.errors.name.message)
            setPartyError(err.response.data.errors.party.message)
            setTimeError(err.response.data.errors.time.message)
        
        })
    } 

    return (
        <div className={styles.background}>
            <div className={styles.container}>
                <h1>Add a Party to the Waitlist</h1>
                <Link className={styles.homelink} to="/">Home</Link>
                <form onSubmit={handleSubmit}>
                    <div>
                        {nameError ? <p className={styles.validationStyle}>{nameError}</p>: null}
                        <label className={styles.labeltext}>`Name : </label>
                            <input 
                                className={styles.labelstyle}
                                type="text"  
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                />
                    </div>
                    <div>
                    {partyError ? <p className={styles.validationStyle}>{partyError}</p>: null}
                        <label className={styles.labeltext}>Party#:</label>
                            <input 
                                className={styles.labelstyle}
                                type="text"  
                                value={party}
                                onChange={(e) => setParty(e.target.value)}
                                />
                    </div>
                    <div>
                    {timeError ? <p className={styles.validationStyle}>{timeError}</p>: null}
                        <label className={styles.labeltext}>`Time : </label>
                            <input 
                                className={styles.labelstyle}
                                type="text"  
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                />
                    </div>
                    <button className={styles.submitbtn}>Add</button>
                </form>
            </div>
        </div>
    )
}
export default WaitlistForm;