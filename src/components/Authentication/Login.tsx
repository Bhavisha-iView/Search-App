import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../redux/actions/SearchAction'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import './signUp.css'

const Login = () => {

    const dispatch = useAppDispatch()

    const store = useAppSelector(state => state)

    const navigate = useNavigate()

    const [logindata, setLoginData] = useState({
        email : "",
        password : ""
    })

    
    const handleChange = (e : any) => {


        const {name , value} = e.currentTarget

        // console.log(name, value)

        setLoginData(prevdata => ({
            ...prevdata,
            [name] : value,
          }))
          

    }

    let signupDetails : any = localStorage.getItem('signup')

    signupDetails = JSON.parse(signupDetails)


    // console.log(JSON.parse(signupDetails))

    console.log(signupDetails.email)
    console.log(signupDetails.password)
    
    const handleClick = () => {

        if(signupDetails.email === logindata.email && signupDetails.password === logindata.password){
            console.log('yes')
            dispatch(login(logindata))
            localStorage.setItem('login', JSON.stringify(logindata))
            navigate('/home')
        }
        else{
            console.log('no')
        }
    }

    useEffect(() => {
        if(localStorage.getItem('signup') && localStorage.getItem('login')){
          navigate('/home')
        }
        else if(localStorage.getItem('signup')){
          navigate('/login')
        }
        else if(!localStorage.getItem('signup')){
          navigate('/')
        }
      },[])


    console.log(store.searchReducer.login)


  return (
        <div className='container cl-4 signup login'>
          <div className="form-group">
              <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" name='email' value={logindata.email} onChange={handleChange} />
          </div>
          <div className="form-group">
              <input type="password" className="form-control" placeholder="Password" value={logindata.password} name='password' onChange={handleChange} />
          </div>
          <button className="btn btn-primary" onClick={handleClick} >Submit</button>
      </div>
    )
}

export default Login



