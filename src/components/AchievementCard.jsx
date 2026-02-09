import { twMerge} from "tailwind-merge"; 

/* Individual card */
const AchievementCard = ({
  position,
  achievement,
  handleMove,
  cardSize,
}) => {
  const isCenter = position === 0;

  return (
    <div
      onClick={() => handleMove(position)}
      className={twMerge(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500",
        isCenter
          ? "z-10 bg-blue-400 text-primary-foreground border-primary"
          : "z-0 bg-blue-600 text-card-foreground border-border hover:border-primary/50"
      )}
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
      }}
    >
      <img
        src={achievement.imgSrc}
        alt={achievement.by}
        className="mb-4 h-14 w-14 rounded-md object-cover"
      />
      <h3 className="text-lg font-medium">
        "{achievement.Achievement}"
      </h3>
      <p className="mt-2 text-sm italic text-muted-foreground">
        – {achievement.by}
      </p>
    </div>
  );
};

export default AchievementCard;