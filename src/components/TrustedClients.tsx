import React from 'react'
import waverio from '../../public/assests/waverio.png'
import squareStone from '../../public/assests/squareStone.png'
import martino from '../../public/assests/martino.png'
import vitrogen from '../../public/assests/vitrogen.png'
import vertex from '../../public/assests/vertex.png'
import aromix from '../../public/assests/aromix.png'
import fireli from '../../public/assests/fireli.png'
import natroma from '../../public/assests/natroma.png'
 
const companyLogos =  [
    {id: 1, img: waverio},
    {id: 2, img: squareStone},
    {id: 3, img: martino},
    {id: 4, img: vitrogen},
    {id: 5, img: vertex},
    {id: 6, img: aromix},
    {id: 7, img: fireli},
    {id: 8, img: natroma},
]
const TrustedClients = () => {
  return (
    <div>
        <h4 className='text-center my-8'>Trusted by nearly 5000+ paying customers</h4>
        <div>
            {
companyLogos.map(item=> (
    <Image key={item.id} src={item.img} alt="trusted company logo" height={50} width={50}/>
))
            }
        </div>
    </div>
  )
}

export default TrustedClients