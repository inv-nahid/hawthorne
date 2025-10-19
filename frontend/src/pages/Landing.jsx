import LandingVideo from '../components/LandingVideo'
import Intro from '../components/Intro'
import Slider from '../components/Slider/Slider'

const Landing = () => {
  return (
    <div>
      <LandingVideo />
      <Intro />
      <Slider />
      <div className='flex items-center justify-center flex-col px-10 text-center gap-5 my-20 font-garamond text-lg'>
        <div className='  text-[10rem] font-bebas text-black leading-none'>
          BORN TO BE TASTY
        </div>
        <p>We started with a food truck and a dream: to bring real, unapologetic flavor to burger lovers. No shortcuts, no compromises—just good food, great vibes, and even better company.</p>
      </div>
    </div>
  )
}

export default Landing