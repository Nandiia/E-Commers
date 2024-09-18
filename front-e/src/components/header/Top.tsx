import { LuMail } from "react-icons/lu";
import { FaPhoneVolume } from "react-icons/fa6";
import { FiUser } from "react-icons/fi";
import { CiHeart } from "react-icons/ci";
import { SlBasket } from "react-icons/sl";


export const Top = () => {

    const ecomData =[
        {
            icon:  <LuMail />,
            iconName: "info@ecommerce.mn"
        },
        {
            icon:  <FaPhoneVolume />,
            iconName: "77123456"
        }

    ]

    const userData =[
        {
            name:"Нэвтрэх",
            icon:<FiUser />
        },
        {
            name:"Хадгалах",
            icon:<CiHeart />
        },
        {
           
            icon:<SlBasket />
        },
    ]

    return (
        <main className="bg-[#7E33E0] mb-5">

            <div className="flex w-[1200px] h-11 justify-between m-auto bg-[#7E33E0] text-[#F1F1F1]">

                
                <div className="flex gap-16">
                        {ecomData.map((item, index) => {
                            return (
                                <div key={index} {...item} className="flex gap-3 items-center ">
                                    {item.icon}
                                    <p>{item.iconName}</p>
                                </div>
                            )
                        })}
                </div>

                <div className="flex gap-[30px] items-center text-semibold">
                    {userData.map((item, index) => {
                        return (
                            <div key={index} {...item} className="flex items-center gap-[3px]">
                                <p>{item.name}</p>
                                {item.icon}
                            </div>
                        )
                    })}
                </div>

            </div>

          

        </main>
    )
}