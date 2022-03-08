import React from 'react';
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer'
import '../../Styles/watch.scss'
import { useParams } from 'react-router-dom';

const Watch = () => {
  const videoId = useParams().id;
    return (
      <div>
          <div>
            <Header/>
          </div>
          <hr/>
          <div className = "watch">
          <div className = "iframe">
          <iframe title ="#" width="100%" height="100%"
            src={`https://www.youtube.com/embed/${videoId}?controls=0`} frameBorder = 'true' >
          </iframe>
        </div>
          </div>
          <hr/>
          <div>
            <Footer/>
          </div>
      </div>
    );
}

export default Watch;