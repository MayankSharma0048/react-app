import './ProductItem.css';
import React,{useState} from 'react'; 

function ProductItem(props){
 let [changeText,setText]= useState(props.Type)
    function ClickHandler()
    {
        setText('Added to Cart');
    }
    
    return ( 
        <div className="product-item">
            <div>{props.Name}</div>
            <div className = "product-item_type"><p>{changeText}</p></div>
            <div className = "product-item_price">{props.Price}</div>
            <button onClick = {ClickHandler}> Add To Cart</button>
        </div>
        
    );
}

export default ProductItem;