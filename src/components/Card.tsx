import ReactionIcon from "../assets/images/icon-reaction.svg";
import MemoryIcon from "../assets/images/icon-memory.svg";
import VerbalIcon from "../assets/images/icon-verbal.svg";
import Visual from "../assets/images/icon-visual.svg";

const Card = () => {
  const data = [
    {
      category: "Reaction",
      score: 80,
      icon: ReactionIcon,
      text: "text-LightRed",
      background: "bg-LightRedA",
    },
    {
      category: "Memory",
      score: 92,
      icon: MemoryIcon,
      text: "text-OrangeyYellow",
      background: "bg-OrangeyYellowA",
    },
    {
      category: "Verbal",
      score: 61,
      icon: VerbalIcon,
      text: "text-GreenTeal",
      background: "bg-GreenTealA",
    },
    {
      category: "Visual",
      score: 72,
      icon: Visual,
      text: "text-CobaltBlue",
      background: "bg-CobaltBlueA",
    },
  ];

  return (
    <div className="sm:flex justify-center items-center h-dvh sm:bg-white ">
      <div className="sm:flex justify-center items-center rounded-3xl bg-White sm:drop-shadow-2xl sm:shadow-PaleBlue  ">
        <div className="bg-gradient-to-t from-LightRoyalBlue to-LightSlateBlue py-7 px-4 sm:rounded-3xl text-center rounded-b-3xl sm:w-72 ">
          <p className="text-LightLavender text-lg font-semibold">
            Your Result
          </p>
          <div className="w-40 h-40 m-5 bg-gradient-to-t from-PersianBlue to-VioletBlue mx-auto rounded-full flex justify-center items-center">
            <div>
              <p className="text-White text-6xl font-bold">76</p>
              <p className="text-LightLavender font-medium">of 100</p>
            </div>
          </div>
          <p className="text-White text-2xl font-bold">Great</p>
          <p className="text-LightLavender text-sm px-5 py-4 font-medium ">
            You scored higher than 65% of the people who have taken these tests.
          </p>
        </div>

        <div className="sm:w-72 bg-White pt-7 pb-3 px-9 sm:rounded-tr-3xl sm:rounded-br-3xl  ">
          <p className="text-DarkGrayBlue text-xl font-bold  "> Summary</p>
          <div className="">
            <div>
              {data.map((elem, i) => (
                <div
                  className={` ${elem.background} flex justify-between my-4 rounded-md p-2 font-bold`}
                  key={i}
                >
                  <div className={`flex my-auto ${elem.text}`}>
                    <img className="pl-1" src={elem.icon} alt={elem.category} />
                    <p className="px-2">{elem.category}</p>
                  </div>
                  <div className="flex">
                    <p className="text-DarkGrayBlue">{elem.score}</p>
                    <span className="text-DarkGrayBlueA px-1">/</span>
                    <span className="text-DarkGrayBlueA">100</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center bg-DarkGrayBlue text-White py-2 rounded-3xl my-[38px] hover:bg-gradient-to-t from-LightRoyalBlue to-LightSlateBlue">
            <button type="button">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
