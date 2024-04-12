import React, { Component } from 'react'

export default class Newsitems extends Component {
    render() {
     let {title,description,imageUrl,url,author,publishedAt,source} = this.props; 
        return (
          <div className='my-3'>
            <div className="card mx-3" style={{width: "18rem"}}>
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{zIndex:'1'}}>
                  {source}
              </span>
                <img src={!imageUrl?"https://img.freepik.com/free-vector/hand-drawn-news-studio-background_23-2149944781.jpg?w=996&t=st=1712485953~exp=1712486553~hmac=23550f078a998e3a2ba5dcb7e56a8e9e37180cb789c10f38e237c4d02601c912":imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{title}...</h5>
                  <p className="card-text">{description}...</p>
                  <p className="card-text"><small className="text-body-secondary">by "{!author?"unknown":author}" on {new Date(publishedAt).toGMTString()}</small></p>
                  <a href={url} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary">Read more</a>
                </div>
              </div>
          </div>
        );
  }
}
