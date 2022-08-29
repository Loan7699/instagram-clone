import React, { useEffect, useState,  useContext } from 'react'
import ProTypes from 'prop-types'

import { ImFacebook2 } from 'react-icons/im'

import Footer from "../../components/Footer"
import getApi from "../../api/getApi"

import axios from 'axios'
import { useNavigate } from 'react-router'
import AppContext from "../../components/AppContext"

Login.ProTypes = {

};

function Login(props) {
    const { dispatch } = useContext(AppContext)
    // lấy đc hàm dispatch trong AppContext mỗi khi lấy đc thông tin user
    const [userInput, setUserInput] = useState({ email: "", password: "" })
    // lấy thông tin người dùng nhập
    const [errorMess, setErrorMess] = useState(null)
    // gửi lại lỗi khi gửi request
    const navigate = useNavigate ()
    // điều hướng

    // xử lý onChangeHandle: cập nhật thông tin người dùng
    const handleChange = (e) => {
        setUserInput({...userInput, [e.target.name] : e.target.value })
    }

    // hàm submit khi nhấn login
    const handleLogin = async (e) => {
        try {
            e.preventDefault () // khi người dùng ấn login ko bị reload lại trang
            const option = {
                method: 'get',
                url: 'https://40d7f4a1-8e6e-4e4a-9711-2d6f92be7e6b.mock.pstmn.io/userslogin/list',
                data: userInput,
            }
            console.log(userInput);
            const response = await axios(option)
            console.log(response.data);
            const res = response.data
            // console.log(response);
            // const { token, userName } = response.data.data
            // console.log(token, userName);
            // localStorage.setItem("token", token);
            // dispatch({ type: "CURRENT_USER", payload: { userName } })
            console.log(res.includes(userInput));
            if (res.includes(userInput)) {
                navigate.push("/")
            }
            
        }

        catch (error) {
            // setErrorMess(error.response.data.message)
            console.log("Error");
        }
    }

    return (
      
            <section className=' bg-[#FAFAFA]'>
                <div className='flex justify-center py-8'>
                    <div className="bg-[url('../public/images/background.png')] bg-no-repeat background-login hidden md:block mr-8 w-96">
                        <div className='relative'>
                            <img src='/images/img_login.png' alt='picture' className='w-64 absolute top-[-10px] right-0 mr-5 mt-[27px]' />
                        </div>
                    </div>

                    <div className='max-w-md md:bg-white md:border md:border-solid md-border-[#DBDBDB] md-rounded-[1px] mt-3'>
                        <div className='py-2.5 mb-2.5'>
                            <div className='mb-3 mt-9'>
                                <div className='cursor-pointer'>
                                    <img src='../images/img_logo.png' alt='instagram' className='mx-auto' />
                                </div>
                            </div>

                            <div className='mb-2.5'>
                                <form onSubmit={handleLogin}>
                                    <div className='mt-6'>
                                        {errorMess &&
                                            <div className='text-[red]'>Error: {errorMess}</div>
                                        }
                                        <div className='mb-1.5 mx-10 text-xs'>
                                            <div className='h-9 py-2 border border-solid border-[#DBDBDB] rounded-[3px] bg-[#FAFAFA]'>
                                                <input
                                                    type='email'
                                                    name="email"
                                                    placeholder='Phone number, username or email'
                                                    className='pl-2 w-64 bg-[#FAFAFA] outline-none'
                                                    value={userInput.email}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='mb-3 mx-10 text-xs'>
                                            <div className='h-9 py-2 border border-solid border-[#DBDBDB] rounded-[3px] bg-[#FAFAFA]'>
                                                <input
                                                    type='password'
                                                    name="password"
                                                    placeholder='Password'
                                                    className='pl-2 w-64 bg-[#FAFAFA] outline-none'
                                                    value={userInput.password}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='my-2 mx-10 text-sm'>
                                            <button
                                                className='py-1 bg-[#0092f94d] w-72 border border-solid border-transparent rounded text-[#FFFFFF] font-semibold cursor-pointer'
                                        
                                            >
                                                Log In
                                            </button>
                                        </div>
                                        <div className='mx-10 mt-4 mb-5 flex flex-row relative'>
                                            <div className='bg-[#DBDBDB] h-px grow shrink relative top-2.5 w-28'></div>
                                            <div className='mx-[18px] grow-0 shrink-0 text-sm font-semibold text-[#8E8E8E]'>OR</div>
                                            <div className='bg-[#DBDBDB] h-px grow shrink relative top-2.5 w-28'></div>
                                        </div>
                                        <div className='mx-10 my-2 flex text-[#385185] cursor-pointer justify-center'>

                                            <ImFacebook2 className='mt-0.5 mr-2' />
                                            <span className='text-sm font-semibold'>Log in with Facebook</span>

                                        </div>
                                        <div className='mt-3'>
                                            <a href='' className='text-xs'>Forgot password?</a>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>

                        <div className='py-2.5 mb-2.5'>
                            <div className='text-sm'>
                                <p className='m-4'>Don't have an account?
                                    <a href=''>
                                        <span className='text-[#0095F6] font-semibold'> Sign up</span>
                                    </a>
                                </p>
                            </div>
                        </div>

                        <div>
                            <p className='my-2.5 mx-5'>Get the app.</p>
                            <div className='my-2.5 flex justify-center mb-8'>
                                <a href='' className='mr-2'>
                                    <img src='../images/app_download1.png' alt='app' className='w-36 h-11' />
                                </a>
                                <a href=''>
                                    <img src='../images/app_download2.png' alt='app' className='w-36 h-11' />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <Footer />
            </section>
        
        
    )
}

export default Login;