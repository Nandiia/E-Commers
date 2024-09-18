import { PineLogo } from '@/assets/PineLogo';
import { FiPhone } from 'react-icons/fi';
import { IoMailOutline } from 'react-icons/io5';
import { FaRegCopyright } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

export const Footer = () => {
  const contactData = [
    {
      icon: <FiPhone />,
      iconData: '(976)7007-1234',
    },
    {
      icon: <IoMailOutline />,
      iconData: 'contact@ecommerce.mn',
    },
  ];

  return (
    <main className="bg-black">
      <div className="flex flex-col px-[200px] pt-[43px] gap-[43px] ">
        <div className=" flex items-center justify-between ">
          <PineLogo />
          <div className="flex gap-[38px] text-white">
            {contactData.map((item, index) => {
              return (
                <div key={index} className="flex items-center gap-5">
                  <div className="border w-fit h-fit p-4 rounded-full">
                    {item.icon}
                  </div>

                  <p className="text-[14px]">{item.iconData}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="border-[1px] bg-white w-full "></div>
      </div>

      <div className="flex px-[200px] pb-[64px] pt-[43px] items-center justify-between">
        <div className="text-white flex gap-3 items-center">
          <FaRegCopyright />
          <p className="text-[14px]">2024 Ecommerce MN</p>
        </div>
        <div className="text-white flex gap-6">
          <FaFacebook className="text-white w-6 h-6 cursor-pointer" />
          <FaInstagram className="text-white w-6 h-6 cursor-pointer" />
          <FaTwitter className="text-white w-6 h-6 cursor-pointer" />
          <FaLinkedin className="text-white w-6 h-6 cursor-pointer" />
        </div>
      </div>
    </main>
  );
};
