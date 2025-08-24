import React from 'react';
import lipistic1 from "./myimage/lipistic1.png"
import lipistic2 from "./myimage/lipistic2.png"
import lipistic3 from "./myimage/lipistic3.png"
import fourbottle1 from "./myimage/fourbottle1.jpg"
import fourbottle2 from "./myimage/fourbottle2.jpg"



let saleimage = [fourbottle1, fourbottle2, lipistic1, lipistic2];
function Savingzoneblock() {
    return (
        <>
            <center><h5>welcome to saving zone sale start at 7 Pm</h5></center>
            <div className="saleproduct">
                {saleimage.map((saleimages, index) => {
                    <div key={index}>
                        <img src={saleimages} /> </div>
                })}
            </div>
        </>
    );
}

export default Savingzoneblock;
