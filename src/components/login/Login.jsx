import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userLoginSelector } from "../../store/login/selectors"
import { LoginForm } from "../loginForm/LoginForm"

export const Login = () => {
  const id = useSelector(state => state.login.data.id)
  const email = useSelector(state => state.login.data.email)


        return(
            <div className="container p-2">
                <div className="">
                    <div className="card p-1">
                        <p id="log-success">Bienvenido {email}</p>
                        <Link to={`/owner/${id}/dashboard`} className="btn btn-primary">Ir a mi Dashboard</Link>
                    </div>
                </div>
            </div>
        )
    }
   


