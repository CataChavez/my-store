import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { updateProductStartThunk } from "../../store/products/thunks";


const EditProduct = () => {
  const { id } = useParams()
  const { dataProduct: products } = useSelector((state) => state.products)
  const [product_name, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [product_img, setProductImg] = useState("")
  const [storeId, setStoreId] = useState("")
  const dispatch = useDispatch();
  const history = useHistory()

  useEffect(() => {
    const product = products.find(product => product.id === parseInt(id))
    setProductName(product.product_name)
    setDescription(product.description)
    setPrice(product.price)
    setStock(product.stock)
    setProductImg(product.product_img)
    setStoreId(product.storeId)
  }, [products, id])
  
  const handlerOnUpdate = (event) => {
    event.preventDefault()
    dispatch(updateProductStartThunk({
      id: id,
      product_name, 
      description, 
      price, 
      stock, 
      product_img,
      storeId,
    }))
    history.push("/owner/dashboard")
  }
 
  return (  
        <div className="container">
            <div className="col-md-6 p-2">
          <div className="card card-body">
            <h3 className="text-center">Editar Producto</h3>
               <form>
              <div className="mb-1">
                <label className="form-label">Nombre del producto</label>
                <input 
                type="text" 
                className="form-control"
                name="productName"
                value={product_name}
                onChange={event => setProductName(event.target.value)}
                />
              </div>
              <div>
                <label className="form-label">Descripción</label>
                <textarea
                  type="txt"
                  className="form-control"
                  name="description"
                  value={description}
                  onChange={event => setDescription(event.target.value)}
                />
              </div>  
              <div className="mb-2">
                <label className="form-label">Precio</label>
                <input 
                type="text" 
                name="price"
                className="form-control"
                value={price}
                onChange={event => setPrice(event.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Stock</label>
                <input 
                type="text" 
                className="form-control" 
                name="stock"
                value={stock}
                onChange={event => setStock(event.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">url de la Imagen</label>
                <input 
                type="text" 
                className="form-control"
                name="productImg"
                value={product_img}
                onChange={event => setProductImg(event.target.value)}
                />
              </div>

              <button onClick={handlerOnUpdate} type="submit" className="btn btn-primary">
                Editar
              </button>
            </form>
          </div>
        </div>
        </div>
    )
  }

export default EditProduct;