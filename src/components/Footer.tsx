import React from 'react'
export const footerInfo = [
    {id: 1, heading: 'Company', p1:'About', p2: 'Features',p3: 'Works', p4: 'Career'},
    {id: 2, heading: 'Help', p1:'Customer Support', p2: 'Delivery Details',p3: 'Terms & Conditions', p4:'Privacy Policy'},
    {id: 3, heading: 'Resources', p1:'Free eBooks', p2: 'Development Tutorial',p3: 'How to - Blog',p4: 'Youtube Playlist'},
    {id: 4, heading: 'Links', p1:'Free eBooks', p2: 'Development Tutorial',p3: 'How to - Blog', p4: 'Youtube Playlist'},
]
const Footer = () => {
  return (
    <div className='lg:px-12 px-6 my-12'>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-24 xl:48 justify-between">
{
            footerInfo.map(item=>(
                <div key={item.id} className='space-y-3 '>
            <h1 className='font-semibold mb-2'>{item.heading}</h1>
            <p className='text-xs font-light hover:underline cursor-pointer '>{item.p1}</p>
            <p className='text-xs font-light hover:underline cursor-pointer'>{item.p2}</p>
            <p className='text-xs font-light hover:underline cursor-pointer'>{item.p3}</p>
            <p className='text-xs font-light hover:underline cursor-pointer'>{item.p4}</p>
        </div>
            ))
        }
</div>
    </div>
  )
}

export default Footer