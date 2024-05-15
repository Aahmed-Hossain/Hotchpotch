import React from 'react'
import Text from './shared/Text'
import ButtonContained from './shared/ButtonContained'
import dotImg from '../../public/assests/dots.png'
import Image from 'next/image'
const MixlandHelps = () => {
  return (
    <div>
      <div className='text-center'>
      <Text text={'Mixland helps you <br/> build beautiful website'}/>
      </div>

      <div className='flex flex-col md:flex-row px-8 lg:px-36  mt-12 gap-8'>
        <div className='w-full lg:w-4/12 text-sm space-y-6'>
          <ButtonContained >{'Create original content that ranks SEO'}</ButtonContained>
            <p>Blog Intros</p>
            <p>Content Rewriter</p>
            <p>Facebook Ads</p>
            <p>Product Description</p>
            <p>PAS Copywriting Formula</p>
        </div>

        <div className="w-full lg:w-8/12 bg-[#282A37] rounded-xl shadow-lg py-8 px-8 lg:px-16 space-y-6 ">
          <Image className=" " src={dotImg} alt="logo" />
   
            <p className="text-sm text-gray-400">4 Blog Headlines Generated</p>
            <p className="text-xs font-medium">Create original content that ranks for SEO</p>
            <p className="text-xs font-medium">Any mechanical keyboard enthusiasts in design?</p>
            <p className="text-xs font-medium">The More Important the Work, the More Important the Rest</p>
            <p className="text-xs font-medium">How to design a product that can grow itself 10x in year</p>
            <p className="text-xs font-medium">Any mechanical keyboard enthusiasts in design?</p>
      
        </div>
      </div>
    </div>
  )
}

export default MixlandHelps