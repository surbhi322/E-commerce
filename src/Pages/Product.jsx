import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import BreadCrums from '../Components/BreadCrums/BreadCrums';
import { ShopContext } from '../Context/ShopContext';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';

const Product = () => {
  const { all_Product } = useContext(ShopContext);
  const {productId} = useParams();
  const product = all_Product.find((e)=>e.id=== Number(productId))
  return (
    <div className='product'>
      <BreadCrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox />
      <RelatedProducts />
    </div>
  )
}

export default Product