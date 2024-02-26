import { Inter } from "next/font/google";
import AuthModal from "@/components/Modal/AuthModal";
import Navbar from "@/components/Navbar/Navbar";
import { RecoilRoot } from "recoil";
import { useRecoilValue } from "recoil";
import { authModalState } from "@/atoms/authoModalAtom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const authoModal = useRecoilValue(authModalState);

  return (
    <RecoilRoot>

      <main>
        <Navbar/>
        {/* <AuthModal/> */}
        { authoModal.isOpen && <AuthModal/>}
      </main>
    </RecoilRoot>
  );
}
