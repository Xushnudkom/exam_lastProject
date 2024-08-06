"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const KeepMountedModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form submitted");
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <Modal
      open={open}
      keepMounted
      aria-labelledby="keep-mounted-modal-title"
      aria-describedby="keep-mounted-modal-description"
    >
   <div className="flex justify-center items-center pt-[70px]">
   <Box className=" w-[550px] pt-[40px] pr-[40px] pl-[40px]  bg-white rounded shadow-lg">
        <div className="flex justify-end">
        <IconButton
          className="top-0 flex mb-[20px] items-end justify-end"
          onClick={handleClose}
        >
          <CloseIcon />
        </IconButton>
        </div>
        <Typography
          id="keep-mounted-modal-title"
          variant="h6"
          component="h2"
          className="text-[24px] font-semibold mb-2"
          sx={{fontSize:"24px", fontWeight:"500px"}}
        >
          С вашего карты будет списано сумма:
        </Typography>
        <Typography className="text-[20px] font-semibold mt-[50px] ">
        Ваши карта данные
        </Typography>
        <Typography className="text-[20px] font-medium mb-[10px] mt-[10px] ">
        Номер карты
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          className="flex flex-col gap-4"
        >
          <input type="text" placeholder="1234 5678 9012 3456" className="text-[20px] w-[350px] bg-[#F2F2F2] rounded-md border-none p-4"/>
          <Typography className="text-[20px] font-medium mt-[10px]">
          Срок карты
          </Typography>
          <input type="text" placeholder="__  / __" className="text-[20px] w-[350px] bg-[#F2F2F2] rounded-md border-none p-4 pr-[100px] mb-[40px]"/>
          <button
            type="submit"
            variant="contained"
            className="bg-[#FBD029] mb-[50px]  hover:bg-[#d7b427] text-black font-semibold text-[20px] py-2 rounded-md"
          >
            Оплатить
          </button>
        </Box>
      </Box>
   </div>
    </Modal>
  );
};

export default KeepMountedModal;
