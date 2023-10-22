import { Button } from "@mui/material";
import React, { useState } from "react";
import ImageLogo from "./image.svg";
import "./ImageUpload.css";
import strage from "./firebase";
import { ref, uploadBytesResumable } from "firebase/storage";
import { uploadBytes } from "firebase/storage";
import { StorageRounded } from "@mui/icons-material";

const ImageUploader = () => {
  const OnFileUploadeToFirebase = (e) => {
    //console.log(e.target.files[0].name);
    const file = e.target.files[0];
    const storageRef = ref(strage, "image/" + file.name);
    uploadBytes(storageRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
    const uploadImage = uploadBytesResumable(storageRef, file);
  };

  return (
    <>
      <div className="outerBox">
        <div className="title">
          <h2>画像アップローダー</h2>
          <p>JpegかPngの画像ファイル</p>
        </div>
        <div className="imageUplodeBox">
          <div className="imageLogoAndText">
            <img src={ImageLogo} alt="imagelogo" />
            <p>ここにドラッグ＆ドロップしてね</p>
          </div>
          <input
            className="imageUploadInput"
            multiple
            name="imageURL"
            accept=".png, .jpeg, .jpg"
            type="file"
            onChange={OnFileUploadeToFirebase}
          />
        </div>
        <p>または</p>
        <Button variant="contained">
          ファイルを選択
          <input
            className="imageUploadInput"
            type="file"
            accept=".png, .jpeg, .jpg"
            onChange={OnFileUploadeToFirebase}
          />
        </Button>
      </div>
    </>
  );
};

export default ImageUploader;
