import React from 'react';
import { useSetRecoilState } from 'recoil';
import { authModalState } from '@/atoms/authoModalAtom';
import { auth } from '@/firebase/firebase';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
type SignupProps = {

};

const Signup: React.FC<SignupProps> = () => {
    const setAuthModalState = useSetRecoilState(authModalState)
    const handleClick = (type: 'login' | 'register' | 'forgotPassword') => {
        setAuthModalState((prev) => ({ ...prev, type }))
    }
    const [inputs, setInputs] = React.useState({ email: '', displayName: '', password: '' })

    const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const router = useRouter()

    const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        try {
            console.log("here")
            const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
            if (!newUser) return;
            router.push('/')
        } catch (error: any) {
            alert(error.message)
        }
    };

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    return (
        <form action="" className=' space-y-6 px-6 py-4' onSubmit={() => {handleRegister}}>
            <h3 className='text-xl font-medium'>Register to LeetCode</h3>
            <div>
                <label htmlFor="email" className='text-sm font-medium block mb-2 text-gray-300'>
                    Email
                </label>
                <input onChange={handleChangeInput} type="email" name="email" id='email' className=' border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
        block w-full p-2.5 bg-gray-600 border-gray-500  text-white'
                    placeholder='name@company.com'
                />
            </div>

            <div>
                <label htmlFor="displayName" className='text-sm font-medium block mb-2 text-gray-300'>
                    Display Name
                </label>
                <input onChange={handleChangeInput}
                    type="text"
                    name="displayName"
                    id='displayName'
                    className=' border-2 outline-none sm:text-sm rounded-lg focus:ring-blue-500 
        block w-full p-2.5 bg-gray-600 border-gray-500  text-white'
                    placeholder='John Doe'
                />
            </div>

            <div>
                <label htmlFor="password">Password</label>
                <input onChange={handleChangeInput} type="password" name="password" id='password' placeholder='********'
                className='w-full p-2.5 rounded-lg bg-gray-600 border-gray-500 block border-2 outline-none' />
            </div>

            <button type='submit' className='w-full text-white focus:ring-blue-300 font-medium rounded-lg
        text-sm px-5 py-2.5 text-center bg-brand-orange hover:bg-dark-orange'>
                Register
            </button>
            <div className='text-sm font-medium text-gray-300'>
                Already have an account?{' '}
                <a href='/' className='text-blue-700 hover:underline' onClick={() => handleClick("login")}>
                    Log In
                </a>
            </div>
        </form>
    )
}
export default Signup;