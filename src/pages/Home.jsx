import { useState, useEffect } from 'react'
import { getTrains } from '../services/trainApi'
import TrainList from '../components/TrainList'
import styles from './Home.module.css'

export default function Home() {
    const [trains, setTrains] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        getTrains()
            .then(setTrains)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false))
    }, [])

    return (
        <div>
            <div className={styles.hero}>
                <div className={styles.heroLabel}>Розклад руху</div>
                <h1 className={styles.title}>
                    Знайдіть <span className={styles.titleAccent}>свій рейс</span>
                </h1>
                <p className={styles.subtitle}>Оберіть зручний потяг та забронюйте місця онлайн</p>
            </div>
            {loading && <div className={styles.state}>// завантаження рейсів...</div>}
            {error   && <div className={styles.error}>✕ {error} — переконайтесь що json-server запущений на порту 3001</div>}
            {!loading && !error && <TrainList trains={trains} />}
        </div>
    )
}