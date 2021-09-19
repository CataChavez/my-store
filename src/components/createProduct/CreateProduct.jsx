import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { createProductStartThunk } from "../../store/products/thunks"
import { useHistory } from "react-router"

const CreateProduct = () => {
  const storeId = useSelector(state => state.login.data.storeId)
  const [product_name, setProductName] = useState("")
  const [description, setDescription] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [product_img, setProductImg] = useState("")
  const dispatch = useDispatch();
  const history = useHistory()

  const handlerOnCreate = (event) => {
    event.preventDefault()
    dispatch(createProductStartThunk({ 
      product_name,
      description,
      price,
      stock,
      product_img,
      storeId
    }))
    history.push('/owner/dashboard')
  }
  
 
    return (  
        <div className="container-md">
          <div className="">
          <div className="col-6 p-1">
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
                name="product_Img"
                value={product_img}
                onChange={event => setProductImg(event.target.value)}
                />
              </div>
              <button onClick={handlerOnCreate} type="submit" className="btn btn-primary">
                Agregar
              </button>
            </form>
          </div>
        </div>
          </div>
        </div>
    )
}

export default CreateProduct;