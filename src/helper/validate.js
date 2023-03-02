import toast from 'react-hot-toast';

// VALIDATING LOGIN PAGE USERNAME
export async function usernameValidate(values) {
    console.log(values)
    const errors = usernameVerify({}, values)
    return errors;
}


// VALIDATING USERNAMES
function usernameVerify(error = {}, values) {
    console.log(values)
    if (!values.username) {
        error.username = toast.error("Username Required...!")
    } else if (values.username.includes(' ')) {
        error.username = toast.error("Invalid Username...!")
    }

    return error;
}