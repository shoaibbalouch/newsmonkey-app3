import React, { Component } from 'react'

export default class NewsItem extends Component {
  render() {
    let {tittle,descryption,urlToImage,newsUrl} = this.props;
    return (
        
      <div>
        <div className="card" style={{width: "18rem"}}>
  <img src= {!urlToImage?"https://assets3.cbsnewsstatic.com/hub/i/r/2023/07/19/c93ba436-8961-455a-a2fa-c82b8c02dd1c/thumbnail/1200x630g2/51b2576a5b15ad7239796c018b88a285/gettyimages-1541245766.jpg?v=95745651c879c36458baff76f9d6c670":urlToImage} alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{ tittle}</h5>
    <p className="card-text">{descryption}</p>
    <a href={newsUrl} target="blank"className="btn  btn-sn btn-dark">Read More</a>
  </div>
</div>


      </div>
    )
  }
};
