import dotenv from 'dotenv'
dotenv.config()
import jwt from 'jsonwebtoken'

export const createSession = async (req, res) => {
    console.log("API /superadmin/create-session");
    try {
        const { userName, password } = req.body
        if (userName === process.env.ADMIN_ID && password === process.env.ADMIN_PASS) {
            let user = {userName,password,type:"superadmin"}
            let token = jwt.sign(user, 'Suyyog123New', { expiresIn: `9h` })
            return res.status(200).json({
                message: "Session Created!! Here is your token",
                token: token
            })
        } else {
            return res.status(400).json({
                message: "Invalid User Name or Password"
            })
        }
    } catch (err) {
        console.log("/superadmin/create-session", err);
        return res.status(500).json({
            message: "Internal Server Error"
        })
    }
}
