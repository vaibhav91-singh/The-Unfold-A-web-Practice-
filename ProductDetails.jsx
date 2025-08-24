// let product = [{ name: "Product Name 5", price: 25 }, { name: "Product Name 6", price: 30 }, { name: "Product Name 7", price: 35 }, { name: "Product Name 8", price: 40 }];
import styles from './ProductDetails.module.css';
import FirstLogic from './Components/FirstLogic';

// For Adding the Product

function ProductDetails({ item }) {
     function Add() {

        console.log("Item  is Added , Sucessfull");
        let item =0 ;
        
      item=console.log();
        
    }
// For Buy Now the Product
function Buynow(params) {
    console.log("Make payment");

}
    return (
        <div className={styles.productDetails}>
            <h2 className={styles.name}>{item.name}</h2>
            <p className={styles.price}>Price: ${item.price}</p>
            <p className={styles.description}>${item.description}</p>
            <button className={styles.addtocart}onClick={Add}>Add to Cart</button>
            <button className={styles.buynow} onClick={Buynow}>Buy Now</button>
        </div>
    );
}
export default ProductDetails;