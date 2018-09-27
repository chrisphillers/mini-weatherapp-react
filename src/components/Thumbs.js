import React from 'react';
import Thumb from './Thumb';

class Thumbs extends React.Component {
  constructor(){
    super();
  }
  render(){
    console.log(this.props.images)
    return (
      <div className="thumbs" id="thumbs">
        {this.props.images.map(image => { 
          return  <Thumb receiveImages={this.props.receiveImages} key={image.id} thumbnail={image} />;
        }
        )}
      </div>
    );
  }
}

export default Thumbs;
