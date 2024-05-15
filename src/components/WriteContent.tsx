/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import Text from './shared/Text'
import ButtonContained from './shared/ButtonContained'
import line from '../../public/assests/white-line-bg.svg'
import lineShort from '../../public/assests/line-short.svg'
import lineMedium from '../../public/assests/line-medium.svg'

import bgBlack from '../../public/assests/bg-black.png'

import Image from 'next/image'
const WriteContent = () => {
  return (
    <div className='flex flex-col md:flex-row gap-12 mt-32 mb-8 px-6 md:px-12 justify-between'>
         <div className="w-full md:w-1/2 h-full flex flex-col my-auto gap-8">
        <Text text={'Write what you want to <br /> convey through clear, &  <br /> authentic writing'}/>
        <p className="text-gray-400 text-sm">AI-Writer is the most accurate content generation <br /> platform and writing tool that helps you transform <br />  your text into a completely personalized.
        </p>
        <div>
          <ButtonContained>{"Start 14 Days Free Trial"}</ButtonContained>
        </div>
      </div>

  
      <div className="w-1/2 flex  gap-6 bg-white shadow-lg hover:shadow-2xl rounded-lg text-black px-12 py-4 relative">
        <div className='w-4/12 space-y-3'>
        <p className="text-sm text-gray-500">
        Blog Outline
            </p>
        <p className="text-sm text-gray-500">
        Blog Intro
            </p>
        <p className="text-sm text-gray-500">
        Blog Conclusion
            </p>
        <p className="text-sm text-gray-500">
        AIDA
            </p>
        <p className="text-sm text-gray-500">
        PAS
            </p>
        <p className="text-sm text-gray-500">
        Content Rewriter
            </p>
            <Image src={lineShort} alt='line'/>
            <Image src={lineMedium} alt='line'/>
            <Image src={lineShort} alt='line'/>
            <Image src={lineMedium} alt='line'/>
            <Image src={lineShort} alt='line'/>
            <Image src={lineMedium} alt='line'/>
            <Image src={lineShort} alt='line'/>
            <Image src={lineMedium} alt='line'/>
            <Image src={lineShort} alt='line'/>
            <Image src={lineMedium} alt='line'/>
        </div>
          <div className='8/12 space-y-6'>
            <h3 className="font-bold ">Results</h3>
            <p className="text-sm text-gray-500">
              Here's what our AI came up with.
            </p>
            <Image src={bgBlack} alt='line'/>
            <Image src={line} alt='line'/>
            <Image src={line} alt='line'/>
            <Image src={lineShort} alt='line'/>
            
          </div>

      </div>
    </div>
  )
}

export default WriteContent