const Intro = () => {
    return (
        <div className="bg-[#D1B5A9] h-1/2 w-full flex items-start justify-center px-6 sm:px-10 py-16">
            <div className="w-full max-w-none text-white text-center space-y-12">
                {/* Heading & Paragraph */}
                <div className="space-y-6 max-w-5xl mx-auto">
                    <h1 className="text-black font-garamond text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-relaxed tracking-wide uppercase">
                        ZAHARA IS A RESTAURANT BY DAY, COCKTAIL BAR BY NIGHT CELEBRATING OLD SKOOL BLUES, SOUL AND R&B MUSIC
                    </h1>
                    <p className="text-black text-base sm:text-lg md:text-xl lg:text-2xl font-medium max-w-3xl mx-auto leading-relaxed">
                        Stay until the early hours with cocktails, craft beers, bar food & London&apos;s finest hi-fi sound system. Bramble is your new go-to spot to relax and unwind after a long day.
                    </p>
                </div>

                {/* Tagline */}
                <div className="pt-8 font-garamond">
                    <p className="text-black text-xl sm:text-2xl md:text-3xl lg:text-[30px] font-semibold tracking-widest leading-tight whitespace-normal">
                        GOOD FOOD + GOOD DRINKS + GOOD MUSIC = GREAT VIBES.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Intro;
