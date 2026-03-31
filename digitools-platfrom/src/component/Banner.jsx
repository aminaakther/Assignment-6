import BannerImage from "../assets/banner.png";

const Banner = () => {
    return (
        <div className="relative min-h-[650px] flex items-center overflow-hidden">
            <div className="mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center relative z-10">

                {/* Left Content */}
                {/* <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 bg-blue-200 border border-red-500/30 text-2xl font-bold text-[#9333ea] cursor-pointer text-sm font-medium px-5 py-2 rounded-full">
                   
                        New: AI-Powered Tools Available
                    </div>

                    <h1 className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter ">
                        Supercharge Your
                        <br />
                        <span className="text-4xl lg:text-5xl font-bold leading-tight tracking-tighter">
                            Digital Workflow
                        </span>
                    </h1>

                    <p className="text-lg text-zinc-700 max-w-lg">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.

                        Explore Products
                    </p>

                    <div className="flex flex-wrap gap-4 pt-4">
                     <button className="bg-gradient-to-r from-[#8b2cf5] to-[#a434ff] transition-all px-4 py-2 rounded-2xl font-semibold text-lg  flex items-center gap-3 group text-white">
                            Explore Products
                            <span className="group-hover:translate-x-1 transition">→</span>
                        </button>
                        <button class="btn btn-outline btn-primary transition-all px-8 py-5 rounded-2xl font-semibold text-lg  flex items-center gap-3 group">Watch Demo</button>
                    </div>
                </div> */}




                {/* left side */}
                <div className="max-w-4xl py-12 px-4">
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 bg-[#eef2ff] px-3 py-1.5 rounded-full mb-8">
                        <div className="relative flex h-4 w-4 items-center justify-center">
                            <span className="absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-30 animate-ping"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#8b2cf5]"></span>
                        </div>
                        <span className="text-[#8b2cf5] text-sm font-medium">
                            New: AI-Powered Tools Available
                        </span>
                    </div>

                    {/* Heading */}
                    <h1 className="text-[64px] leading-[1.1] font-bold text-[#2d333f] mb-6 tracking-tight">
                        Supercharge Your <br /> Digital Workflow
                    </h1>

                    {/* Description */}
                    <p className="text-[#64748b] text-xl leading-relaxed max-w-2xl mb-10">
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. Start creating faster today.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex items-center gap-4">
                        {/* Primary Button */}
                        <button className="bg-[#8b2cf5] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#7a25d9] transition-all shadow-lg shadow-purple-100">
                            Explore Products
                        </button>

                        {/* Secondary Button */}
                        <button className="flex items-center gap-2 border border-purple-200 text-[#8b2cf5] px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                            </svg>
                            Watch Demo
                        </button>
                    </div>
                </div>


                {/* Right Image */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative">
                        <img
                            className="relative h-[520px] w-auto object-contain drop-shadow-2xl rounded-3xl animate-pulse"
                            src={BannerImage}
                            alt="AI Models Banner"
                        />
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Banner;