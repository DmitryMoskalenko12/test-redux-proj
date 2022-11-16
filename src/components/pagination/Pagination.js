import { useState, useEffect } from 'react';
import axios from 'axios';
import './pagination.scss'
const Pagination = () => { 
const [data, setData] = useState([])
const [totalCount, setTotalCount] = useState(0)
const [page, setPage] = useState(1)
const [limit, setLimit] = useState(10)

const postData = async () =>{
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts?_limit=${limit}&_page=${page}`)
  return res
} 

const getData = async () =>{
  const res = await postData()
  setData(res.data)
  setTotalCount(res.headers['x-total-count'])
}

const pageCount = () =>{
  return Math.ceil(totalCount / limit)
}

const resPage = pageCount()
let pageArr = []

for (let i = 0; i < resPage; i++) {
  pageArr.push(i + 1)
}


useEffect(() => {
getData()
},[page])


return(
  <div className="post">
   {
    data.map(({id, title, body}) =>{
      return(
        <div key={id} className="post__wrap">
          <div className="post__title"> {id} {title}</div>
          <div className="post__body">{body}</div>
        </div>
      )
    })
   }
   <div className="butwrap">
    <button onClick={() => {getData(); setPage(page <= 1 ? 1 : page - 1)}} >Prev</button>
   {
    pageArr.map((item, i) =>{
      return <button className={item === page ? 'btn active': 'btn'} onClick={() => {getData(); setPage(item)}} key={i}>{item}</button>
    })
   }
   <button  onClick={() => {getData(); setPage(page >= 10 ? 10 : page + 1)}}>Next</button>
   </div>
  </div>
  
)
}
export default Pagination;