import { useEffect, useState } from "react";
import JobPreviewCard from "./JobPreviewCard";
import JobPreviewSkeleton from "./JobsPreviewSkeleton";
import { fetchJobs } from "../services/fetchJobs";

const JobPreviewSection = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJobs()
      .then((fetchedJobs) => {
        setJobs(fetchedJobs);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load jobs");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <section
      id="jobs-preview"
      className="border-t border-zinc-800 bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-2xl font-semibold text-white">
              Latest Job Applications
            </h2>
            <p className="text-sm text-zinc-400 mt-1">
              A quick look at the jobs you’re tracking
            </p>
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[...Array(3)].map((_, i) => (
              <JobPreviewSkeleton key={i} />
            ))}
          </div>
        )}

        {/* Error */}
        {error && !loading && (
          <p className="text-red-400">{error}</p>
        )}

        {/* Jobs */}
        {!loading && !error && (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.slice(0, 4).map((job) => (
                <JobPreviewCard key={job.id} job={job} />
              ))}
            </div>

            {jobs.length > 3 && (
              <div className="mt-12 flex justify-center">
                <button
                  className="px-6 py-2 text-sm font-medium rounded-lg
                             border border-zinc-700 text-zinc-300
                             hover:border-blue-400 hover:text-white transition"
                >
                  View more jobs
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default JobPreviewSection;
