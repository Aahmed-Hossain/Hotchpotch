import React from 'react'
import darrellImg from '../../public/assests/Darrell Steward.png'
import leslieImg from '../../public/assests/Leslie Alexander.png'
import jennyImg from '../../public/assests/Jenny Wilson.png'
import kristinImg from '../../public/assests/Kristin Watson.png'
import guyImg from '../../public/assests/Guy Hawkins.png'
import marvinImg from '../../public/assests/Marvin McKinney.png'
import anneteImg from '../../public/assests/Annette Black.png'
import floyedImg from '../../public/assests/Floyd Miles.png'
import Image from 'next/image'
import TwitterIcon from '@mui/icons-material/Twitter';

const customersData = [
    {img: darrellImg, name: 'Darrell Steward', email: '@darrels', des: 'You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.', hastag: '#another'},
    {img: leslieImg, name: 'Leslie Alexander', email: '@lesslie', des: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.z', hastag: '#postcrafts'},
    {img: jennyImg, name: 'Jenny Wilson', email: '@jennywilson', des: 'This is a top quality product. No need to think twice before making it live on web.', hastag: '#make_it_fast'},
    {img: kristinImg, name: 'Kristin Watson', email: '@kristinwatson2', des: 'Finally, I’ve found a template that covers all bases for a bootstrapped startup. We were able to launch in days, not months.', hastag: '#postcrafts'},
    {img: guyImg, name: 'Guy Hawkins', email: '@lesslie', des: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.z', hastag: '#dev #tools'},
    {img: marvinImg, name: 'Marvin McKinney', email: '@lesslie', des: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.z', hastag: '#postcrafts'},
    {img: anneteImg, name: 'Annette Black', email: '@lesslie', des: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.z', hastag: '#postcrafts'},
    {img: floyedImg, name: 'Floyd Miles', email: '@lesslie', des: 'Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.z', hastag: '#postcrafts'},
]
const CustomersReview = () => {
  return (
    <div>

       <div className='text-black grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 justify-items-center gap-4 px-8 my-16'>
       {
           customersData.map((item,idx)=>(
            <div key={idx} className='bg-white rounded-xl shadow-xl p-4'>
<div className='flex justify-between'>
<div className='flex'>
    <Image className='rounded-full w-[3rem] h-[3rem]' src={item.img} alt='customers imge'/>
    <div className='ml-2'>
<h3>{item.name}</h3>
<p>{item.email}</p>
</div>
</div>
<p className='text-blue-400'><TwitterIcon/></p>
</div>
{/* review des */}
<p>
    {item.des}
</p>
<p className='text-blue-300'>
    {item.hastag}
</p>
            </div>
           )) 
        }
       </div>
    </div>
  )
}

export default CustomersReview