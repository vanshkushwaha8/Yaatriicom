import React, { useState } from 'react'
import './ReviewR.css'
const ReviewR = () => {
    const [selectedImages, setSelectedImages] = useState([]);
    const [descriptions, setDescriptions] = useState([]);
    const [comments, setComments] = useState([]);
  
    const onSelectFile = (event) => {
      const selectedFiles = event.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file) => {
        return URL.createObjectURL(file);
      });
  
      setSelectedImages((previousImages) => previousImages.concat(imagesArray));
      setComments((previousComments) => previousComments.concat(Array(selectedFilesArray.length).fill('')));
  
      // Reset input value for Chrome bug
      event.target.value = "";
    };
  
    function deleteHandler(image) {
      const confirmDelete = window.confirm("Are you sure you want to delete this image?");
      if (confirmDelete) {
        setSelectedImages(selectedImages.filter((e) => e !== image));
        const index = selectedImages.findIndex((img) => img === image);
        const updatedDescriptions = [...descriptions];
        updatedDescriptions.splice(index, 1);
        setDescriptions(updatedDescriptions);
        const updatedComments = [...comments];
        updatedComments.splice(index, 1);
        setComments(updatedComments);
        URL.revokeObjectURL(image);
      }
    }
  
    const handleDescriptionChange = (index, event) => {
      const updatedDescriptions = [...descriptions];
      updatedDescriptions[index] = event.target.value;
      setDescriptions(updatedDescriptions);
    };
  
    const handleCommentChange = (index, event) => {
      const updatedComments = [...comments];
      updatedComments[index] = event.target.value;
      setComments(updatedComments);
    };
  
    return (
      <section className='section-R'>
        <label className='label-R'>
          + Add Images
          <br />
          <span>up to 10 images</span>
          <input
            type="file"
            name="images"
            onChange={onSelectFile}
            multiple
            accept="image/png , image/jpeg, image/webp"
          />
        </label>
        <br />
  
        {selectedImages.length > 0 &&
          (selectedImages.length > 10 ? (
            <p className="error">
              You can't upload more than 10 images! <br />
              <span>
                please delete <b> {selectedImages.length - 10} </b> of them{" "}
              </span>
            </p>
          ) : (
            <button
              className="upload-btn"
              onClick={() => {
                console.log(selectedImages);
                console.log(descriptions);
                console.log(comments);
              }}
            >
              UPLOAD {selectedImages.length} IMAGE
              {selectedImages.length === 1? "" : "S"}
            </button>
          ))}
  
        <div className="imagesR">
          {selectedImages &&
            selectedImages.map((image, index) => {
              return (
                <div key={image} className="imageR">
                  <img src={image} height="200" alt="upload" />
                  <input
                    type="text"
                    value={descriptions[index] || ""}
                    placeholder="Add description..."
                    onChange={(event) => handleDescriptionChange(index, event)}
                  />
                  <input className='input-R'
                    type="text"
                    value={comments[index] || ""}
                    placeholder="Add comment..."
                    onChange={(event) => handleCommentChange(index, event)}
                  />
                  <button onClick={() => deleteHandler(image)}>
                    Delete Image
                  </button>
                  <p>{index + 1}</p>
                  {comments[index] && <p>{comments[index]}</p>}
                </div>
              );
            })}
        </div>
      </section>
  )
}

export default ReviewR
