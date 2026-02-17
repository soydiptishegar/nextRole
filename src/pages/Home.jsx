
import ActionCard from "../components/ActionCard";
import JobPreviewSection from "../components/JobPreviewSection";

function App() {
  const scrollToJobs = () => {
    document.getElementById("jobs-preview")
    ?.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100">
      <main className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ActionCard
            title="Browse Jobs"
            description="View all the roles you’ve applied to and track their current status."
            accent="blue"
            action="Browse Jobs"
            onClick={scrollToJobs}
          />

          <ActionCard
            title="Add New Job"
            description="Log a new job application and keep your search organized."
            accent="green"
            action="Add Job"
            onClick={scrollToJobs}
          />
        </div>
      </main>
      <JobPreviewSection />
    </div>
  );
}

export default App;
