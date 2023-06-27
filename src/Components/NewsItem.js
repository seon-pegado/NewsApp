import React from 'react'
import { Link } from 'react-router-dom'

const NewsItem = (props) => {
  return (
    <>
    <div className="card" style={{width : '18rem'}}>
        <img src={props.imgUrl} className="card-img-top" alt="..."/>
        <div className="card-body">
            <h5 className="card-title">{props.title}...</h5>
            <p className="card-text">{props.desc}...</p>
            <Link className="btn btn-sm btn-primary" to={props.newsUrl} target= '_blank' >Read More</Link>
        </div>
    </div>

    </>
  )
}

export default NewsItem