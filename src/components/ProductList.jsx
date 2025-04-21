import { useEffect, useState } from 'react';
import getApi from '../api/axios';
import ProductForm from './ProductForm';

export default function ProductList({ credentials }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    const api = getApi(credentials.username, credentials.password);

    api.get('/products')
      .then(res => setProducts(res.data))
      .catch(err => console.error('Error loading products', err));
  }, [credentials]);

  const handleProductSaved = (product) => {
    setProducts((prevProducts) => {
      if (editingProduct) {
        return prevProducts.map(p => (p.id === product.id ? product : p));
      }
      return [...prevProducts, product];
    });
    setEditingProduct(null);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
  };

  const handleDeleteProduct = async (id) => {
    const api = getApi(credentials.username, credentials.password);

    try {
      await api.delete(`/products/${id}`);
      setProducts((prevProducts) => prevProducts.filter(p => p.id !== id));
    } catch (err) {
      console.error('Error deleting product', err);
    }
  };

  const handleAddNewProduct = () => {
    setEditingProduct(null);
  };

  return (
    <div>
      <h2>Product Catalog</h2>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <strong>{p.name}</strong> - ${p.price.toFixed(2)}<br />
            {p.description} | Stock: {p.stock}
            <button onClick={() => handleEditProduct(p)}>Edit</button>
            <button onClick={() => handleDeleteProduct(p.id)}>Delete</button>
          </li>
        ))}
      </ul>

      <ProductForm
        credentials={credentials}
        productToEdit={editingProduct}
        onProductSaved={handleProductSaved}
      />
    </div>
  );
}
