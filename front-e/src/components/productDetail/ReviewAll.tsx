import { TiStar } from 'react-icons/ti';
import { TiStarHalf } from 'react-icons/ti';
import { ReviewComp } from './ReviewComp';
import { GiveReview } from './GiveReview';

const sizeData = [
  {
    size: 'Free',
  },
  {
    size: 'S',
  },
  {
    size: 'M',
  },
  {
    size: 'L',
  },
  {
    size: 'XL',
  },
  {
    size: '2XL',
  },
  {
    size: '2XL',
  },
];

export const starData = [
  <TiStar key={1} />,
  <TiStar key={2} />,
  <TiStarHalf key={3} />,
];

export const ReviewAll = () => {
  return (
    <main>
      <div className="flex gap-x-4 ">
        <p>Үнэлгээ</p>
        <button className="underline underline-offset-4 text-[#2563EB]">
          бүгдийг хураах
        </button>
      </div>

      <div className="flex ">
        <div className="flex gap-x-1 ">
          {starData.map((item, index) => {
            return (
              <div key={index} className="text-[#FDE047]  text-2xl ">
                {item}
              </div>
            );
          })}
        </div>

        <div className="flex items-center text-[14px] font-normal gap-1">
          <div className=" text-[#09090B]">4.6</div>

          <div className="text-[#71717A]">(24)</div>
        </div>
      </div>

      <div>
        <ReviewComp />
      </div>
      <div className="mt-6">
        <GiveReview />
      </div>
    </main>
  );
};
