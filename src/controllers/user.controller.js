import {User} from '../models/user.model.js';

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        //basic validation
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        //check if user already exists
        const existing = await User.findOne({ email: email.toLowerCase().trim() });
        if (existing) {
            return res.status(400).json({ message: "Username or email already in use." });
        }

        //create new user
        const newUser = await User.create({
            username: username.toLowerCase().trim(),
            password: password,
            email: email.toLowerCase().trim(),
            loggedIn: false,
        });
        res.status(201).json({ message: "User registered successfully.", userId: newUser._id });

    } catch (error) {
        return res.status(500).json({ message: "Internal server error.", error: error.message });
    }
}

const loginUser = async (req, res) => {
    try{
        //checking if the user already exists
        const {email, password} = req.body;
        const user = await User.findOne({
            email: email.toLowerCase().trim()
        });
        if(!user){
            return res.status(404).json({
                message: "User not found."
            });
        }

        //compare passwords
        const isMatch = await user.comparePassword(password);
        if(!isMatch){
            return res.status(401).json({
                message: "Invalid credentials."
            });
        }   

        //login successful
        return res.status(200).json({
            message: "Login successful.",
            id: user._id,
            username: user.username,
            email: user.email

        });  
    }catch(error){
        res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
}

const logoutUser = async (req, res) => {
    try{
        const {email} = req.body;
        const user = await User.findOne({
            email: email.toLowerCase().trim()
        });
        if(!user){
            return res.status(404).json({
                message: "User not found."
            });
        }
        
        //logout successful
        return res.status(200).json({
            message: "Logout successful."
        });
    }catch(error){
        res.status(500).json({
            message: "Internal server error.",
            error: error.message
        });
    }
}
export {
    registerUser,
    loginUser,
    logoutUser
};