import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import closeIcon from "../../icons/close.png"
import "./modal.css"
import MusicUploadForm from '../MusicUploadForm/MusicUploadForm';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 700,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: 24,
  p: 4,
};


const BasicModal = ({handleClose, open}) => {


  return (
    <div >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="closeBox">
           <Button className='closeButton'onClick={handleClose}>
             <img src={closeIcon} className="icon" alt="close" />  
           </Button>
           <MusicUploadForm handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}


export default BasicModal