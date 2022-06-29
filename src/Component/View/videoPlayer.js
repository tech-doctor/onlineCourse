import React, {useEffect, useState} from 'react';
import {useParams, useHistory} from 'react-router-dom';
import { useSelector } from 'react-redux';

const  VideoPlayer = ({title}) => {
  const {id} = useParams();
  const history = useHistory();

  const [isPlaying, setIsPlaying] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem);


  useEffect(() => {
    let mounted = true;
    const script = document.createElement("script");
    if(mounted){
      script.src = "https://www.youtube.com/iframe_api";
      script.async = true;
      document.body.appendChild(script);
      window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
      purchasedItem.forEach(element => {
        if(element.snippet.title === title){
          setIsPurchased(true);
          console.log('bought')
        }
      })
    }
     return () => {
       document.body.removeChild(script);
       mounted = false;
     }
   },[id]);


/////////////new/////////////////////////////
var player;

function onYouTubeIframeAPIReady() {
  player = new window.YT.Player(id, {
    events: {
      //onReady: initialize
    }
  });
}


function playVideo() {
  setIsPlaying(true);
  console.log(player);
}


  

  return (
    <div className='wrapper'>
      {!isPlaying && <img className='img' src={`/Assets/video2.jpg`} alt=""/>}
    <iframe loading='lazy' id= {id} width="100%" height="300px"
    src={`https://www.youtube.com/embed/${id}?enablejsapi=1&color=white&controls=1&iv_load_policy=3&modestbranding=1&rel=0&showinfo=1&autohide=1${!isPurchased &&'&end=5'}${isPlaying && '&muted=1&autoplay=1'}`}
    frameBorder="0"
    allow="autoplay"
    ></iframe>
    {!isPlaying &&
    <button 
    onClick={playVideo}
    className='button'>
      <img width={'45px'} height= {'45px'} src="/Assets/pause.png" alt=""/>
    </button>}
    </div>
  );
}

export default React.memo(VideoPlayer);