/** Convert image to base64 */

export default function convertToBase64(file) {
    return new Promise((resolve, reject) => {
        // obj creation of fileReader
        const fileReader = new FileReader();
        // storing file
        fileReader.readAsDataURL(file);

        fileReader.onload = () => {
            resolve(fileReader.result);
        }

        fileReader.onerror = (error) => {
            reject(error);
        }


    })
}