import React from 'react'
import gimini from './gimini.png'; // Assuming gimini.png is in the same directory
function SavingZone() {
    return (
        <><div style={{backgroundColor:'#006A71', padding:'1rem'}}>
            {/* this color is bg collor green  */}
        <a href="#" ><img src={gimini} alt=""  style={{ width: '100%', height: '25rem', objectFit: 'cover', borderRadius: '2rem',padding:'1rem',backgroundColor:'white'}} /></a>
        </div>
        <div className="offer">
            
        </div>
        
        </>
    )
}
export default SavingZone;
