import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import { signUp } from '../../redux/actions/SearchAction'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import validator from 'validator';
import './signUp.css'

const SignUp = () => {

    const dispatch = useAppDispatch()

    const store = useAppSelector(state => state)

    const navigate = useNavigate()

    const [data, setData] = useState({
        name : "",
        email : "",
        password : "",
        confirmpassword : "" 
    })


    // const payload = {
        
    // }




    const handleChange = (e : any) => {


        const {name , value} = e.currentTarget

        // console.log(name, value)

        setData(prevdata => ({
            ...prevdata,
            [name] : value,
          }))
          

    }

    // console.log(store.searchReducer.signup)

    // console.log(validator.isStrongPassword(data.password))


    const handleClick = () => {


        if(validator.isEmail(data.email) && validator.isStrongPassword(data.password) && data.confirmpassword === data.password ){
            dispatch(signUp(data))
            localStorage.setItem('signup', JSON.stringify(data))
            navigate('/login')
        }
        else{
            alert('Please Enter Valid Credentials')
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

  return (
      <div className='container cl-4 signup'>
        <div className="form-group">
            <input type="text" className="form-control" placeholder="Enter Username" name='name' value={data.name}  onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" name='email' value={data.email} onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control" placeholder="Password" value={data.password} name='password' onChange={handleChange} />
        </div>
        <div className="form-group">
            <input type="password" className="form-control"  placeholder="Confirm Password" name='confirmpassword' value={data.confirmpassword} onChange={handleChange} />
        </div>
        <button className="btn btn-primary" onClick={handleClick} >Submit</button>
    </div>
  )
}

export default SignUp
