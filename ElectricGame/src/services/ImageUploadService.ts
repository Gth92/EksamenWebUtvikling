import axios from 'axios';

const ImageUploadService = (
    () => {

        const imageUploadApiEndpoint = "https://localhost:7264/File";   // Change to your localhost..     

        const postImage = async (image: File) => {
            const formData = new FormData();
            formData.append('file', image);

            const result = await axios({
                url: imageUploadApiEndpoint,
                method: 'POST',
                data: formData,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(result.data);
            return result.data as string;
        };

        return {
            postImage
        };
    }
)();
export default ImageUploadService;