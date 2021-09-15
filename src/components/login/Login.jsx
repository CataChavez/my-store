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
  }, [])

      return(
            <div className="container p-2">
                <div className="">
                    <div className="card">
                        <h3 id="log-success">Bienvenido {email}</h3>
                    </div>
                </div>
            </div>
        )
    }
   


