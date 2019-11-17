import React, { Component } from 'react';
import apiKey from '../config';
import PhotoList from './PhotoList';
import Loader from './Loader';
import axios from 'axios';

class PhotoContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: false,
      search: ""
    };
  }

  componentDidMount() {
    if (this.props.search) {
      this.performSearch(this.props.search);
    }
  }

  componentDidUpdate() {
    if (this.props.search !== this.state.search) {
      this.performSearch(this.props.search)
    }
  }

  
  performSearch = (query) => {  
    this.setState({
      search: this.props.search,
      loading: true
    })
    axios.get(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${query}&per_page=24&format=json&nojsoncallback=1`)    
    .then(response => {
      this.setState({
        photos: response.data.photos.photo,
        loading: false
      });
    })
    .catch(error => {
      console.log('Error fetching and parsing data', error);
    });
  }

  render() {

    return (
      <div className="photo-container">
          <h2>Results</h2>
          {this.state.loading ? <Loader /> : <PhotoList data={this.state.photos} />}
      </div>
    );
  }
}

export default PhotoContainer;
