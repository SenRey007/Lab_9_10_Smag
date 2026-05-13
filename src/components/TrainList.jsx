import { useState } from 'react'
import TrainCard from './TrainCard'
import styles from './TrainList.module.css'

export default function TrainList({ trains }) {
    const [query, setQuery] = useState('')

    const filtered = trains.filter(t => {
        const q = query.toLowerCase()
        return (
            t.number.toLowerCase().includes(q) ||
            t.from.toLowerCase().includes(q) ||
            t.to.toLowerCase().includes(q)
        )
    })

    return (
        <div>
            <div className={styles.searchWrap}>
                <span className={styles.searchIcon}>🔍</span>
                <input
                    className={styles.search}
                    type="text"
                    placeholder="Пошук за маршрутом або номером потяга..."
                    value={query}
                    onChange={e => setQuery(e.target.value)}
                />
                {query && (
                    <button className={styles.clear} onClick={() => setQuery('')}>✕</button>
                )}
            </div>

            <div className={styles.resultsBar}>
        <span className={styles.count}>
          Знайдено: <span className={styles.countNum}>{filtered.length}</span> рейсів
        </span>
            </div>

            {filtered.length === 0 ? (
                <div className={styles.empty}>
                    <div className={styles.emptyIcon}>🚉</div>
                    <p>Рейси не знайдено</p>
                    <small>Спробуйте інший запит</small>
                </div>
            ) : (
                <div className={styles.list}>
                    {filtered.map(train => (
                        <TrainCard key={train.id} train={train} />
                    ))}
                </div>
            )}
        </div>
    )
}