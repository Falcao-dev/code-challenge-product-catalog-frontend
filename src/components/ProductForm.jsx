import { useState, useEffect } from 'react';
import getApi from '../api/axios';

export default function ProductForm({ credentials, productToEdit, onProductSaved }) {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (productToEdit) {
      setName(productToEdit.name);
      setPrice(productToEdit.price);
      setDescription(productToEdit.description);
      setStock(productToEdit.stock);
    } else {
      setName('');
      setPrice('');
      setDescription('');
      setStock('');
    }
  }, [productToEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const api = getApi(credentials.username, credentials.password);

    try {
      const productData = {
        name,
        price: parseFloat(price),
        description,
        stock: parseInt(stock),
      };

      let response;
      if (productToEdit) {
        response = await api.put(`/products/${productToEdit.id}`, productData);
      } else {
        response = await api.post('/products', productData);
      }

      onProductSaved(response.data);
    } catch (err) {
      setError('There was an error saving the product.');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Product Specification</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        /><br />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        /><br />
        <input
          type="number"
          placeholder="Stock"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          required
        /><br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
