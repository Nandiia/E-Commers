import { PineLogo } from '@/assets/PineLogo';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { FaRegUser } from 'react-icons/fa';

export const Nav = () => {
  return (
    <div className="h-fit w-screen bg-black py-3 px-6 flex items-center justify-between">
      <PineLogo />

      <div className="text-white items-center flex gap-6 ">
        <div className="text-[30px]">
          <IoIosNotificationsOutline />
        </div>

        <div className="text-white flex items-center">
          <div>
            <FaRegUser />
          </div>

          <p className=" p-2">Username</p>
        </div>
      </div>
    </div>
  );
};
