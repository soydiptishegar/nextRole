export async function fetchJobs() {
  const response = await fetch("../../data/jobs.json");
   //Uncomment below line to test the loading state with 2s delay
   //await new Promise((resolve) => setTimeout(resolve, 2000));

  if (!response.ok) {
    throw new Error("Failed to fetch jobs");
  }

  const data = await response.json();
  return data.jobs;
}
