
import  { SVGProps } from 'react';
const CategoryCard=(props)=>{
    const {card}=props;
  return(
    <div className=' relative cursor-pointer hover:scale-[.9]'>
         <img src={card.img}/>
         <div className='flex flex-col gap-4 absolute top-[38%] left-[40%] items-center justify-center'>
          <p className=' font-bold text-white'>{card.title}</p>
          <p className=' font-bold text-white text-sm'>{card.itemNumber} items</p>
         </div>
    </div>
  )
}
export default CategoryCard;