import React,{useState} from 'react';
import './ProductForm.css';
function ProductForm(props)
{
      const [enteredName,setEnteredName] = useState('');
      const [enteredType,setEnteredType] = useState('');
      const [enteredPrice,setEnteredPrice] = useState('');
      const [isNameValid , setNameValid] = useState(true);
      const [isTypeValid , setTypeValid] = useState(true);
      const [isPriceValid , setPriceValid] = useState(true);

    function NameChangeHandler(event)
    {
        if((event.target.value).trim().length > 0)
        {
            setNameValid(true);
        }
        setEnteredName(event.target.value);
    }
    function TypeChangeHandler(event)
    {   if((event.target.value).trim().length > 0)
        {
            setTypeValid(true);
        }
        setEnteredType(event.target.value)
    }
    function PriceChangeHandler(event)
    {
        if((event.target.value).trim().length > 0)
        {
            setPriceValid(true);
        }
        setEnteredPrice(event.target.value);
    }
    function SubmitHandler(event){
        event.preventDefault()
        if(enteredName.trim().length === 0)
       {  setNameValid(false);
        alert('Enter Name');
         return; }
        if(enteredType.trim().length === 0)
        {    setTypeValid(false);
            alert('Enter Type');
            return;}
        if(enteredPrice.trim().length ===0)
       { setPriceValid(false);
        alert('Enter Price');
        return;}
        

        const ProductData = {
            Name : enteredName,
            Type : enteredType,
            Price : enteredPrice,
        }
      props.newData(ProductData);
        setEnteredName('');
        setEnteredType('');
        setEnteredPrice('');
    }
    
    return (<form onSubmit={SubmitHandler}>
        <div className='new-product_controls'>
            <div className={`new-product_control ${isNameValid ? '' : 'invalid'}`}>
                <label> Name </label>
                <input type='text' onChange={NameChangeHandler} value={enteredName} />
            </div>
            <div className = {`new-product_control ${isTypeValid? '' : 'invalid'}`}>
                <label > Type</label>
            <input type='text' onChange={TypeChangeHandler} value={enteredType} />
        </div>
        <div className={`new-product_control ${isPriceValid ? '' : 'invalid'}`}>
            <label> Price </label>
            <input type='number' onChange={PriceChangeHandler} value={enteredPrice} />
        </div>
    </div><div className='new-product_actions'>
            <button>
                Submit
            </button>
        </div>

    </form>);


}
export default ProductForm;