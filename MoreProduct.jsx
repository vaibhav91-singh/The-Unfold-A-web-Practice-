import React from 'react';
import styles from './MoreProduct.module.css';
import MoreProductItem from './MoreProductItem';
import {Suspense} from 'react'; //Loading.. design

function MoreProduct () {
    // return <MoreProductItem />;
    return<>
    <h2>weLCOME Here</h2>
    {/* <MoreProductItem /> */}
      <Suspense fallback={<div>Loading....</div>}>
    
    <MoreProductItem></MoreProductItem>
    </Suspense>
    </>
}

export default MoreProduct;
