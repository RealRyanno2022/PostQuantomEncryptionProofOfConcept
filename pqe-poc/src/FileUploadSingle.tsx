import { ChangeEvent, useState } from 'react';

const FileUploadSingle = () => {
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`,
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <div 
    // className="flex flex-col items-center mt-8"
    >
      <input
        type="file"
        onChange={handleFileChange}
        // className="my-4 px-2 border-none rounded-md"
      />
      <div
    //    className="mb-4 text-sm text-gray-600"
       >
        {file && `${file.name} - ${file.type}`}
      </div>
      <button
        onClick={handleUploadClick}
        // className="bg-blue-700 text-white px-4 py-2 border-none rounded-md cursor-pointer transition-colors duration-300 ease-in-out hover:bg-blue-600"
      >
        Upload your Picture!
      </button>
    </div>
  );
}

export default FileUploadSingle;