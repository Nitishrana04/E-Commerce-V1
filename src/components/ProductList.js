import React, { useState, useEffect } from 'react';
import { db } from '../firebase/firebaseConfig'; // Import your Firebase config

const ProductList = () => {
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
        try {
          const productRef = db.collection('products').doc('3RktIux9sC7N3QhECZsn');
          const doc = await productRef.get();
          if (doc.exists) {
            setProduct(doc.data());
          } else {
            console.log('No such document!');
          }
        } catch (error) {
          console.error('Error fetching product:', error);
        }
      };
      
    fetchProduct();
  }, []);

  return (
    <div>
      {product && (
        <div>
            <h1>homejfg</h1>
          <h2>{product.Name}</h2>
          <p>{product.Description}</p>
          <p>Price: ${product.price}</p>
          <img src={product.imageUrl} alt={product.Name} />
        </div>
      )}
    </div>
  );
};

export default ProductList;
