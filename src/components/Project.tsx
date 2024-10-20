import React from 'react'
import Heading from './Heading'
import Card from './Card'

const Project = () => {
    const data = [
        {
            id : 0 ,
            title : "Todo List",
            desc  : "Task management to-do list using HTML, CSS, and JavaScript.",
            img : "/Project 1 .png",
            tags :  ["html" , "Css" , "JavaScript"],
        },
        {
            id : 1 ,
            title : "Travel Website",
            desc  :  "Responsive travel website built with HTML, CSS, and JavaScript for exploring destinations.",
            img : "/Project 2 .png",
            tags :  ["html" , "Css" , "JavaScript"],
        },
        {
            id : 2 ,
            title : "University Website",
            desc  :  "Responsive university website built with React for showcasing academic programs and campus details.",
            img : "/Project 3 .png",
            tags :  ["React" , "html" , "css" , "JavaScript"],
        },
        {
            id : 3 ,
            title : "Ocean Gate",
            desc  :  "Website for cloud storage services, systems, hard drives, and SSDs built with HTML, CSS, and JavaScript",
            img : "/Project 4 .png",
            tags :  [ "html" , "css" , "JavaScript"],
        },
        {
            id : 4 ,
            title : "Netflix clone",
            desc  : "Netflix clone built with HTML, CSS, and JavaScript for streaming content." ,
            img : "/Project 5 .png",
            tags :  [ "html" , "css" , "JavaScript"],
        },
    ]
  return (
    <div id='Project' className='container p-24 '>
      <Heading title='My Projects'/>
      <div className="grid gap-10 xl:gap-0 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3 place-item-center">
        {data.map((elem)=>(<Card
        key={elem.id}
        title={elem.title}
        desc={elem.desc}
        img={elem.img}
        tags={elem.tags}
        />))}
      </div>
    </div>
  )
}

export default Project
