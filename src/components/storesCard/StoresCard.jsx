import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchStoreStartThunk } from "../../store/stores/thunks";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const StoresCard = () => {
    const { data: stores, isLoading } = useSelector((state) => state.stores)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (isLoading === 'iddle')
        dispatch(fetchStoreStartThunk())
    }, [isLoading, dispatch])
    return(
        
        <div className="container">
            <div className="row row-cols-md-3 g-4">
                    {stores.map((store) => (
                <div className="col-md-4 p-4" key={store.id} name="id">
                    <div className="card" >
                        <img className="card-img-top img-fluid" src={store.store_img}/>                            
                        <div className="card-body">
                        <div>
                            <h5>{store.store_name}</h5>
                        </div>
                            <p className="text-muted">Contacto: {store.email}</p>                           
                        </div>                        
                        <div className="card-footer">
                            <Link to={`/store/${store.id}/products`} className="btn btn-primary">
                                Ver Productos                         
                            </Link>
                        </div>                        
                    </div>                    
                    </div>
                    ))}
            </div>
        </div>
    )
}

export default StoresCard;