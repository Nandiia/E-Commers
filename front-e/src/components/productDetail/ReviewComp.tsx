import { starData } from './ReviewAll';

export const ReviewComp = () => {
  return (
    <main className="border-b-2 py-[21px] border-dotted ">
      <div className="flex items-center gap-x-1">
        <p>Saraa</p>
        <div className="flex gap-x-[2px] ">
          {starData.map((item, index) => {
            return (
              <div key={index} className="text-[#FDE047]  text-lg ">
                {item}
              </div>
            );
          })}
        </div>
      </div>

      <div className="text-[#71717A]">Ваав материал ёстой гоё байна 😍</div>
    </main>
  );
};
