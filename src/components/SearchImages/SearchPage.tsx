import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { loading, searchData, storeData } from '../../redux/actions/SearchAction'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import {useMemo} from 'react'
import Pagination from '../Pagination/Pagination';
import News from '../NewsPage/News';
import Loader from '../Loading/Loader';
import './searchPage.css'
import ScrollToTop from "react-scroll-to-top";


let PageSize = 10;


const SearchPage = () => {

    const dispatch = useAppDispatch()

    const store = useAppSelector(state => state)

    const query = store.searchReducer.searchQuery

    const Access_Key = 'ufULTAi4OZB_aqbD8s3bZUebxAjvuu37LgjEsnZwtmE'

    const navigate = useNavigate()

    const data = store.searchReducer.searchdata

    const [currentPage, setCurrentPage] = useState(1);

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return data.slice(firstPageIndex, lastPageIndex);
    }, [data, currentPage]);
  



    const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
      dispatch(searchData(e.currentTarget.value))
  }


    const fetchRequest = async () => {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}&per_page=50`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      // console.log(result);
      dispatch(loading(true))
      dispatch(storeData(result))
      dispatch(loading(false))
    
    };

    const pressed = async () => {
      const data = await fetch(
        `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=${Access_Key}&per_page=50`
      );
      const dataJ = await data.json();
      const result = dataJ.results;
      // console.log(result);
      
      dispatch(loading(true))
      dispatch(storeData(result))
      dispatch(loading(false))
    }

    useEffect(() => {
      fetchRequest()
      pressed()
    },[])

    useEffect(() => {
      window.scrollTo(0, 0)
    },[currentPage])


    // console.log(res)

    useEffect(() => {
      if(localStorage.getItem('signup') && !localStorage.getItem('login')){
      navigate('/login')
    }
    else if(!localStorage.getItem('signup')){
      navigate('/')
    }
    },[]) 

  return ( 
        <div>

          <Navbar />

          <div className='search' >
            <h1>Search Images Here...</h1> 
    
            <div className='search-page' >
              <input type="text" name="search" className='search-bar'  onChange={handleChange} onKeyDown={pressed} />
              <button onClick={fetchRequest} className='search-button' >Search</button>
            </div>


        {
          data.length === 0 && store.searchReducer.loading ? <Loader /> :
        
              <div className='main-images'>
            {
                data &&
 
                currentTableData.map((val : any) => (

                  <Link to={`/imageSearch/${val.id}`} key={val.id} >
                        <img
                        className="image"
                        src={val.urls.small}
                        alt="val.alt_description"
                      /> 
                  </Link>

                  )
                )

              }

            </div>
          }
          <br />
              <br />

              <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={data.length}
        pageSize={PageSize}
        onPageChange={(page : any) => setCurrentPage(page)}
      />

          </div>

          <ScrollToTop smooth className='scrollToTop' />

        </div>
  )
}

export default SearchPage