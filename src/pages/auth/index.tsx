import {authModalState} from "@/atoms/authoModalAtom";
import AuthModal from '@/components/Modal/AuthModal';
import Navbar from '@/components/Navbar/Navbar';
import React from 'react';
import {useRecoilValue} from "recoil"

type AuthPageProps = {
    
};

const AuthPage:React.FC<AuthPageProps> = () => {
    const authModal = useRecoilValue(authModalState)
    return <div className="bg-gradient-to-b from-gray-600 to-black h-screen relative">
        <div className='max-w-7xl mx-auto text-base'>
            <Navbar />
            <div className='flex items-center justify-center h-[calc(100vh-5rem)] pointer-events-none select-none'>
                <img src="/hero.png" alt="Hero img" />
            </div>
            {authModal.isOpen && <AuthModal />}
            
        </div>
    </div>
}
export default AuthPage;