type ProgressBarProps = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarProps) {
  return (
    <div className="flex items-center">
      <div className="w-36 h-2 bg-slate-200 rounded">
        <div
          className="bg-datacampGreen h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="text-xs text-gray-600 ml-2">{progress}%</span>
    </div>
  );
}

export { ProgressBar };
