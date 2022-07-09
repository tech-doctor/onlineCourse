import React, {useEffect, useState} from 'react';
import {useParams,useHistory} from 'react-router-dom';
import { getSelectedCourse } from '../../Store/courseSlice';
import { updateCheckoutList } from '../../Store/databaseSlice';
import { useSelector, useDispatch } from 'react-redux';
import ReactPlayer from 'react-player/lazy'
//import ReactPlayer from 'react-player/youtube'
import {Modal, ModalOverlay, ModalContent, ModalFooter,ModalBody, Button, useDisclosure} from '@chakra-ui/react'

const  VideoPlayer = ({title}) => {
  const {id} = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const [videoHasEnded, setVideoHasEnded] = useState(false);
  const [videoIsReady, setVideoIsReady] = useState(false);
  const [isPurchased, setIsPurchased] = useState(false);
  const purchasedItem = useSelector(state => state.rootReducer.databaseSlice.purchasedItem);
  const selectedCourses = useSelector(getSelectedCourse);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    let mounted = true;
    if(mounted){
      purchasedItem.forEach(element => {
        if(element.title === title){
          setIsPurchased(true);
        }
      })
    }
     return () => {
       mounted = false;
     }
  },[id, title, purchasedItem]);


  const handleBuyButton = ()  => {
    dispatch(updateCheckoutList(selectedCourses[0]));
    history.push('/cart/checkout');
  }

  const handleVideoEnded = () => {
    setVideoHasEnded(true);
    setVideoIsReady(false);
    onOpen();
  }

  const handleVideoReady = () => {
    setVideoIsReady(true);
    setVideoHasEnded(false);
  }

  const handleVideoError = () => {
    // setVideoHasEnded(true);
    // setVideoIsReady(false);
    // onOpen();
  }

  return (
    <div className='wrapper'>
      <div>
        <Modal 
        isOpen={isOpen} onClose={onClose} isCentered>
          <ModalOverlay 
            backdropFilter='auto'
            backdropInvert='20%'
            backdropBlur='4px'
          />
          <ModalContent
           borderRadius={'none'}
           padding={'0.8em 0'}
          >
            <ModalBody
              textAlign={'center'}
              fontSize={'18px'}
              fontWeight={'semibold'}
              fontFamily={'mono'}
            >
              Kindly make payment for this Course to allow full access!
            </ModalBody>
            <ModalFooter
             bg={'white'}>
              <Button 
               bg={'#02897A'}
               fontFamily={'mono'}
               color={'white'}
               border={'none'}
               borderRadius={'3px'}
               cursor={'pointer'}
               _hover={{
                  backgroundColor: '#05645A',
               }}
               _focus={{
                  outline: 'none',
                }}
               mr={3}
                onClick = {handleBuyButton}>
                Buy Now
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </div>
      {videoHasEnded && <img className='img' src={`/Assets/video2.jpg`} alt={null}/>}
      <ReactPlayer 
      url={`https://www.youtube.com/watch?v=${id}`}
      playing={true}
      config={{
        youtube: {
          playerVars: { 
            showinfo: 1,
            end : !isPurchased && '5',
            origin: window.location.href,
            modestbranding: 1,
            rel: 0,
          }
        },
      }}
      width='100%'
      height='300px'
      light={videoIsReady? '/Assets/video2.jpg' : null}
      playIcon={videoIsReady? <img width={'45px'} height= {'45px'} src="/Assets/pause.png" alt=""/>: null}
      //previewTabIndex={-1}
      fallback={<div>Loading...</div>}
      onReady={handleVideoReady}
      onEnded={handleVideoEnded}
      onError={handleVideoError}
       />
      {videoHasEnded &&
      <button 
        onClick={onOpen}
        className='button'>
        <img width={'45px'} height= {'45px'} src="/Assets/pause.png" alt=""/>
      </button>}
    </div>
  );
}

export default React.memo(VideoPlayer);