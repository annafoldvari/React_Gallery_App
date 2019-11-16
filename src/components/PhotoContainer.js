import React, { Component } from 'react';
import apiKey from '../config';
import Photo from './Photo';
import NotFound from './NotFound';
import axios from 'axios';

class PhotoContainer extends Component {
  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    };
  }

  componentDidMount() {
    if (this.props.search) {
      this.performSearch(this.props.search);
    }
  }

  componentDidUpdate() {
    if (this.props.search) {
      this.performSearch(this.props.search);
    }
  }

  
  performSearch = (query) => {
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

    let photos;

    if (this.state.photos.length > 0) {
      photos = this.state.photos.map(photo => 
        <Photo farm={photo.farm} secret={photo.secret} server={photo.server} key={photo.id} id={photo.id} />
      );
    } else {
      photos = <NotFound />
    }

    const loader = <img class="loading_icon" src="/loading.gif" alt="loading indicatator"/>;

    return (
      <div className="photo-container">
          <h2>Results</h2>
          <ul>
            {this.state.loading ? loader : photos}
          </ul>
      </div>
    );
  }
}

export default PhotoContainer;
