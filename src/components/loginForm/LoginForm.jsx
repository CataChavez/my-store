import { useDispatch } from "react-redux";
import { useState, useCallback } from "react";
import { storeLogin } from "../../store/login/actions";
import { useHistory } from "react-router";

export const LoginForm = ({ isLoading }) => {
  const history = useHistory()
  const dispatch = useDispatch()
 
  const [form, setForm] = useState({
    email: "",
    password:""
  });
  

  const handlerInputChange = (event) => {
    const target = event.target;
    setForm({
      ...form,
      [target.name]: target.value,
    })
  }

  const cb = () => {
    history.push(`/owner/dashboard`)
  }

    const handlerSubmit = useCallback(
      (event) => {
        event.preventDefault();
        dispatch(storeLogin(form, cb));

    },[dispatch, form])
  
    return (
    <div className="container">
    <div className="row justify-content-around p-5">
      <div className="col-md-6 p-2">
        <div className="card card-body">
          <form noValidate autoComplete="off" onSubmit={handlerSubmit}>
            <div className="mb-3">
              <label className="form-label">Mail emprendimiento</label>
              <input
              id="email"
              name="email" 
              className="form-control email"
              placeholder="contacto@manolospizza.com"
              onChange={handlerInputChange}
              value={form.email}
              type="email"
              />
            </div>
            <div>
              <label className="form-label">Password</label>
              <input
                id="password"
                type="password"
                name="password"
                placeholder="abc123"
                className="form-control"
                onChange={handlerInputChange}
                value={form.password}  
              />
            </div>
            <div >
              <button
              id="buttonSubmit" 
              type="submit" 
              className="btn btn-primary"
              disabled={isLoading}
              >
                {isLoading ? "Loading..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
        </div>
      </div>
    </div>

  );
};

export default LoginForm;