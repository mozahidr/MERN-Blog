import User from '../models/User.js';
import bcrypt from 'bcryptjs';

// register
export const registerUser = async (req, res) => {
    try {
        // finding existing users
        const existingUsers = await User.findOne({ username: req.body.username });
        const existingEmail = await User.findOne({ email: req.body.email });

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        if(existingUsers) return res.status(422).json({ message: "Username already exists" });
        if(existingEmail) return res.status(422).json({ message: "Email already exists" });
        if(hashedPassword.trim().length < 6) return res.status(422).json({ message: "Password at least 6 characters" });

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hashedPassword,
        });
        

        const user = await newUser.save();
        res.status(200).json(user);
    } catch (err) {
        res.status(500).json({message: err});
    }
}

// User Login
export const loginUser = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return res.status(404).json({message: 'User not found '});

        const validated = await bcrypt.compare(req.body.password, user.password);
        if(!validated) return res.status(400).json({message: 'Wrong Password'});
        
        const {password, ...others} = user._doc;
        res.status(200).json(others);
    } catch (err) {
        res.status(500).json({ message: err });
    }
}