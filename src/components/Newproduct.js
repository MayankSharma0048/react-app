import './Newproduct.css';
import ProductItem from './ProductItem';
function Newproduct(props)
{
return(
    <div className = 'products'>
        {
          props.Product.map((Product) => (<ProductItem Name = {Product.Name}
         Type = {Product.Type} Price = {Product.Price}/> ))
          }
    </div>
);



}
export default Newproduct;
 