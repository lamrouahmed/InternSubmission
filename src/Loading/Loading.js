import styles from "./Loading.module.scss"

function Loading() {
    return <div className={styles.loadingContainer}>
        <div className={styles.loadingImg}>
            <img src="./shop.png" />
        </div>
    </div>
}
export default Loading