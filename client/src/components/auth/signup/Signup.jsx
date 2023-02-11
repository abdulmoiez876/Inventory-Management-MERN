import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { registerUser } from '../../../store/authSlice';

export default function Signup() {
    const dispatch = useDispatch();

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const changeHandler = (event) => {
        if(event.target.name === "name"){
            setUser({
                ...user,
                name: event.target.value
            })
        }
        else if(event.target.name === 'email') {
            setUser({
              ...user,
                email: event.target.value
            })
        }
        else if(event.target.name === 'password') {
            setUser({
             ...user,
                password: event.target.value
            })
        }
    }

    const submitHandler = () => {
        dispatch(registerUser(user));
    }

    return (
        <section className="h-screen">
            <div className="px-6 h-full text-gray-800">
                <div
                    className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
                >
                    <div
                        className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                    >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                            className="w-full"
                            alt="Sample"
                        />
                    </div>
                    <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                        <h1 className='text-center text-3xl mb-4'>Sign Up</h1>
                        <form>
                            {/* <!-- name input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Name"
                                    name="name"
                                    onChange={changeHandler}
                                    value={user.name}
                                />
                            </div>

                            {/* <!-- Email input --> */}
                            <div className="mb-6">
                                <input
                                    type="text"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Email address"
                                    name="email"
                                    onChange={changeHandler}
                                    value={user.email}
                                />
                            </div>

                            {/* <!-- Password input --> */}
                            <div className="mb-6">
                                <input
                                    type="password"
                                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                    placeholder="Password"
                                    name="password"
                                    onChange={changeHandler}
                                    value={user.password}
                                />
                            </div>

                            <div className="text-center lg:text-left">
                                <button
                                    type="button"
                                    onClick={submitHandler}
                                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                                >
                                    Sign Up
                                </button>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                                    Already have an account?
                                    <Link to='/login'
                                        className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"
                                    >Login</Link>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
