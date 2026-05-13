import styles from './WagonSelector.module.css'

export default function WagonSelector({ wagons, selectedWagonId, onSelect }) {
    return (
        <div className={styles.wrap}>
            <h3 className={styles.title}>Оберіть вагон</h3>
            <div className={styles.list}>
                {wagons.map(wagon => {
                    const free = wagon.totalSeats - wagon.bookedSeats.length
                    const isSelected = wagon.id === selectedWagonId
                    return (
                        <button
                            key={wagon.id}
                            className={`${styles.wagon} ${isSelected ? styles.selected : ''}`}
                            onClick={() => onSelect(wagon.id)}
                        >
                            <span className={styles.num}>Вагон {wagon.number}</span>
                            <span className={styles.type}>{wagon.type}</span>
                            <span className={styles.free}>{free} місць</span>
                        </button>
                    )
                })}
            </div>
        </div>
    )
}