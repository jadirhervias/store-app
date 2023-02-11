import '../assets/styles/Table.css';

const ProductTable = (props) => {
  return <>
    <table className='products-table'>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Store</th>
          <th colSpan={2}></th>
        </tr>
      </thead>
      <tbody>
        {
          props.products.map(product => (
            <tr key={`product-${product.id}`} >
              <td>{product.id}</td>
              <td>{product.name}</td>
              <td className='text-ellipsis'>{product.description}</td>
              <td>{product.price}</td>
              <td>{product.store.name}</td>
              <td><button onClick={() => props.handleDelete(product.id)}>Delete</button></td>
              <td><button onClick={() => props.handleOnEdit(product.id)}>Edit</button></td>
            </tr>
          ))
        }
      </tbody>
    </table>
  </>
}

export default ProductTable;