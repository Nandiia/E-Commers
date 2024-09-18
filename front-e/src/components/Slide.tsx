import Image from 'next/image';

type SlideProps = {
  title: string;
  image: string;
};

export const Slide = ({ title, image }: SlideProps) => {
  return (
    <main className="w-100%">
      <Image
        src={image}
        alt="logon ner"
        layout="fill"
        className="absolute top-[10px] l-0"
      />
    </main>
  );
};
