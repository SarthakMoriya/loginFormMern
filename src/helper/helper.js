import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8080'

/**Authenticate Function */
export async function authenticate(username) {
    try {
        return await axios.post('/api/v1/authenticate', { username })
    } catch (err) {
        return { error: "Username does'nt exists...!" }
    }
}

/**Get User Details */
export async function getUser({ username }) {
    try {
        const { data } = await axios.get(`/api/v1/users/${username}`)
        return { data }
    } catch (error) {
        return { error: "Username does'nt exists...!" }

    }
}

/**Register User Function */
export async function registerUser(credentials) {
    try {
        const { data: { msg }, status } = await axios.post('/api/v1/register', credentials)
        let { username, email } = credentials;

        /**send email */
        if (status === 201) {
            await axios.post('/api/v1/registerMail', { username, userEmail: email, text: msg })
        }

        return Promise.resolve(msg);
    } catch (error) {
        return Promise.reject({ error })
    }
}

/**Verify Function */
export async function verifyPassword({ username, password }) {
    try {
        if (username) {
            const { data } = await axios.post('/api/v1/login', { username, password })
            return Promise.resolve({ data })
        }
    } catch (err) {
        return Promise.reject({ error: 'Password doesn\'t match' })
    }
}

/**Update User Profile Function */
export async function updateUser(response) {
    try {
        const token = await localStorage.getItem('token')
        const data = await axios.put('/api/v1/updateUser', response, { headers: { "Authorization": `Bearer ${token}` } })

        return Promise.resolve({ data })
    } catch (error) {
        return Promise.reject({ error: "Couldn't update Profile...!" })
    }
}

export async function generateOTP(username) {
    try {
        const { data: { code }, status } = await axios.get('/api/v1/generateOTP', { params: { username } })

        if (status === 201) {
            //sara user ka data leke atahai getUser() func.
            let { data: { email } } = await axios.getUser({ username })
            let text = `Your Password Recovery OTP is ${code}. Verify and Reover Your Password!`

            await axios.post('/api/v1/registerMail', {
                username,
                userEmail: email,
                text,
                subject: "Password Recovery OTP"
            })
        }

        Promise.resolve(code);

    } catch (error) {
        return Promise.reject({ error })
    }
}

/**VERIFY OTP */
export async function verifyOTP({ username, code }) {
    try {
        const { data, status } = await axios.get('/api/v1/verifyOTP', { params: { username, code } })
        return { data, status };
    } catch (error) {
        return Promise.reject({ error })
    }
}

/**RESET PASSWORD */
export async function resetPassword({ username, password }) {
    try {
        const { data, status } = await axios.put('/api/v1/resetPassword', { username, password })
        return Promise.resolve({ data, status });
    } catch (error) {
        return Promise.reject({ error })
    }
    // yoyo
}
