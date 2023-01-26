//component to add products to json
//Gloria

<<<<<<< HEAD
import React, {useState} from 'react'
function AddProduct({addProduct}){

    const [name , setName] = useState('')
    const [price , setPrice] = useState('')
    const [image, setImage] = useState('')    
    const [description , setDescription] = useState('')
    const [category , setCategory] = useState('')
    const [rating , setRating] = useState('')
       
   
     
    
     const handleSubmit = (e) =>{
        e.preventDefault()

        const newProduct = {
            
            name: name,
            price: price,
            image: image,
            description: description,
            category: category,
            rating: rating,
           
        }

        fetch('http://localhost:8002/products', {

        method:'POST',

        headers: {
            'Content-Type' : 'application/json'
        },

        body:JSON.stringify(newProduct),
     })
     
     .then((resp)=> resp.json())
     .then((newProduct)=> addProduct(newProduct))

    }

    return(
        <div className = 'ui segment' onSubmit = {handleSubmit}>
         <form className = 'ui form'>
            <div className = 'four wide field'>

            <input type ='text'
                name ='name'
                value = {name}
                placeholder = 'Enter Product Name'
                onChange ={(e) => setName(e.target.value)}
                
                />
            <input type ='number'
                name ='price'
                value = {price}
                placeholder = 'Enter Price in Shillings'
                onChange ={(e) => setPrice(e.target.value)}
                
                />
             <input type ='text'
                name ='image'
                value = {image}
                placeholder = 'Enter Image Link'
                onChange ={(e) => setImage(e.target.value)}
                
                />
            <input type ='text'
                name ='description'
                placeholder = 'Enter Product Description'
                value = {description}
                onChange ={(e) => setDescription(e.target.value) }
                
                />
            <input type ='text'
                name ='category'
                placeholder = 'Enter Product Category'
                value = {category}
                onChange ={(e) => setCategory(e.target.value)}
                
                />
            <input type ='number'
                name ='rating'
                placeholder = 'Enter Rating'
                step = '0.01'
                value = {rating}
                onChange ={(e) => setRating(e.target.value)}
                
                />
                
                </div>
                <button className = 'ui button' type ='submit'>Submit</button>
             </form>
             </div>
    )
    }
    export default AddProduct;














=======
>>>>>>> a0bcd9864b41be4a13f702fb189a88b27677affb
