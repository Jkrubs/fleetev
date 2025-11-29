import React, { useEffect, useRef, useState } from 'react'
import './Login.css'
export const Login = ({ open, setIsopen, axios, user, setUser }) => {
    const [login, setLogin] = useState(true)

    const toggleLogin = () => {
        setLogin((prev) => !prev)
    }

    let cardRef = useRef()

    useEffect(() => {
        document.addEventListener('mousedown', (event) => {
            if (!cardRef.current || !cardRef.current.contains(event.target)) {
                setIsopen(false)
            }

        });
        return (
            document.removeEventListener('mousedown', (event) => {
                if (!cardRef.current || !cardRef.current.contains(event.target)) {
                    setIsopen(false)
                }
            })
        )
    })

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    const handleSignup = async (e) => {
        e.preventDefault();
        const data = { email, name, password }
        const response = await axios.post('/user/sign-up', data)
        const { user, token } = response.data
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        setUser(user)
        setIsopen(false)

    }
    const handleLogin = async (e) => {
        e.preventDefault();
        const response = await axios.post('/user/sign-in', {
            email, password
        })
        const { user, token } = response.data
        localStorage.setItem('user', JSON.stringify(user))
        localStorage.setItem('token', token)
        setUser(user)
        setIsopen(false)
        console.log(user);
    }

    return (
        <div className="login-card" ref={cardRef}>
            {login ?
                <div className="login" >
                    <div className="login-title">Sign up</div>
                    <form action="" className='login-form' onSubmit={handleSignup}>
                        <div className="form-input-field">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name='email' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="username">Your Username</label>
                            <input type="username" name='username' placeholder='Enter your username' required value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="password">Your Password</label>
                            <input type="password" name='password' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p>Already have an account?<span onClick={toggleLogin}>Sign In</span></p>
                        <button>Sign Up</button>
                    </form>
                </div> :
                <div className="login">
                    <div className="login-title">Sign in</div>
                    <form action="" className='login-form' onSubmit={handleLogin}>
                        <div className="form-input-field">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name='email' placeholder='Enter your email' required value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="form-input-field">
                            <label htmlFor="password">Your Password</label>
                            <input type="password" name='password' placeholder='Enter your password' required value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <p>Do not have an account?<span onClick={toggleLogin}>Sign up</span></p>
                        <button>Sign In</button>
                    </form>
                </div>}
        </div>
    )
}
