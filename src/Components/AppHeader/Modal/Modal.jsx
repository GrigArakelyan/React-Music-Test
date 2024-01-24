import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import closeIcon from "../../../icons/close.png"
import "./modal.css"
import MusicUploadForm from './MusicUploadForm/MusicUploadForm';


const BasicModal = ({handleClose, open}) => {


  return (
    <div >
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="closeBox">
          <img onClick={handleClose} src={closeIcon} className="icon" alt="close" />  
          <MusicUploadForm handleClose={handleClose}/>
        </Box>
      </Modal>
    </div>
  );
}


export default BasicModal