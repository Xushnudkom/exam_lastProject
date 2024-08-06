"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import IconButton from "@mui/material/IconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
import { login } from "../../service/auth.service.";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const KeepMountedModal = ({ open, handleClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = { email, password };
    try {
      const status = await login(data);
      if (status === 200) {
        toast.success("Login successful!");
        handleClose();
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <ToastContainer />
      <Modal
        open={open}
        keepMounted
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[378px]  p-6 bg-white rounded shadow-lg">
          <IconButton
            className="absolute top-0 left-[310px]"
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
            className="text-[24px] font-semibold mb-2"
            sx={{ fontSize: "24px", fontWeight: "500px" }}
          >
            Вход в аккаунт
          </Typography>
          <Typography className="pb-[20px] ">
            Если Вы не зарегистрированы, нажмите кнопку{" "}
            <span className="text-[#FBD029] hover:text-[#b99f37] cursor-pointer">
              Регистрация
            </span>
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            className="flex flex-col gap-4"
          >
            <TextField
              id="email"
              placeholder="Email"
              type="email"
              variant="outlined"
              fullWidth
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-[#F2F2F2]"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              id="password"
              placeholder="Password"
              type={showPassword ? "text" : "password"}
              variant="outlined"
              fullWidth
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-[#F2F2F2]"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
            <button
              type="submit"
              variant="contained"
              className="bg-[#FBD029] mt-[10px] hover:bg-[#d7b427] mb-[20px] text-white py-2 rounded-md"
            >
              Войти
            </button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default KeepMountedModal;
