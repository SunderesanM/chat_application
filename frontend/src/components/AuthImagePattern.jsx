const AuthImagePattern = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12 relative">
      {/* Background Illustration */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#3b82f6"
            fillOpacity="0.2"
            d="M0,288L48,266.7C96,245,192,203,288,176C384,149,480,139,576,133.3C672,128,768,128,864,160C960,192,1056,256,1152,277.3C1248,299,1344,277,1392,266.7L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="max-w-md text-center relative z-10">
        <br/><br/>
        {/* Animated Grid */}
        <div className="grid grid-cols-3 gap-3 mb-8">
          {[...Array(9)].map((_, i) => (
            <div
              key={i}
              className={`aspect-square rounded-xl bg-gradient-to-r from-primary/40 to-secondary/40 shadow-lg ${
                i % 2 === 0 ? "animate-pulse" : "hover:scale-105 transition-transform duration-300"
              }`}
            />
          ))}
        </div>

        {/* Title and Subtitle */}
        <h2 className="text-3xl font-extrabold mb-4 text-primary">{title}</h2>
        <p className="text-base-content/70 mb-6">{subtitle}</p>

      </div>
    </div>
  );
};

export default AuthImagePattern;
