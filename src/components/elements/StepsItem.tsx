export interface Step {
  title: string;
  text: string;
  index: number;
  id: string;
}

interface StepsItemProps {
  data: Step;
}

const StepsItem = ({ data }: StepsItemProps) => {
  return (
    <div className="mb-16 w-full px-4 md:w-1/2 lg:w-1/3">
      <div className="relative h-full rounded-md bg-coolGray-50 px-8 pt-14 pb-8 shadow-md">
        <div className="-translate-x-1/2 -translate-y-1/2 absolute top-0 left-1/2 inline-flex h-16 w-16 transform items-center justify-center rounded-full bg-white">
          <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-secondary font-semibold text-white text-xl">
            {data.index}
          </div>
        </div>
        <h3 className="mb-4 font-semibold text-primary text-xl md:text-2xl">{data.title}</h3>
        <p className="mb-5 font-medium text-coolGray-500">{data.text}</p>
      </div>
    </div>
  );
};
export { StepsItem };
