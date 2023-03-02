import toast from 'react-hot-toast';

// VALIDATING LOGIN PAGE USERNAME
export async function usernameValidate(values) {
    const errors = usernameVerify({}, values)
    return errors;
}

// VALIDATING PASSWORD PAGE PASSWORD
export async function passwordValidate(values) {
    const errors = passwordVerify({}, values)
    return errors;
}

// VALIDATING RESET PASSWORD PAGE 
export async function resetPasswordValidate(values) {
    const errors = resetPasswordVerify({}, values)
    return errors;
}

// VALIDATING REGISTER PAGE 
export async function registerValidate(values) {
    const errors = usernameVerify({}, values)
    passwordVerify(errors, values)
    emailVerify(errors, values)

    return errors;
}

export async function profileValidate(values) {
    const errors = emailVerify({}, values)
    return errors;
}


// VALIDATING USERNAMES
function usernameVerify(error = {}, values) {
    if (!values.username) {
        error.username = toast.error("Username Required...!")
    } else if (values.username.includes(' ')) {
        error.username = toast.error("Invalid Username...!")
    }

    return error;
}

// VALIDATING PASSWORD
function passwordVerify(error = {}, values) {
    const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

    if (!values.password) {
        error.password = toast.error("Password Required...!")
    } else if (values.password.includes(" ")) {
        error.password = toast.error("Invalid Password...!")
    } else if (values.password.length < 4) {
        error.password = toast.error("Password must be at least 5 characters long...!")
    } else if (!specialChars.test(values.password)) {
        error.password = toast.error("Password must contain atleast one special character...!")
    }

    return error;

}

// VALIDATING RESET  PASSWORD
function resetPasswordVerify(errors = {}, values) {
    if (!values.password || !values.confirmPassword) {
        errors.resetPassword = toast.error("Please fill both the fields...!")
    }
    else if (values.password !== values.confirmPassword) {
        errors.resetPassword = toast.error("Password must be same...!")
    }
    return errors
}

/** validate email */
function emailVerify(errors = {}, values) {
    if (!values.email) {
        errors.email = toast.error("Email required...!")
    } else if (values.email.includes(' ')) {
        errors.email = toast.error("Email Invalid...!")
    } else if (!/[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(values.email)) {
        errors.email = toast.error("Email Invalid...!")
    }

    return errors;
}