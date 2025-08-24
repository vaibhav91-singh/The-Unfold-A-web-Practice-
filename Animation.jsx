import React, { useEffect, useRef } from 'react';
import '@splidejs/splide/dist/css/splide.min.css';
import Splide from '@splidejs/splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import th from './th.jpg';
import th2 from './th2.jpg';
import th3 from './th3.jpg';
import th4 from './th4.jpg';
import styles from './Animation.module.css';

function Animation() {
    const splideRef = useRef(null);

    useEffect(() => {
        const splide = new Splide(splideRef.current, {
            type: 'loop',
            drag: 'free',
            focus: 'center',
            perPage: 3,
            autoScroll: {
                speed: 1,
            },
            // Corrected: Pass the AutoScroll extension directly here
        });

        // Corrected: Mount Splide with the extensions
        splide.mount({ AutoScroll });

        return () => splide.destroy();
    }, []);

    return (
        <>

            <div className={styles.mynewanimation}>

                <div className="splide" ref={splideRef}>
                    <div className={`splide__track ${styles.outerbody}`}>
                        <ul className="splide__list">
                            <li className="splide__slide"><img src={th} alt="" /></li>
                            <li className="splide__slide"><img src={th2} alt="" /></li>
                            <li className="splide__slide"><img src={th3} alt="" /></li>
                            <li className="splide__slide"><img src={th4} alt="" /></li>
                            <li className="splide__slide"><img src={th} alt="" /></li>
                            <li className="splide__slide"><img src={th2} alt="" /></li>
                            <li className="splide__slide"><img src={th3} alt="" /></li>
                            <li className="splide__slide"><img src={th4} alt="" /></li>
                        </ul>
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
            
        </>
    );
}

export default Animation;