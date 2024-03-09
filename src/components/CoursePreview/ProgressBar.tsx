type ProgressBarType = {
  progress: number;
};

function ProgressBar({ progress }: ProgressBarType) {
  return (
    <div className="flex justify-between items-center">
      <div className="bg-gray-200 w-32 h-2 rounded">
        <div
          className="bg-datacampGreen h-2 rounded"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
      <span className="ml-2 uppercase text-xs font-medium text-gray-500">
        {progress}%
      </span>
    </div>
  );
}

export { ProgressBar };
