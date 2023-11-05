import axios from "axios";
import { useEffect , useState} from "react";
import { useParams , Link} from "react-router-dom";
import styles from "../components/css/CreateEditStyle.module.css"

const DetailReservation = () => {
    const {id} = useParams();
    const [reservationDetails, setReservationDetails] = useState({});

    useEffect(()=> {
        axios.get(`http://localhost:8000/api/reservation/${id}`)
        .then(res => {
            console.log(res)
            setReservationDetails(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[id])

    return (
        <div className={styles.backgroundD}>
            <div className={styles.container}>
                <h1>Details for {reservationDetails.name}s party</h1>
                <Link className={styles.homelink} to="/">Home</Link>
                <ul>
                    <li className={styles.labelstyle2}>Name: {reservationDetails.name}</li>
                    <li className={styles.labelstyle2}># of Party: {reservationDetails.party}</li>
                    <li className={styles.labelstyle2}>Reservation Time: {reservationDetails.time}</li>
                    {reservationDetails.notes 
                    ? <li className={styles.labelstyle2}>Notes: {reservationDetails.notes}</li>
                    : null}
                </ul>
            </div>
        </div>
    )
}
export default DetailReservation;