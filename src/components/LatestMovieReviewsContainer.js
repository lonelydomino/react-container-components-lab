// import React, { Component } from 'react';
import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'your-key-here';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here
class LatestMovieReviewsContainer extends React.Component{
    state = {
        reviews: []
    }
    componentDidMount() {
        fetch("https://api.nytimes.com/svc/movies/v2/reviews/all.json?api-key=zYUghdWtAZjXKTuzxVAUrBMEdIEOIIQn")
        .then(resp => resp.json())
        .then(json => this.setState({reviews: json.results}))
    }
    
  render(){   
     return (
        <div className="latest-movie-reviews"><MovieReviews reviews={this.state.reviews} /></div>
     )
  }
}
export default LatestMovieReviewsContainer