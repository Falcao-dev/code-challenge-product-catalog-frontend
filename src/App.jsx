import { useState } from 'react';
import Login from './components/Login';
import ProductList from './components/ProductList';

function App() {
  const [credentials, setCredentials] = useState(null);

  return (
    <div>
      {credentials ? (
        <ProductList credentials={credentials} />
      ) : (
        <Login onLogin={setCredentials} />
      )}
    </div>
  );
}

export default App;
