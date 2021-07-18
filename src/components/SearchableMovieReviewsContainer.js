// import React, { Component } from 'react';
import React from 'react'
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'zYUghdWtAZjXKTuzxVAUrBMEdIEOIIQn';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;
const QUERY_URL =
  'https://api.nytimes.com/svc/movies/v2/reviews/search.json?' +
  `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
class SearchableMovieReviewsContainer extends React.Component{
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleSearchInputChange = (e) => this.setState({ searchTerm: e.target.value });

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(QUERY_URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(json => this.setState({ reviews: json.results }));
    };


  render(){   

     return (
        <div className="searchable-movie-reviews">
            <form onSubmit={this.handleSubmit}>
                <label>Search</label>
                <input id="search-input" type="text" onChange={this.handleSearchInputChange}/>
                <button type="submit">Submit</button>
            </form>
            <MovieReviews reviews={this.state.reviews} />
        </div>
     )
  }
}
export default SearchableMovieReviewsContainer