import { useEffect, useState } from "react";
import '../assets/styles/ProductForm.css';
import ProductTable from './ProductTable';
import Alert from '../infrastructure/Alert';
import Repository from '../infrastructure/BaseApiRepository';

const EMPTY_PRODUCT = {
  store_id: undefined,
  description: '',
  name: '',
  price: 0,
};

const ProductForm = () => {
  const [products, setProducts] = useState([]);

  const [stores, setStores] = useState([]);

  const [product, setProduct] = useState(EMPTY_PRODUCT);

  const [productNameHasError, setProductNameHasError] = useState(false);

  const [editionMode, setEditionMode] = useState(false);

  const [editableId, setEditableId] = useState(null);

  useEffect(() => {
    Repository.buildFor('products').list()
      .then((data) => setProducts(data))
      .catch((error) => Alert.error('Something went wrong.'));

    Repository.buildFor('stores').list()
      .then((data) => setStores(data))
      .catch((error) => Alert.error('Something went wrong.'));
  }, []);

  const handleInput = (event) => {
    if (event.target.name === 'name') {
      setProductNameHasError(!isValidProductName(event.target.value));
    }

    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  };

  const handleDelete = (id) => {
    const items = products.filter(product => product.id !== id);

    setProducts(items);

    emptyForm();

    Repository.buildFor('products').delete(id)
      .then(() => Alert.success('Product deleted successfully.'));
  }

  const handleOnEdit = (id) => {
    setEditableId(id);
    setEditionMode(true);

    const product = products.find(product => product.id === id);

    setProduct(product);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const repo = Repository.buildFor('products');

    if (editionMode) {
      const productIndex = products.findIndex(product => product.id === editableId);

      repo.update(editableId, product)
        .then(() => {
          if (-1 !== productIndex) {
            products[productIndex] = {
              id: editableId,
              ...product
            }

            setProducts([
              ...products
            ]);
          }

          Alert.success('Product updated successfully.');
        });
    } else {
      repo.create(product)
        .then(data => {
          setProducts([
            ...products,
            {
              ...product,
              id: data.id
            }
          ]);

          Alert.success('Product created successfully.');
        });
    }

    emptyForm();
  };

  const emptyForm = () => {
    setEditionMode(false);
    setProduct(EMPTY_PRODUCT);
    setEditableId(null);
  }

  const isValidProductName = (name) => {
    const pattern = /^[A-Z0-9]+ - [a-zA-Z0-9\s]+ - \d+$/;
    return pattern.test(name);
  }

  return <div>
    <div>
      <form className="product-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Product name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Product code (alphanumeric) - Product Name - SKU"
          value={product.name}
          required
          onChange={handleInput}
        />
        {
          productNameHasError && (
            <span
              id="product-name-error"
              className="error-message"
            >Product name has no valid format.</span>
          )
        }

        <label htmlFor="description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          value={product.description}
          onChange={handleInput}
        />

        <label htmlFor="name">Price</label>
        <input
          type="number"
          id="price"
          name="price"
          min={0}
          value={Number(product.price)}
          onChange={handleInput}
        />

        <label htmlFor="stores">Store</label>
        <select
          id="stores"
          name="store_id"
          onChange={handleInput}
          value={product.store_id}
        >
          {
            stores.map(store => (
              <option
                key={`category-${store.id}`}
                value={store.id}
                selected={editionMode ? product.store_id : ''}
              >
                {store.name}
              </option>
            ))
          }
        </select>

        <input type="submit" value='Save' disabled={productNameHasError} style={{
          backgroundColor: productNameHasError ? 'gray' : '#04AA6D',
        }} />
      </form>
    </div>
    <div>
      <ProductTable
        products={products}
        handleDelete={handleDelete}
        handleOnEdit={handleOnEdit}
      />
    </div>
  </div>
}

export default ProductForm;