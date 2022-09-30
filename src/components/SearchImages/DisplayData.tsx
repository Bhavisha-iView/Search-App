import React from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Link, useNavigate, useParams } from 'react-router-dom';
// import { showData } from '../redux/actions/SearchAction';
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import './searchPage.css'

import { FaBeer, FaLocationArrow, FaSearchLocation, FaThumbsUp } from 'react-icons/fa';
import Navbar from '../Navbar/Navbar';

const DisplayData = () => {
  
    const store = useAppSelector(state => state)

    const dispatch = useAppDispatch()

    const param = useParams()

    const res = store.searchReducer.searchdata

    const navigate = useNavigate()

    // console.log(param.id)

    return (
        <div>
            <Navbar />
            <button className='back-btn' onClick={() => navigate('/imageSearch')}>back</button>
            <div className='display-section' >
            {
                res && 
                
                res.map((val : any) => (
                    val.id === param.id && 

                    <>
                         <div className='profile' >
                            <img src={val.user.profile_image.small} className='profile_image' />
                            <h3>{val.user.username}</h3>
                        </div>
                        {
                            val.user.location ?  <div className='location' >
                            <h3><FaSearchLocation className='location-icon' /></h3>
                            <h4>{val.user.location}</h4>
                        </div> : <br />
                        }
                         <div className='searched-image'>
                            <img
                            className="searched-image"
                            src={val.urls.small}
                            alt="val.alt_description"
                            /> 
                        </div>
                        <div className='likes'>
                            <h3><FaThumbsUp className='likes-icon' /></h3>
                            <h3>{val.likes}</h3>
                        </div>
                         {
                            val.description && <div className='description' >
                            <p className='desc-username'>{val.user.username} </p>
                            <p>{val.description}</p>
                        </div> 
                         }
                    </>
                ))
            }
        </div>
        </div>
      );
}

export default DisplayData

