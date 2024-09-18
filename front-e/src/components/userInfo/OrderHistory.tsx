import { Title } from '../Title';

export const OrderHistroy = () => {
  return (
    <div>
      <Title titleSize="text-[20px]">Захиалгын түүх</Title>
      <div className="border-t mt-6 mb-6"></div>

      <div className="space-y-4">
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
