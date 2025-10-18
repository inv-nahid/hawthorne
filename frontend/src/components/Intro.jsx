const Intro = () => {
    return (
        <div className="bg-[#222222] h-1/2 w-full flex items-start justify-center px-6 sm:px-10 py-14">
            <div className="w-full max-w-none text-white text-center space-y-12">
                {/* Heading & Paragraph */}
                <div className="space-y-3 max-w-5xl mx-auto">
                    <h1 className="text-[#F5F5DC] font-garamond text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold leading-relaxed tracking-wide uppercase">
                        ZAHARA IS A RESTAURANT BY DAY, COCKTAIL BAR  BY NIGHT CELEBRATING SOUL AND OLD SKOOL BLUES
                    </h1>
                    <p className="text-[#F5F5DC] text-xs sm:text-sm md:text-base lg:text-lg font-normal max-w-3xl mx-auto leading-relaxed">
                        Stay until the early hours with cocktails, craft beers, bar food & London&apos;s finest hi-fi sound system. Bramble is your new go-to spot to relax and unwind after a long day.
                    </p>
                </div>

                {/* Tagline */}
                <div className="pt-8 font-garamond">
                    <p className="text-[#F5F5DC] text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-semibold tracking-widest leading-tight whitespace-normal">
                        GOOD FOOD + GOOD DRINKS + GOOD MUSIC = GREAT VIBES.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
