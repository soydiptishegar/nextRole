const JobPreviewCard = ({ job }) => {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-700 transition">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-lg font-medium text-white">
            {job.title}
          </h3>
          <p className="text-sm text-zinc-400 mt-1">
            {job.company["name"]} {job.location["city"] ? `${job.location["city"]}, ` : ""}{job.location["country"]}
          </p>
        </div>

        <span className="text-xs px-3 py-1 rounded-full
                         bg-emerald-500/10 text-emerald-400
                         border border-emerald-500/30">
          {job.salary["displayText"]}
        </span>
      </div>

      <p className="text-sm text-zinc-400 mt-4 line-clamp-2">
        {job.descriptions["summary"]}
      </p>

      <button className="mt-4 text-sm text-blue-400 hover:text-blue-300 transition">
        Read more →
      </button>
    </div>
  );
};

export default JobPreviewCard;
