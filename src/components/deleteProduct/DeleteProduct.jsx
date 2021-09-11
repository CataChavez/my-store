import React from 'react'
import { useParams } from 'react-router'

function UserDelete() {
    const {product_name} = useParams()
    return (
        <div className="container p-2">
            <div className="card">
                <div className="card-body">
                Esta Seguro que deseas borrar el producto: 
            <div>
                {product_name}            
            </div>
            <div>
                <button className="btn btn-danger">Si</button>
                <button className="btn btn-primary">Volver</button>
            </div>
                </div>
            
            </div>
        </div>

    )
}

export default UserDelete