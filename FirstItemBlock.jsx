import styles from './FirstItemBlock.module.css';
import th from './th.jpg';
import th2 from './th2.jpg';
import th3 from './th3.jpg';
import th4 from './th4.jpg';
import th5 from './th5.jpg';
import ProductDetails from './ProductDetails';

let images = [th, th2, th3, th4];
// second block of images
let images2 = [th5, th3, th2, th];

let product = [
  { name: "Product Name 5", price: 25, description: "This is a great product 5." },
  { name: "Product Name 6", price: 30, description: "This is a great product 6." },
  { name: "Product Name 7", price: 35, description: "This is a great product 7." },
  { name: "Product Name 8", price: 40, description: "This is a great product 8." }
];
let product2 = [
  { name: "Product Name 1", price: 20, description: "This is a great product 1." },
  { name: "Product Name 2", price: 15, description: "This is a great product 2." },
  { name: "Product Name 3", price: 10, description: "This is a great product 3." },
  { name: "Product Name 4", price: 5, description: "This is a great product 4." }
];

function FirstItemBlock() {
    return (
        <>
            {/* First block */}
            <div className={styles.parentblock}>
                <marquee behavior="" direction="row">Get 20% off on your first order</marquee>
                <div className={`${styles.itemblock} ${styles.button}`}>
                    {images.map((image, index) => (
                        
                        <div key={index} className={styles.imageWithButton}>
                            <img src={image} alt={`item-${index + 1}`} />

                            <div className="descriptionStyle">
                                <ProductDetails item={product[index]} />
                            </div>
                        </div>
                    ))}
                </div>  <div className={`${styles.itemblock} ${styles.button}`}>
                    {images.map((image, index) => (
                        <div key={index} className={styles.imageWithButton}>
                            <img src={image} alt={`item-${index + 1}`} />
                            <div className="descriptionStyle">
                                <ProductDetails item={product[index]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Second block for images2 */}
            <div className={styles.parentblock}>
                <div className={`${styles.itemblock} ${styles.button}`}>
                    {images2.map((image, index) => (
                        <div key={index} className={styles.imageWithButton}>
                            <img src={image} alt={`item2-${index + 1}`} />
                            <div className="descriptionStyle">
                                <ProductDetails item={product2[index]} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}
export default FirstItemBlock;