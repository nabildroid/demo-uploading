import React, { useEffect, useState} from "react";
import { uploadFile } from "./urtil";


function App() {

  const [isUploading, setIsUploading] = useState(false);

  const [uploadedImage, setUploadedImage] = useState("");

  async function onUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files![0];
    if (!file) return;

    

    setIsUploading(true);
    const url = await uploadFile(file) as string;
    setUploadedImage(url);

    setIsUploading(false);
  }

  if (isUploading) {
    return <div>Uploading ...</div>;
  }

  if (uploadedImage) {
    return <img src={uploadedImage} alt="uploaded image" />;
  }

  return (
    <div>
      <input type="file" placeholder="upload file" onChange={onUpload} />
    </div>
  );
}

export default App;
