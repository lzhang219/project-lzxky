import { React, useState, useEffect } from "react";
import { storage } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

const Create = () => {
    useEffect(() => {
        document.title = "New School - Project LZXKY";
    }, []);
    const [error, setError] = useState(null);
    //const [imageUrl, setImageUrl] = useState(null);
    const [name, setName] = useState("");
    const [image, setImage] = useState(null);
    const [description, setDescription] = useState("");
    const [message, setMessage] = useState("");
    const [disabled, setDisabled] = useState(false);
    const handleCreate = (name, image, description) => {
        if (!name || !description) {
            setError("Please fill in all fields");
            return;
        }
        if (!image) {
            setError("Please upload an image");
            return;
        }
        // generate name for image to prevent overwriting
        const imageName = new Date().getTime() + "-" + image.name;
        const storageRef = ref(storage, `images/${imageName}`);
        const uploadTask = uploadBytesResumable(storageRef, image);
        uploadTask.on('state_changed', 
            (snapshot) => {
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                setMessage('Uploading image, please wait...');
                console.log('Upload is ' + progress + '% done');
                switch (snapshot.state) {
                    case 'paused':
                        console.log('Upload is paused');
                        break;
                    case 'running':
                        console.log('Upload is running');
                        break;
                    default:
                        console.log('Upload is done');
                }
            }, 
            (error) => {
                setError(error);
            }, 
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {

                    //setImageUrl(downloadURL);
                    const school = {
                        name: name,
                        imageURL: downloadURL,
                        description: description
                    };
                    // send school to server
                    fetch("/api/create", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify(school),
                    })
                    .then((response) => response.json())
                    .then((data) => {
                        let i = 3;
                        setMessage('Image uploaded successfully, redirecting to home page in '+ i + ' seconds...');
                        setDisabled(true);
                        setInterval(() => {
                            i--;
                            setMessage('Image uploaded successfully, redirecting to home page in '+ i + ' seconds...');
                            if (i === 0) {
                                window.location.href = "/";
                            }
                        }, 1000);
                    })
                    .catch((error) => {
                        console.error("Error:", error);
                        setError("An unexpected error occurred while creating the school. Please try again.");
                    });
                });
            }
        );
    };
    return (
        <div className='h-full w-full flex justify-center items-center flex-col'>
            <div className='w-full flex justify-center items-right'>
                <h1 className='text-4xl font-bold mt-3 mx-auto text-center'>Create School</h1>
            </div>
            <div className='w-full flex justify-center flex-row pt-10'>
                <div className='flex-col h-full flex md:flex-none w-3/4 md:grid md:grid-rows-6 md:grid-cols-4 gap-y-2 w-1/1'>
                    <label className='text-lg text-center md:text-left font-bold my-auto md:mx-0'>School Name*</label>
                    <input className='border-2 border-gray-300 rounded-md p-2 my-auto md:col-span-3' type="text" placeholder="School Name" 
                            name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}
                            disabled={disabled}/>
                    <label className='text-lg text-left font-bold my-auto'>School Image*</label>
                    <input className='border-2 border-gray-300 p-2 rounded-md col-span-3 my-auto
                    file:cursor-pointer cursor-pointer file:border-0 file:py-2.5 file:px-4
                     file:mr-4 file:bg-blue-500 file:hover:bg-blue-600 file:text-white' type="file"
                        accept="image/png, image/jpeg, image/jpg" placeholder="School Image URL" name="image" id="image" 
                        onChange={
                            (e) => {
                                setImage(e.target.files[0]);
                            }
                        }
                        disabled={disabled}/>
                    <label className='text-lg text-left font-bold mb-auto row-span-4'>School Description*</label>
                    <textarea className='border-2 border-gray-300 p-2 rounded-md md:col-span-3 md:row-span-4 md:resize-none'
                     type="text" placeholder="School Description" name="description" id="description"
                     value={description} onChange={
                            (e) => setDescription(e.target.value)
                    } disabled={disabled}/>
                    <button className='bg-blue-500 text-white px-5 py-2 rounded-md mt-3 hover:mt-2.5
                                    hover:bg-blue-600 hover:text-gray-300 col-span-4' onClick={
                                        (e) => {handleCreate(name, image, description);
                                        e.preventDefault();
                                        }
                                    }
                            disabled={disabled}>Submit</button>
                </div>
            </div>
            <div className={`w-3/4 mt-3 rounded-md ${error || message ? 'border border-gray-300' : 'hidden'}
                            ${error ? 'bg-red-400' : 'bg-green-400'} `}>
                <p className='text-slate-600 text-xl2'>{error}</p>
                <p className='text-slate-600 text-xl2'>{message}</p>
            </div>
        </div>
    );
}

export default Create;