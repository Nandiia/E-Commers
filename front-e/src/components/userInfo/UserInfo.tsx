export const UserInfoCom = () => {
  const userInfoData = [
    {
      dataName: 'Овог:',
      type: 'text',
    },
    {
      dataName: 'Нэр:',
      type: 'text',
    },
    {
      dataName: 'Утасны дугаар:',
      type: 'number',
    },
    {
      dataName: 'Имэйл хаяг:',
      type: 'email',
    },
  ];

  return (
    <div>
      <h1 className="text-[18px] font-bold text-[#09090B]">
        Хэрэглэгчийн хэсэг
      </h1>
      <div className="border-t mt-6 mb-6"></div>

      <div className="space-y-4">
        {userInfoData.map((item, index) => {
          return (
            <div key={index} className="flex flex-col space-y-2">
              <label>{item.dataName}</label>
              <input
                type={item.type}
                className="h-7 rounded-[18px] border border-[#E4E4E7]"
              ></input>
            </div>
          );
        })}

        <div className=" flex flex-col space-y-2 ">
          <label>Хаяг</label>
          <textarea
            rows={5}
            cols={30}
            className="rounded-[18px] border border-[#E4E4E7]"
          ></textarea>
        </div>

        <div className="flex justify-end">
          <button className="px-9 py-2 bg-[#2563EB] text-[#FAFAFA] text-[14px] rounded-full ">
            Мэдээлэл шинэчлэх
          </button>
        </div>
      </div>
    </div>
  );
};
