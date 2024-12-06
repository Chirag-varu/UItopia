import { useState, useRef } from "react";

export const useImageUpload = () => {
  const [_image, setImage] = useState<File | null>(null); // State to store the image file
  const [fileName, setFileName] = useState<string | null>(null); // State to store the file name
  const [previewUrl, setPreviewUrl] = useState<string | null>(null); // State to store the image preview URL
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Reference to the file input element

  // Handle file input change
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]; // Get the selected file
    if (file) {
      setImage(file);
      setFileName(file.name); // Store the file name
      setPreviewUrl(URL.createObjectURL(file)); // Set the preview URL for the image
    }
  };

  // Handle thumbnail click (opens the file input dialog)
  const handleThumbnailClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click(); // Trigger the file input click event
    }
  };

  // Handle image removal
  const handleRemove = () => {
    setImage(null); // Clear the image
    setFileName(null); // Clear the file name
    setPreviewUrl(null); // Clear the preview URL
  };

  return {
    previewUrl,
    fileInputRef,
    handleThumbnailClick,
    handleFileChange,
    handleRemove,
    fileName,
  };
};
