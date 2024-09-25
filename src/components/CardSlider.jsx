import { cn } from "../lib/utils";
import Marquee from "./magicUIComponents/Marque";

const reviews = [
  {
    text:"Hirsutism"
  },
  {
    text:"Low testosterones"
  },
  {
    text:"Hair loss"
  },
  {
    text:"PCOS"
  },
  {
    text:"Infertility"
  },
  {
    text:"Hypothyroidism"
  },
  {
    text:"Endometriosis"
  },
  {
    text:"Metabolic Syndrome"
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  text,
}) => {
  return (
    <figure
      className={cn(
        "relative min-w-max  cursor-pointer overflow-hidden rounded p-2 bg-[#01C7B121]",
      )}
    >
      <blockquote className="text-sm text-black">{text}</blockquote>
    </figure>
  );
};

export function MarqueeDemo() {
  return (
    <div className="relative flex p-5 w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-white md:shadow-xl">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 "></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 "></div>
    </div>
  );
}
