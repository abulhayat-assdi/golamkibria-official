import imageCompression from 'browser-image-compression';

export const uploadToImgBB = async (imageFile) => {
    const apiKey = '8c52fc3fda3fb36c95de8ac169990885'; // User provided API key

    try {
        // Compress image options
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1920,
            useWebWorker: true,
            fileType: 'image/webp'
        };

        const compressedFile = await imageCompression(imageFile, options);

        const formData = new FormData();
        formData.append('image', compressedFile);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
            method: 'POST',
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            return data.data.url;
        } else {
            throw new Error(data.error.message);
        }
    } catch (error) {
        console.error('Error uploading image:', error);
        throw error;
    }
};
