import './LatestProduct.css';
import ProductForm from './ProductForm';
function LatestProduct(props){
    
   function newLatestProduct(enteredData)
   {
 console.log('In Latest Product Component');
 props.UpdateData(enteredData);
   }
   return <div className = 'new-product'>
    <ProductForm newData = {newLatestProduct}/>
   </div>
}

export default LatestProduct;