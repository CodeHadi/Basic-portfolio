import React from 'react'
import Image from 'next/image'

interface propsType {
    title : string, 
    desc  : string,
    img   : string,
    tags  : string[];
}

const Card:React.FC<propsType> = ({ title , desc , img , tags}) => {

  return (
    <div className='container border rounded border-green-600 w-[300px] sm:w-[350px] s:w-[400px]' data-aos="zoom-in-up">
       <div>
        <Image 
        className='w-[300px] sm:w-[350px] h-auto rounded'
        src={img}
        width={350}
        height={350}
        alt={title}
        />
       </div>
       <div className="p-4 space-y-4">
        <div className="text-4xl font-semibold">{title}</div>
        <div className='font-extralight'>{desc}</div>
        <div>{tags.map((elem)=>(
            <div className="tags" key={elem}>
                {elem}
            </div>
        ))}</div>
       </div>
    </div>
  )
}

export default Card
