import React from 'react'

const Addtobag = () => {
  return (
    <div className="bg-white flex  items-center w-[800px] ml-[30%] mt-8 ">
        <div className="mb-11 ">
          <div >
          <img id="img1" className="w-[120px] cursor-pointer h-[70px]" src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" alt="@tshirt image" />
            </div>
          <div> <img id="img1" className="w-[120px] cursor-pointer h-[70px]" src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" alt="@tshirt image" /></div>
          <div> <img id="img1" className="w-[120px] cursor-pointer h-[70px]" src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" alt="@tshirt image" /></div>
        </div>
        <div>
          <img id="mainimage" className="w-[500px] h-[400px]" src="https://fullyfilmy.in/cdn/shop/products/New-Mockups---no-hanger---TShirt-Yellow.jpg?v=1639657077" alt="@tshirt image" />
          </div>
        <div className="flex flex-col gap-2">
          <div>
            <h3 className="text-sky-700 font-semibold text-[18px]">Polo Alpha</h3>
          </div>
          <div>
            <h2 className="text-4xl font-bold">Custom Fit Follow Bear Sxford Shirt</h2>
          </div>
          <div>
            <p className="text-sm font-serif">Blue Polo With a Classic cut.mad up of smooth and soft Cotton</p>
          </div>
          <div className="flex gap-3 items-center ">
            <div>
              <p className="text-xl font-extrabold ">$99.76</p>
            </div>
            <div>
              <button className="w-[50px] bg-sky-400">-25%</button>
            </div>
          </div>
          <div className="mt-[-12px]">
            <p className="font-serif contrast-50"> <del>$132cut</del></p>
          </div>
          <div>
            <p className="font-semibold">Choose Size</p>
          </div>
          <div className="flex gap-4">
            <button className="bg-black w-8 text-white">S</button>
            <button className="hover:bg-black transition-all hover:text-white w-8">M</button>
            <button className="hover:bg-black transition-all hover:text-white w-8">L</button>
            <button className="hover:bg-black transition-all hover:text-white w-8">XL</button>
            <button className="hover:bg-black transition-all hover:text-white w-8">XXl</button>
          </div>
          <div className="mt-5">
            <button className="text-center w-[350px] h-[40px] bg-blue-700 text-white hover:bg-blue-500">ADD TO BAG</button>
          </div>
        </div>
      </div>
  )
}

export default Addtobag