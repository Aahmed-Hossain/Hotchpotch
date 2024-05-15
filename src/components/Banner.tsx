import React from 'react'
import PlayCircleFilledIcon from '@mui/icons-material/PlayCircleFilled';
import ButtonContained from './shared/ButtonContained';
const Banner = () => {
  return (
    <div className="text-center min-h-screen mt-8">
   <h1 className="font-lg text-3xl md:text-6xl">
   Write better <br/>
content for your <br />
<span className="relative">
  <span className="bg-gradient-to-r from-yellow-400 to-red-600 text-transparent bg-clip-text">
    Facebook Ads
  </span>
  <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-400 to-red-600"></span>
</span>

   </h1>
   <p className="text-gray-400 my-6">Artificial intelligence writting tool helps you create blogs, <br /> social media websites and much more.</p>
   <ButtonContained>{'Start 14 Days Free Trial'}</ButtonContained>
   <div className='flex items-center gap-2 justify-center mt-4 text-sm' ><PlayCircleFilledIcon/> <span>Watch A Demo</span></div>
    </div>
  )
}

export default Banner