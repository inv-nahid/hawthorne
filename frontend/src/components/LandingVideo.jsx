import videobg from '../assets/background.mp4'

const LandingVideo = () => {
  return (
    <div className='w-full h-screen'>
      <div className="overlay absolute inset-0 w-full h-full bg-black/30"></div>
      <video src={videobg} autoPlay loop muted className='w-full h-full object-cover' />
      <div className="content absolute w-full h-full top-0 flex flex-col justify-center items-center text-white bg-black/30">
        <h1>hawthorne</h1>
        <p>FEEL GOOD FOOD WITH A TWIST</p>
      </div>
    </div>
  )
}

export default LandingVideo