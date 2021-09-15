import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createProductStartThunk } from "../../store/products/thunks"
import { useHistory } from "react-router"


const CreateProduct = () => {
  const storeId = useSelector(state => state.login.data.id)
  const [product_name, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [product_img, setProductImg] = useState("")
  const history = useHistory()
  
  const dispatch = useDispatch()
  debugger
  const handlerOnCreate = (event) => {
    event.preventDefault()
    dispatch(createProductStartThunk({ 
      product_name: product_name, 
      description: description, 
      price: price, 
      stock: stock, 
      product_img: product_img, 
      storeId: storeId 
    }))
    history.push(`/owner/${storeId}/dashboard`)
  }
    return (  
        <div className="col-md-12 p-1">
          <div className="card card-body">
            <h3 className="text-center">Crear un nuevo Producto</h3>
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
                type="number" 
                name="price"
                className="form-control"
                value={price}
                onChange={event => setPrice(event.target.value)}
                />
              </div>
              <div className="mb-2">
                <label className="form-label">Stock</label>
                <input 
                type="number" 
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
                name="http://...."
                value={product_img}
                onChange={event => setProductImg(event.target.value)}
                />
              </div>
              <button onChange={handlerOnCreate} type="submit" className="btn btn-primary">
                Agregar
              </button>
            </form>
          </div>
        </div>
    )
}

export default CreateProduct;