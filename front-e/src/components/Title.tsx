import { PropsWithChildren } from 'react';

type titleSizeWithChild = {
  titleSize?: string;
} & PropsWithChildren;

export const Title = ({
  children,
  titleSize = 'text-[30px]',
}: titleSizeWithChild) => {
  return <h1 className={` font-bold ${titleSize} text-black"`}>{children}</h1>;
};
