import React from 'react'
export const footerInfo = [
    {id: 1, heading: 'Company', p1:'About', p2: 'Features',p3: 'Works', p4: 'Career'},
    {id: 2, heading: 'Help', p1:'Customer Support', p2: 'Delivery Details',p3: 'Terms & Conditions', p4:'Privacy Policy'},
    {id: 3, heading: 'Resources', p1:'Free eBooks', p2: 'Development Tutorial',p3: 'How to - Blog',p4: 'Youtube Playlist'},
    {id: 4, heading: 'Links', p1:'Free eBooks', p2: 'Development Tutorial',p3: 'How to - Blog', p4: 'Youtube Playlist'},
]
const Footer = () => {
  return (
    <div className='px-12 my-12'>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8">
{
            footerInfo.map(item=>(
                <div key={item.id} className='flex flex-col gap-3'>
            <h1 className='font-semibold mb-2'>{item.heading}</h1>
            <p className='text-xs font-light '>{item.p1}</p>
            <p className='text-xs font-light'>{item.p2}</p>
            <p className='text-xs font-light'>{item.p3}</p>
            <p className='text-xs font-light'>{item.p4}</p>
        </div>
            ))
        }
</div>
    </div>
  )
}

export default Footer