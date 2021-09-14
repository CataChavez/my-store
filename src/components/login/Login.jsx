import { useEffect, useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { useHistory } from "react-router"
import { fetchProductsStartThunk } from "../../store/products/thunks"
import { fetchStoreStartThunk } from "../../store/stores/thunks"

export const Login = () => {
  const id = useSelector(state => state.login.data.id)
  const email = useSelector(state => state.login.data.email)
  const dispatch = useDispatch()
  const history = useHistory()


  useEffect(() => {
    dispatch(fetchProductsStartThunk(id))
  }, [])

  const handlerOnClick = (event) => {
    event.preventDefault();
    history.push(`/owner/${id}/dashboard`)
  }

        return(
            <div className="container p-2">
                <div className="">
                    <div className="card p-1">
                        <p id="log-success">Bienvenido {email}</p>
                        <button onClick={handlerOnClick} className="btn btn-primary">Ir a mi Dashboard</button>
                    </div>
                </div>
            </div>
        )
    }
   


