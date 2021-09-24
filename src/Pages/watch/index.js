import React from 'react';
import Header from "../../Component/Header/desktopHeader/Header"
import Footer from '../../Component/Footer/footer'
import '../../Styles/watch.scss'

const watch = () => {
    return (
        <div>
           <div>
             <Header/>
           </div>
           <hr/>
           <div className = "watch">
           <div className = "iframe">
            <iframe width="100%" height="100%"
              src="https://www.youtube.com/embed/tgbNymZ7vqY?controls=0" frameBorder >
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

export default watch;