import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { deleteProductStartThunk } from "../../store/products/thunks";


function UserDelete() {
    const { id } = useParams()
    const { dataProduct: products} = useSelector((state) => state.products)

    const dispatch = useDispatch();
    const history = useHistory()

    useEffect(() => {
        const product = products.find(product => product.id === parseInt(id))[0]
        }, [products, id])

    const handlerOnDelete = () => {
        dispatch(deleteProductStartThunk(parseInt(id)))
        history.push("/owner/dashboard")
    }

   
    return (
        <div className="container p-2">
            <div className="card">
                <div className="card-body">
                Esta Seguro que deseas borrar el producto: 
            <div>
                {id}            
            </div>
            <div>
                <button onClick={handlerOnDelete} className="btn btn-danger">Si</button>
                <Link to="/owner/dashboard" className="btn btn-primary">Volver</Link>
            </div>
                </div>
            
            </div>
        </div>

    )
}

export default UserDelete