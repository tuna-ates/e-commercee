const ProductListPageHeader=()=>{
return(<div className=" flex flex-col w-[100%] items-center justify-center py-10">

<div className=" flex w-[80%] items-center justify-between">
    <p className='text-[#252B42] font-bold text-2xl '>Shop</p>
    <div className="flex items-center">
        <p className='text-[#252B42] font-bold'>Home</p>

        <svg className='text-[#BDBDBD]' xmlns="http://www.w3.org/2000/svg" width="2em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="m10 17l5-5l-5-5"></path>
        </svg>
        <p className='text-[#BDBDBD]'>Shop</p>
        
      </div>
</div>
 

</div>)
}
export default ProductListPageHeader;