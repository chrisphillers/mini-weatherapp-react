import React from 'react';
import Thumbs from './Thumbs';
import Info from './Info';
import Search from './Search';

class App extends React.Component {
  constructor() {
    super();
    this.state = {images: [], currentImage: ''};
    this.getDescription = this.getDescription.bind(this); 
    this.fetchPhotos = this.fetchPhotos.bind(this);
    this.photoPassArray = this.photoPassArray.bind(this);
    this.receiveImages = this.receiveImages.bind(this);
    this.receiveSearch = this.receiveSearch.bind(this);

  }

  receiveImages(image){
    console.log(image)
    this.setState({currentImage: image.urls.regular});
   
  }

  receiveSearch(query){
    const URL = `https://api.unsplash.com/search/photos?page=1&query=${query}&client_id=d1463f432cce4150640ff56ee13c1f94ec0b2993db4395bcb8913f34daeb0d48`
    this.fetchPhotos(URL);
  }
  
  render() {

    return (
      <main className="content">
        <header className="header">
          <h1 className="title">
            <i>Meteor</i>
            <i>opolis</i>
          </h1>
        </header>

        <figure className="photo" id="photo"><img src={this.state.currentImage}/></figure>

        <Info />
        <Thumbs images={this.state.images} receiveImages={this.receiveImages}/>
        <Search receiveSearch={this.receiveSearch}/>
      </main>
    );
  }
  componentDidMount(){

  this.getDescription();
    
// generates the api url with location 
// const generateApi = (location) => {
//   if (location == undefined) {
  }


// 
getDescription() {  
 const weatherDescriptionNoSpace = 'Pyongyang';
  const weatherURL = `https://api.unsplash.com/search/photos?page=1&query=${weatherDescriptionNoSpace}&client_id=d1463f432cce4150640ff56ee13c1f94ec0b2993db4395bcb8913f34daeb0d48`;
  this.fetchPhotos(weatherURL);
}



fetchPhotos(url) {
  // main news body fetch - button changeable
  fetch(url) // by default fetch makes a GET request
      .then(function (response) {
          return response.json();
      })
      .then(body=> {
          //  parentNode.innerHTML = "";
         
          this.photoPassArray(body.results);
          
      });
}

photoPassArray(photoArray){
  console.log(photoArray);
  this.setState({images: photoArray, currentImage: photoArray[0].urls.regular})
  
}

}

export default App;
