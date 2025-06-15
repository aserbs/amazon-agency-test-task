interface IReviewCard {
  photo: string;
  companyLogo: string;
  name: string;
  pos: string;
  review: string;
}

interface ReviewCardProps {
  item: IReviewCard;
}

export function ReviewCard({ item }: ReviewCardProps) {
  return (
    <div
      className="pl-4 rounded-sm bg-white border-[1px]
               border-solid border-[#B6B1B1] h-[520px] px-3 py-6"
    >
      <div className="h-[55px] flex items-center mt-[20px]">
        <img src={item.companyLogo} />
      </div>
      <div className="relative mt-[35px] text-[#9B9A99]">
        <p className="font-[700] text-[20px]">{item.review}</p>
        <div className="absolute right-0 top-16 text-[96px] rotate-180">“</div>
      </div>

      <div className="mt-[50px] flex gap-[10px]">
        <img src={item.photo} className="h-12" />
        <div className="flex flex-col text-[20px] font-[700] ">
          <span>{item.name}</span>
          <span>{item.pos}</span>
        </div>
      </div>
    </div>
  );
}
