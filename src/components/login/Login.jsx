import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { fetchProductsStartThunk } from "../../store/products/thunks"

export const Login = () => {
  const id = useSelector(state => state.login.data.id)
  const email = useSelector(state => state.login.data.email)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(fetchProductsStartThunk(id))
  }, [id])

  /*   const handlerOnClick = (event) => {
    event.preventDefault()
    history.push(`/owner/${id}/dashboard`)
  } */
  const handlerLogout = (event) => {
    event.preventDefault()
    localStorage.removeItem('accessToken')      
    history.push('/')
  }

  const handlerCreate = (event) => {
    event.preventDefault()
    history.push('/owner/create')
  }
  
      return(
            <div className="container p-2">
                <div className="">
                    <div className="card">
                      <div className="row">
                        <div className="col-8">
                          <h3 id="log-success" >Bienvenido {email}</h3> 
                        </div>
                        <div className="col-2">
                          <button onClick={handlerLogout} className="btn btn-danger">Logout</button>
                        </div>
                        <div className="col-2">
                          <button onClick={handlerCreate} className="btn btn-secondary">Crear Producto</button>
                        </div>
                        {/* <button onClick ={handlerOnClick} className="btn btn-primary">Ir al Dashboard</button> */}
                      </div>
                    </div>
                </div>
            </div>
        )
    }
   


