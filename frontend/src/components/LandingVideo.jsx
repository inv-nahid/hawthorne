import videobg from '../assets/background.mp4'

const LandingVideo = () => {
  return (
    <div className='w-full h-screen'>
      <div className="overlay absolute inset-0 w-full h-full bg-black/10"></div>
      <video src={videobg} autoPlay loop muted className='w-full h-full object-cover' />
      <div className="content absolute w-full h-full top-0 flex flex-col justify-center items-center text-white bg-black/30">
        <h1 className='name-font font-neonderthaw text-7xl sm:text-[15vw] lg:text-[22vw] leading-none mb-4'>zahara</h1>
        <br />
        <p className='font-garamond font-normal sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-widest'>CONTINENTAL CUISINE MASTERY</p>
        <p className='font-garamond font-normal sm:text-2xl md:text-3xl lg:text-4xl font-black tracking-widest'>WITH A TWIST</p>
      </div>
    </div>
  )
}

export default LandingVideo