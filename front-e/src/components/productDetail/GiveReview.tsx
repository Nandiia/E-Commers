import { starData } from './ReviewAll';

export const GiveReview = () => {
  return (
    <div className="bg-[#F4F4F5] rounded-2xl p-6">
      <div className="space-y-[24px]">
        <div className="space-y-1">
          <h3> Одоор үнэлэх:</h3>
          <div className="flex">
            {starData.map((item, index) => {
              return (
                <div key={index} className="text-[24px] text-[#FDE047]">
                  {item}
                </div>
              );
            })}
          </div>
        </div>

        <div>
          <div>Сэтгэгдэл үлдээх:</div>
          <textarea
            placeholder="Энд бичнэ үү"
            rows={5}
            cols={70}
            className="mt-2"
          ></textarea>
        </div>

        <button className="border px-9 py-2 bg-[#2563EB] text-[white] rounded-full">
          Үнэлэх
        </button>
      </div>
    </div>
  );
};
