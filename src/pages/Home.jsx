export default function Home() {
  return (
    <div className="relative z-10 w-full h-screen flex flex-col items-center justify-center text-center px-6">

      {/* Top pill tag */}
      <div className="backdrop-blur-md bg-white/10 border border-white/20 
                      rounded-full px-4 py-2 text-white mb-5">
        Motorsport Telemetry
      </div>

      {/* Title */}
      <h1 className="text-white text-4xl md:text-6xl font-extrabold max-w-3xl leading-tight">
        Analyze Your Car’s Performance With Precision
      </h1>

      {/* Subtitle */}
      <p className="text-gray-300 text-lg md:text-xl mt-4 max-w-xl">
        Upload your telemetry data and visualize your laps like never before.
      </p>

      {/* CTA Buttons */}
      <div className="flex gap-4 mt-8">
        <button className="px-6 py-3 bg-white text-black rounded-full 
                           font-semibold shadow-lg hover:bg-gray-200">
          Upload CSV
        </button>

        <button className="px-6 py-3 backdrop-blur-md bg-white/10 
                           border border-white/20 rounded-full 
                           text-white font-semibold hover:bg-white/20">
          Learn More
        </button>
      </div>
    </div>
  );
}
