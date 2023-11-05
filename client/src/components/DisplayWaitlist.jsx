import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from './css/MainStyle.module.css'

const DisplayWaitlist = () => {

    const [allWaitlists, setAllWaitlists] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/waitlist")
        .then((res) => {
            setAllWaitlists(res.data)
        })
        .catch((err)=> {
            console.log(err.response)
        })
    }, []);

    const handleDelete = (id) => {
        axios.delete(`http://localhost:8000/api/waitlist/${id}`)
        .then(res => {
            console.log(res)
            const filteredWaitlist = allWaitlists.filter(waitlist=> {
                return waitlist._id !== id;
            });
            setAllWaitlists(filteredWaitlist)
        })
        .catch(err => {
            console.log(err)
        })
    };

    const [allReservations, setAllReservations] = useState([]);
    useEffect(()=> {
        axios.get("http://localhost:8000/api/reservation")
        .then(res => {
            setAllReservations(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[]);
    const handleReserverationDelete = (id) => {
        axios.delete(`http://localhost:8000/api/reservation/${id}`)
        .then(res => {
            console.log(res)
            const filteredReservation = allReservations.filter(reservation => {
                return reservation._id != id;
            })
            setAllReservations(filteredReservation)
        })
        .catch()
    }


    return (
        <div className={styles.background}>
            <h1>Wait Reserve Application</h1>
                <div className={styles.table2}>
                    <h2>Waitlist Table</h2>
                    <table className={styles.tablestyle}>
                        <thead>
                            <tr>
                                <th className={styles.thstyle1}>~Name~ </th>
                                <th className={styles.thstyle2}>~Party~</th>
                                <th className={styles.thstyle3}>~Time Queued~ </th>
                                <th className={styles.thstyle4}>~Actions~ </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allWaitlists.map((waitlist) => {
                                return (
                                    <tr key={waitlist._id}>
                                        <input type="checkbox"></input>
                                            <span>
                                                <td>{waitlist.name}</td>
                                            </span>
                                                <td>{waitlist.party}</td>
                                                <td>{waitlist.time}</td>
                                                <td>
                                                <Link to={`/edit/waitlist/${waitlist._id}`} >
                                                    <button className= {styles.editbtn}>Edit</button>
                                                </Link>
                                                <button className={styles.deletebtn} onClick ={() => handleDelete(waitlist._id)}>Delete</button>
                                                </td>
                                            
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>
                        <button className={styles.createbtn}>
                            <Link className={styles.createbtnstyle} to="/create/waitlist">Add a party to Waitlists</Link>
                        </button>
                </div>
                {/* --------------------------Reservation List------------------------- */}
                <div className={styles.table2}>
                    <h2>Reservation Table</h2>
                    <table className={styles.tablestyle}>
                        <thead>
                            <tr>
                                <th className={styles.thstyle1}>Name </th>
                                <th className={styles.thstyle2}>Party </th>
                                <th className={styles.thstyle3}>Reservation Time </th>
                                <th className={styles.thstyle4}>Actions </th>
                            </tr>
                        </thead>
                        <tbody>
                            {allReservations.map((reservation) => {
                                    return (
                                        
                                        <tr key={reservation._id}>
                                            <input type="checkbox"></input>
                                                <span><td>{reservation.name}</td></span>
                                            <td>{reservation.party}</td>
                                            <td>{reservation.time}</td>
                                            <td>
                                                <Link to={`/edit/reservation/${reservation._id}`}>
                                                    <button className= {styles.editbtn}>Edit</button>
                                                </Link>
                                                <Link to={`/details/reservation/${reservation._id}`}>
                                                    <button className= {styles.detailbtn}>Details</button>
                                                </Link>
                                                <button className={styles.deletebtn} onClick ={() => handleReserverationDelete(reservation._id)}>Delete</button>
                                                
                                            </td>
                                        </tr>
                                    )
                                })}
                        </tbody>
                    </table>
                        <button className={styles.createbtn}>
                            <Link className={styles.createbtnstyle} to="/create/reservation">Add a party to Reservations</Link>
                        </button>
                </div>
        </div>
    )
}
export default DisplayWaitlist;