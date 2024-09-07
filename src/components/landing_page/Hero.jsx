export default function Hero() {
  return (
    <section className="container mx-auto py-6">
      <div className="flex justify-between gap-6 px-8">
        <div className="w-[250px] hidden lg:block">
          <img src="hero-1.webp" alt="hero-1" />
        </div>

        <div className="w-fit text-center p-4 my-auto">
          <h2 className=" text-4xl sm:text-6xl  font-extrabold tracking-tight pb-6  text-slate-700">
            Software Jobs<span className="text-green-500">:</span>
          </h2>
          <p className="text-center font-medium text-lg text-slate-600">
            Bridging the Gap Between Top Talent and Leading Tech Companies
          </p>
        </div>

        <div className="w-[250px] hidden lg:block">
          <img src="hero-2.webp" alt="hero-1" />
        </div>
      </div>

      {/* <div className="flex gap-6 justify-center">
          <Link to="/jobs">
            <Button variant="blue" size="xl">
              Find Jobs
            </Button>
          </Link>
          <Link to="/post-job">
            <Button variant="red" size="xl">
              Post a Job
            </Button>
          </Link>
        </div> */}
    </section>
  );
}
