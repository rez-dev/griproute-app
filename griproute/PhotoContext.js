// PhotoContext.js
import React, { createContext, useState, useContext } from 'react';

const PhotoContext = createContext();

export const PhotoProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  const addPhoto = (newPhoto) => {
    setPhotos(prevPhotos => [...prevPhotos, newPhoto]);
  };

  return (
    <PhotoContext.Provider value={{ photos, addPhoto }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => useContext(PhotoContext);