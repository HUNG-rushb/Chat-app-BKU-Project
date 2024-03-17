export const handleChangeFile = (
  event,
  setContent,
  setSelectedFile,
  setPreviewImage,
) => {
  const file = event.target.files[0];
  const reader = new FileReader();
  reader.onload = async (event) => {
    const imageUrl = event.target.result;
    const newImage = new Image();
    newImage.src = imageUrl;

    setPreviewImage(imageUrl);
    setContent(imageUrl);
  };
  reader.readAsDataURL(file);
  setSelectedFile(file);
};
