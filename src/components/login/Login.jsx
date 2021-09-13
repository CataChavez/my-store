import { useEffect } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { userLoginSelector } from "../../store/login/selectors"
import { LoginForm } from "../loginForm/LoginForm"

export const Login = () => {
    const userData = useSelector(userLoginSelector)
    
    if (userData.data && Object.keys(userData.data).length > 0){
        return(
            <div className="container p-2">
                <div className="">
                    <div className="card p-1">
                        <p id="log-success">Bienvenido {userData.data}</p>
                        <Link to={`/owner/${userData.id}`} className="btn btn-primary">Ir a mi Dashboard</Link>
                    </div>
                </div>
            </div>
        )
    }
    const isLoading = userData.isLoading
    const isError = userData.error
    return(
        <div className="row">
        <div className="col-md-6 offset-md-3 mt-5">
          <LoginForm isLoading={isLoading} />
          {isError && (
            <div className="card">
              <p id="paragraph">
                <b>Error: </b> {userData.error}
              </p>
            </div>
          )}
        </div>
      </div>
    )
}

