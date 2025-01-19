import React, { Component } from 'react';
import Newsitem from './Newsitem';

export class Newsc extends Component {
  constructor() {
    super();
    this.state = {
      articles: [], // Initialize with an empty array
      loading: false,
    };
  }

  async componentDidMount() {
    try {
      let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=d13915d1810d491dbf28294ac068ea47";
      let response = await fetch(url);
      let parsedData = await response.json();
      this.setState({ articles: parsedData.articles }); // Correctly update articles
    } catch (error) {
      console.error("Error fetching the news:", error);
    }
  }

  render() {
    return (
      <div className="container my-3">
        <h4>This is the top headline</h4>
        <div className="row">
          {this.state.articles.length > 0 ? (
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4 py-3" key={element.url}>
                  <Newsitem
                    title={element.title }
                    description={element.description }
                    imgurl={element.urlToImage}
                    newsurl={element.url}
                  />
                </div>
              );
            })
          ) : (
            <p>No articles available</p>
          )}
        </div>
      </div>
    );
  }
}

export default Newsc;
