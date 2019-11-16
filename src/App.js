import React, { Component } from 'react';
import './css/index.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PhotoContainer from './components/PhotoContainer';
import SearchForm from './components/SearchForm';
import Nav from './components/Nav';
import Nf404 from './components/Nf404';

class App extends Component {  
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Route component={SearchForm} />
        <Nav />
        <Switch>
          <Route exact path='/' render = { () => <PhotoContainer search="puppy" />} />
          <Route exact path='/search' />
          <Route path='/search/:search' render = { ({match}) => <PhotoContainer search={match.params.search} />} />
          <Route path='/puppies' render = { () => <PhotoContainer search="puppy" />} />
          <Route path='/kittens' render = { () => <PhotoContainer search="kitten" />} />
          <Route path='/beaches' render = { () => <PhotoContainer search="beach" />} />
          <Route component={Nf404} />
        </Switch>
      </div>
      </BrowserRouter>
    );

  }
}

export default App;
