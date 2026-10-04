import { useContext } from "react"
import { userContext } from "../App"

const Profile = () => {
    let { user } = useContext(userContext) as any;
    console.log(user);
    if (!user) return <p>Please Login</p>
    return <div>Welcome {user.username}</div>
}

export default Profile