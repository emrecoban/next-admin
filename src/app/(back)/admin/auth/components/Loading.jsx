import styles from './loading.module.css'

export default function Loading() {
    return (
        <div className="p-5 md:px-16 md:py-12 flex items-center justify-center">
            <div className={styles.loader}></div>
        </div>
    )
}