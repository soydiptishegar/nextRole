const JobPreviewSkeleton = () => {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 animate-pulse">
      <div className="h-5 w-3/4 bg-zinc-800 rounded"></div>
      <div className="h-4 w-1/2 bg-zinc-800 rounded mt-3"></div>
      <div className="h-4 w-full bg-zinc-800 rounded mt-4"></div>
      <div className="h-4 w-5/6 bg-zinc-800 rounded mt-2"></div>
    </div>
  );
};

export default JobPreviewSkeleton;
