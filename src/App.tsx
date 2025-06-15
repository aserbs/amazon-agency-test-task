import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  CarouselDots,
} from "@/components/ui/carousel";
import { ReviewCard } from "./components/shared/review-card";
import { reviewsArray } from "./reviews";

function App() {
  return (
    <div className="w-full flex flex-col items-center gap-8 p-[10px]">
      <h1 className="font-bold lg:text-[20px] text-center">
        Voices of Success with Sales Fortuna
      </h1>

      <div className="relative w-[320px] lg:w-[1100px] md:w-[650px] sm:w-[380px] ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-1">
            {reviewsArray.map((item, index) => (
              <CarouselItem
                key={index}
                className="pl-1 sm:pl-2 md:pl-4  md:basis-1/2 lg:basis-1/3"
              >
                <ReviewCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="-left-11 absolute sm:-left-12 top-1/2 z-10 -translate-y-1/2 !bg-white !rounded-[50%] size-[40px] p-2 shadow" />

          <CarouselNext className="-right-11 absolute sm:-right-12 top-1/2 z-10 -translate-y-1/2 !bg-white !rounded-[50%] size-[40px] p-2 shadow" />
          <CarouselDots />
        </Carousel>
      </div>
    </div>
  );
}

export default App;
