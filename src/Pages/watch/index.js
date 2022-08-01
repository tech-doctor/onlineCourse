import React from 'react';
import Header from "../../Component/Layout/Header/desktopHeader"
import Footer from '../../Component/Layout/Footer'
import '../../Styles/watch.scss'
import { useParams } from 'react-router-dom';

const Watch = () => {
  const videoId = useParams().id;
    return (
      <div>
          <div>
            <Header/>
          </div>
          <div className = "watch">
          <div className = "iframe">
          <iframe title ="#" width="100%" height="100%"
            src={`https://www.youtube.com/embed/${videoId}?color=white`} frameBorder = 'true' >
          </iframe>
        </div>
          </div>
          <hr/>
      </div>
    );
}

export default Watch;