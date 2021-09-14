

const EditProduct = () => {
  
    return (  
        <div className="container">
            <div className="col-md-6 p-2">
          <div className="card card-body">
            <h3 className="text-center">Editar Producto</h3>
            <form>
              <div className="mb-2">
                <label className="form-label">Nombre del producto</label>
                <input 
                type="text" 
                className="form-control"
                name="product_name"
                />
              </div>
              <div>
                <label className="form-label">Descripción</label>
                <textarea
                  type="txt"
                  className="form-control"
                  name="description"
                />
            <div className="mb-2">
                <label className="form-label">Precio</label>
                <input 
                type="number" 
                name="price"
                className="form-control" 
                />
              </div>
            <div className="mb-2">
                <label className="form-label">Stock</label>
                <input 
                type="text" 
                className="form-control" 
                name="stock"
                />
              </div>

              </div>

              <button type="submit" className="btn btn-primary">
                Editar
              </button>
            </form>
          </div>
        </div>
        </div>
    )
}

export default EditProduct;