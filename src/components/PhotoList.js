import React from 'react';
import Photo from './Photo';
import NotFound from './NotFound';

const PhotoList = props => {
  let photos;

  if (props.data.length > 0) {
      photos = props.data.map(photo => 
      <Photo farm={photo.farm} secret={photo.secret} server={photo.server} key={photo.id} id={photo.id} />
    );
  } else {
    photos = <NotFound />
  }

  return (
    <ul>
        {photos}
    </ul>
  );

}

export default PhotoList;