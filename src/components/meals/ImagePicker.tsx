"use client";
import { useRef, useState, ChangeEvent } from "react";
import classes from "./ImagePicker.module.css";
import Image from "next/image";

interface ImagePickerProps {
  label: string;
  name: string;
}

const ImagePicker: React.FC<ImagePickerProps> = ({ label, name }) => {
  const selectedImage = useRef<HTMLInputElement | null>(null);
  const handlePickImageBtnClick = () => {
    selectedImage.current?.click();
  };
  const [pickedImage, setPickedImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handlePickImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) {
      setPickedImage(null);
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  return (
    <div className={classes.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={classes.control}>
        <div className={classes.preview}>
          {!pickedImage && <p>No Image has been picked</p>}
          {pickedImage && typeof pickedImage === "string" && (
            <Image src={pickedImage} alt="picked image" fill />
          )}
        </div>
        <input
          className={classes.input}
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          ref={selectedImage}
          onChange={handlePickImageChange}
          required
        />
        <button
          type="button"
          className={classes.button}
          onClick={handlePickImageBtnClick}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
