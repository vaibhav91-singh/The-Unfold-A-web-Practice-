import styles from './BannerOne.module.css';
import logo from './logo.jpg';
function BannerOne() {
    return (
        <>
            <div className={styles.BannerOne}>
                {/* offer */}
                <div className={styles.offer}>
                    <h5>Get 20% off on your first order</h5>
                
                </div>
                
                {/* Name of the company */}
                <div className={styles.companyName}>


                    <img src={logo} alt="Skin Care Logo"  />
                    <h1>The Unfold</h1>
                    {/* search button  */}
                    <div className={styles.enterproduct}>
                        <input type="text" name="product" id="productsearch" list="itemlist" placeholder='Enter the product name.....' />
                        <datalist id="itemlist">
                            <option value="Syrem" />
                            <option value="Makeup-kit" />
                            <option value="Moisturizer" />
                            <option value="Facewash" />
                            <option value="Lipstick" />
                            <option value="Sunscreen" />
                            
                        </datalist>
                    </div>
                </div>
            </div>
            <div className={styles.Bannertwo}>
            </div>
        </>
    );
}
export default BannerOne;