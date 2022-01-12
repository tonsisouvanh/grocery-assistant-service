import React, {useState} from "react";
import axios from "axios";

function AddProduct() {
    const [imageSelected, setImageSelected] = useState('');


  const uploadImage = (files) => {
    const formData = new FormData();
    formData.append("file", imageSelected);
    formData.append("upload_preset", "ekvbfqtf");
    formData.append("folder", 'category');

    axios
      .post("https://api.cloudinary.com/v1_1/shoppin/image/upload", formData)
      .then((res) => {
          console.log(res);
      });
  };

  return (
    <>
      <div>
        {/* <form onSubmit={handleSubmit}>
              <input type="file" />
              <input type="submit" ></input>
          </form> */}
        <input type="file" onChange={(e) => setImageSelected(e.target.files[0])} />
        <button onClick={uploadImage}>Submit</button>
      </div>
    </>
  );
}

export default AddProduct;
