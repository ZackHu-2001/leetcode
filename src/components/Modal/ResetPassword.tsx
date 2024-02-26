import React from 'react';

type ResetPasswordProps = {

};

const ResetPassword: React.FC<ResetPasswordProps> = () => {

    return (
        <form className='space-y-6 px-6 lg:px-8 pb-4 sm:pb-6 xl:pb-8'>
            <h3 className='text-xl'>Reset Password</h3>
            <p className=' text-sm font-medium space-y-6'>Forgotten your password? Enter your e-mail address below, and we'll send you an e-mail allowing you to reset it.</p>
            <label htmlFor="email" className='text-sm'>Your email</label>
            <input
                type='email'
                id="email"
                className='w-full rounded-lg border-2 text-white border-gray-700 focus:ring-blue-400 p-2.5 placeholder:gray-400'
                placeholder='name@company.com'>
            </input>
            <button className='text-center text-white focus:ring-4 bg-brand-orange w-full p-2.5 
            rounded-lg border-2 border-transparent hover:bg-dark-orange transition duration-200 ease-in-out font-md'>
                Reset Password
            </button>
        </form>
    );
}
export default ResetPassword;