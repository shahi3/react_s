import React, { Component } from 'react'

export class Newsitem extends Component {
  render() {
    let {title,description,imgurl,newsurl}=this.props;
    return (
      <div>
            <div className="card" style={{width: "18rem"}}>
            <img src={!imgurl? "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/M6H2UZ3YA46MQ53TU63YUFYJE4.JPG&w=1440" : imgurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{description}</p>
                <a href={newsurl} className="btn btn-primary btn-sm">view more</a>
            </div>
        </div>     
     </div>
    )
  }
}

export default Newsitem

