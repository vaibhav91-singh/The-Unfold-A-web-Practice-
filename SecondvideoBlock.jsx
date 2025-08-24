import React from 'react'; // It's good practice to import React
import styles from './SecondvideoBlock.module.css';
import video1 from './video1.mp4';
import video2 from './video2.mp4';
import video3 from './video3.mp4';
import video4 from './video4.mp4';

// Define the video array outside the component if it's static
// This prevents it from being redefined on every render.
const videos = [video1, video2, video3, video4]; // Renamed 'video' to 'videos' for clarity

function SecondvideoBlock() {
    return (
        <div className={styles.video}> {/* Main container for videos */}
            {videos.map((vidSrc, index) => (
                <div key={index} className={styles.videoItem}> {/* Corrected: styles.videoItem */}
                    <video width="100%" height="auto"autoPlay muted loop playsInline>
                        <source src={vidSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    {/* Optional: Add a title or description for accessibility/context */}
                    {/* <p>Video {index + 1}</p> */}
                </div>
            ))}
        </div>
    );
}

export default SecondvideoBlock;