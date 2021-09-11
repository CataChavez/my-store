import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProductsStartThunk } from "../../store/products/thunks";


const ProductCard = () => {
    const { dataProducts: products, isLoading } = useSelector(state => state.products)
    const dispatch = useDispatch()
   

    useEffect(() => {
        if (isLoading === 'iddle')
            dispatch(fetchProductsStartThunk())
        
    }, [isLoading, dispatch])

    return(
        
        <div className="container">
            <div className="row row-cols-md-3 g-4">
                    {products.map((product) => (
                <div className="col-md-4 p-4">
                    <div className="card" key={product.id}>
                        <img className="card-img-top img-fluid" src={product.product_img} alt-text="product image"/>                            
                        <div className="card-body">
                        <div>
                            <h5>{product.product_name}</h5>
                        </div>
                            <p className="text-muted">Descripción {product.description}</p>                           
                        </div>                        
                        <div className="card-footer">
                            <p>Stock:{product.stock}</p>
                        </div>                        
                        <div className="card-footer">
                            <p>Precio: ${product.price}</p>
                        </div>                        
                    </div>                    
                    </div>
                    ))}
            </div>
        </div> 
    )
}

export default ProductCard;