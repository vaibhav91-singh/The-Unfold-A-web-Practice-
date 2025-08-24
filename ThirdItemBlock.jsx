import actressimg from './myimage/theunfoldbanner2.png';
import styles from './ThirdItemBlock.module.css';



function ThirdItemBlock({ item }) {
    return (
        <>
            <div className={styles.thirdblock}>

                <img src={actressimg} alt="Actress" className={styles.image} />

            </div>
        </>
    );
}
export default ThirdItemBlock;