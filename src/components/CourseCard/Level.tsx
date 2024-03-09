type LevelProps = {
  level: number;
};

const LEVELS: Map<number, string> = new Map([
  [1, "Beginner"],
  [2, "Intermediate"],
  [3, "Advanced"],
]);

function Level({ level }: LevelProps) {
  const Dot = () => (
    <span className="inline-block w-2 h-2 bg-datacampGreen rounded-full mr-1" />
  );

  return (
    <div className="flex items-center">
      {Array(level)
        .fill(0)
        .map((_, index) => (
          <Dot key={index} />
        ))}
      <span className="ml-1">{LEVELS.get(level)}</span>
    </div>
  );
}

export { Level };
