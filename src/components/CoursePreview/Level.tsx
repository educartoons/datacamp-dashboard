type LevelProps = {
  level: number;
};

function Level({ level }: LevelProps) {
  console.log(level);

  const Dot = () => (
    <span className="inline-block h-[6px] w-[6px] rounded-full bg-datacampGreen mr-1"></span>
  );

  return (
    <div className="flex items-center">
      <div className="-mt-1">
        {Array(level)
          .fill(0)
          .map(() => (
            <Dot />
          ))}
      </div>
      <span className="text-sm font-normal ml-1">Beginner</span>
    </div>
  );
}

export { Level };
