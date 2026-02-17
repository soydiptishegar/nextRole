const statusStyles = {
  Applied: "bg-olive-500/10 text-olive-400 border-olive-500/30",
  Interview: "bg-blue-500/10 text-blue-400 border-blue-500/30",
  Rejected: "bg-red-500/10 text-red-400 border-red-500/30",
};

const JobCard = ({ job }) => {
  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 p-5 hover:border-zinc-700 transition">
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-lg font-medium text-zinc-100">
            {job.role}
          </h2>
          <p className="text-sm text-zinc-400 mt-1">
            {job.company} • {job.location}
          </p>
        </div>

        <span
          className={`text-xs px-3 py-1 rounded-full border ${statusStyles[job.status]}`}
        >
          {job.status}
        </span>
      </div>
    </div>
  );
};

export default JobCard;
