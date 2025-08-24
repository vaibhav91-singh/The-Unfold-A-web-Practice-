import React from 'react';
import styles from './Footer.module.css';
import { Facebook } from 'lucide-react';
import { Twitter } from 'lucide-react';
import { Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <>
            <footer className={styles.footer}>
                <div className={styles.footerContent}>
                    <p>&copy; 2023 Skin-Care. All rights reserved.</p>
                    <p>Follow us on:</p>
                    <ul className={styles.socialLinks}>
                        <li><a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"> <Facebook /></a></li>
                        <li><a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"> <Twitter /></a></li>
                        <li><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">    <Instagram /></a></li>
                        <li><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                    </ul>
                </div>
                
            </footer>

          
        </>
    );
}

export default Footer;













