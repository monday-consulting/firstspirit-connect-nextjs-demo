import Image from "next/image";

interface InterestingFactsProps {
  backgroundImage?: {
    src: string;
    alt: string;
  };
  tagline: string;
  headline?: string;
  text?: string;
  counters: {
    id: string;
    number: number;
    text: string;
  }[];
}

const InterestingFacts = ({
  backgroundImage,
  tagline,
  headline,
  text,
  counters,
}: InterestingFactsProps) => {
  return (
    <div className="relative grid items-center gap-4 p-4 py-20 text-white lg:h-[800px] lg:grid-cols-2">
      {backgroundImage && <div className="-z-10 absolute inset-0 bg-black bg-opacity-75" />}
      {backgroundImage && (
        <div className="-z-20 absolute inset-0">
          <Image
            src={backgroundImage.src}
            alt={backgroundImage.alt}
            fill
            className="object-cover"
          />
        </div>
      )}
      <div className="flex w-min flex-col space-y-2 overflow-auto lg:m-10 lg:border-[12px] lg:p-12">
        <h3 className="text-xl uppercase">{tagline}</h3>
        {headline && (
          <h2 className="font-black text-3xl text-yellow-500 uppercase lg:text-5xl">{headline}</h2>
        )}
        {text && <p className="text-gray-300">{text}</p>}
      </div>
      <div className="grid grid-cols-3 gap-6">
        {counters.map((counter) => (
          <div key={counter.id}>
            <div className="font-bold text-4xl text-yellow-500">{counter.number}</div>
            <div className="max-w-[100px] border-t-2 text-gray-300">{counter.text}</div>
          </div>
        ))}
      </div>
    </div>
  );
};
export { InterestingFacts };
