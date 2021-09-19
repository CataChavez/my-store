import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsStartThunk } from '../../store/products/thunks';
import React, { useEffect } from "react";

const ProductListTable= () => {
  //const id = useParams()
  const id = useSelector(state => state.login.data.id)
  const { dataProduct: products } = useSelector((state) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductsStartThunk(id))
  }, [dispatch, id])

  return(
        <div className="container p-2">
            <table className="table table-light">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Descripción</th>
            <th scope="col">Stock</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
            <th scope="col"></th>
          </tr>
        </thead>
        {products?.length > 0 &&
          products.map((product) => (
            <tbody key={product.id}>
              <tr>                    
                <td>{product.product_name}</td>
                <td>{product.description}</td>
                <td>{product.stock}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/owner/edit/${product.id}`} className="btn btn-warning btn-small">
                    Edit
                  </Link>
                </td>
                <td>
                  <Link to={`/owner/delete/${product.id}`} className="btn btn-danger btn-small">
                    Delete
                  </Link>
                </td>
              </tr>
            </tbody>
          ))}
      </table>
        </div>
    )
}

export default ProductListTable;