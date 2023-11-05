import React, { useContext } from 'react'
import './ProductDisplay.css'
import starIcon from '../Assets/star_icon.png';
import starDullIcon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(ShopContext)
  return (
    <div className='ProductDisplay'>
        <div className="productDisplay-left">
            <div className="productDisplay-imageList">
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
                <img src={product.image} alt=''/>
            </div>
            <div className="productDisplayImage">
            <img className='product-display-mainImg' src={product.image} alt=''/>
            </div>
        </div>
        <div className="productDisplay-right">
            <h1>{product.name}</h1>
            <div className="product-diplay-rightstar">
            <img src={starIcon} alt=''/>
            <img src={starIcon} alt=''/>
            <img src={starIcon} alt=''/>
            <img src={starIcon} alt=''/>
            <img src={starDullIcon} alt=''/>
            <p>(122)</p>

            </div>
            <div className="productdisplay-right-prices">
                <div className="productprice-old">${product.old_price}</div>
                <div className="productprice-new">${product.new_price}</div>
            </div>
            <div className="product-right-discription">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cumque, corporis rem. Enim, porro molestiae. Molestias eos nulla assumenda voluptates atque aliquam qui, provident ducimus neque enim mollitia quia laborum inventore.

            </div>
            <div className="productdisplay_rightsize">
                <h1>Select Size</h1>
                <div className="productdisplayrightsizes">
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
            <p className='productdisplayrigthtcategory'>
                <span>Category :</span>Women, T-shirt, Crop-top 
            </p>
            <p className='productdisplayrigthtcategory'>
                <span>Tags :</span>Modern, Latest
            </p>
        </div>
    </div>
  )
}

export default ProductDisplay