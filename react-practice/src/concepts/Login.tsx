import { useContext, useState } from 'react'
import { userContext } from '../App';

const Login = () => {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setUser } = useContext(userContext) as {
        setUser: ({ username, password }: { username: string; password: string }) => void;
    };
    let SubmitForm = (e: any) => {
        e.preventDefault;
        setUser({username, password});
    }
    return (
        <div>
            <input type='text' placeholder='Enter the username' value={username} onChange={(e) => setUserName(e.target.value)} />
            <br />
            <input type='password' placeholder='Enter the password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <br />
            <button onClick={(e) => SubmitForm(e)}>Submit</button>
        </div>
    )
}

export default Login