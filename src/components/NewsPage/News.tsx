import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../redux/hook'
import { news, newsQuery } from '../../redux/actions/SearchAction'
import { Link, useNavigate } from 'react-router-dom'
import Pagination from '../Pagination/Pagination'
import Navbar from '../Navbar/Navbar'
import {useMemo} from 'react'
import './newsPage.css'

let PageSize = 10;

const News = () => {

    const dispatch = useAppDispatch()

    const store = useAppSelector(state => state)

    const query = store.searchReducer.newsQuery

    const navigate = useNavigate()

    const newsData = store.searchReducer.news

    const [calenderDate, setCalenderDate] = useState("")

    const [currentPage, setCurrentPage] = useState(1);

    const [sortByInfo, setSortByInfo] = useState("")

    // console.log(sortByInfo)

    const currentTableData = useMemo(() => {
      const firstPageIndex = (currentPage - 1) * PageSize;
      const lastPageIndex = firstPageIndex + PageSize;
      return newsData.slice(firstPageIndex, lastPageIndex);
    }, [newsData, currentPage]);
  

    // console.log(currentTableData)

      const handleChange = (e : React.FormEvent<HTMLInputElement>) => {
        dispatch(newsQuery(e.currentTarget.value))
    }

    
    const dateChange = (e : React.FormEvent<HTMLInputElement>) => {
      setCalenderDate(e.currentTarget.value)
    }

    console.log(calenderDate)

    const api_key = "6104eea333564623828d9604d93a1e22"
  
      const fetchRequest = async () => {
        const data = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&from=${calenderDate}&sortBy=${sortByInfo}&apiKey=${api_key}`
        );
        const dataJ = await data.json();
        const result = dataJ.articles;
        // console.log(result);
        dispatch(news(result))   
      };
  
      const pressed = async () => {
        const data = await fetch(
          `https://newsapi.org/v2/everything?q=${query}&from=${calenderDate}&sortBy=${sortByInfo}&apiKey=${api_key}`
        );
        const dataJ = await data.json();
        const result = dataJ.articles;
        // console.log(result);
        dispatch(news(result))
      }

      useEffect(() => {
        if(localStorage.getItem('signup') && !localStorage.getItem('login')){
        navigate('/login')
      }
      else if(!localStorage.getItem('signup')){
        navigate('/')
      }
      },[])

      // console.log(newsData)

  return (
    <div>

      <Navbar />

      <div className='extraInfo' >
        <div className='calender'>
          <h3>Choose the date</h3>
          <input type='date' onChange={dateChange} />
        </div>

        <div className='sortBy'>
          <h3>Choose the sortBy value</h3>
          <select onChange={(e) => setSortByInfo(e.currentTarget.value)} >
            <option value="">select option</option>
            <option value="relevancy">relevancy</option>
            <option value="popularity">popularity</option>
            <option value="publishedAt">publishedAt</option>
          </select>
        </div>
      </div>

      <div className='search'>

          <h1>Search News Here...</h1>

          <div className='news-page' >
                <input type="text" name="search" className='search-bar'  onChange={handleChange} onKeyDown={pressed} />
                <button onClick={fetchRequest} className='search-button' >Search</button>
          </div>

            <div className='main-news'>
            {
                currentTableData.map((item : any) => (
                  item.urlToImage &&  <a className='news-data' target='_blank'  href={item.url} >
                      <div className='news-name' ><h2>{item.source.name}</h2></div>
                      <div><img src={item.urlToImage} /></div>
                      <div><h3>{item.title}</h3></div>
                      <div><p>{item.description}</p></div>
                      <div><p>{item.publishedAt}</p></div>
                      <div><a href={item.url} target='_blank' >View More</a></div>
                  </a>
                ))
            }
            </div>
            <br />
            <br />
            
            <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={newsData.length}
            pageSize={PageSize}
            onPageChange={(page : any) => setCurrentPage(page)}
          />

      </div>
    </div>
  )
}

export default News