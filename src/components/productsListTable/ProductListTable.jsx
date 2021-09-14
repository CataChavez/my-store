import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchProductsStart } from '../../store/products/actions';
import React, { useEffect } from "react";
import { useParams } from "react-router";

const ProductListTable= () => {
  const id = useSelector(state => state.login.data.id)
  const { dataProduct: products, isLoading } = useSelector((state) => state.products)

  const dispatch = useDispatch()

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
                  <Link to={`/products/update/${product.id}`}>
                    <button className="btn btn-warning btn-small">
                      Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <Link to={`/products/delete/${product._id}`}>
                    <button className="btn btn-danger btn-small">
                      Delete
                    </button>
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