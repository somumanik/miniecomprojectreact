import React from 'react'
import Productitem from '../common/data/Productitem'

export default function Product() {
    return (
        <div>
            <div>

                <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" className= " justify-start text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Dropdown button <svg class="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 4 4 4-4" />
                </svg>
                </button>


                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                        </li>
                    </ul>
                </div>

            </div>
            <div className='grid lg:grid-cols-[20%_auto] grid-cols-1 gap-5 my-5'>
                <div className='border-[1px] border-[#ccc]'>
                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>categories</p>

                        <ul >
                            <li><input type="checkbox" /> Beauty </li>
                            <li><input type="checkbox" /> Fragrances </li>
                            <li><input type="checkbox" /> Furniture </li>
                            <li><input type="checkbox" /> Groceries </li>
                            <li><input type="checkbox" /> Home Decoration </li>
                            <li><input type="checkbox" /> Kitchen Accessories </li>
                            <li><input type="checkbox" /> Laptops </li>
                            <li><input type="checkbox" /> Mens Shirts </li>


                        </ul>
                    </div>

                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>BRAND</p>

                        <ul >
                            <li><input type="checkbox" /> Essence </li>
                            <li><input type="checkbox" /> Glamour Beauty </li>
                            <li><input type="checkbox" /> Velvet Touch </li>
                            <li><input type="checkbox" /> Chic Cosmetics </li>
                            <li><input type="checkbox" /> Nail Couture </li>
                            <li><input type="checkbox" /> Calvin Klein </li>
                            <li><input type="checkbox" /> Chanel </li>
                            <li><input type="checkbox" /> Gucci </li>
                            <li><input type="checkbox" /> Annibale Colombo </li>
                            <li><input type="checkbox" /> Furniture Co. </li>
                            <li><input type="checkbox" /> Knoll </li>
                            <li><input type="checkbox" /> Bath Trends </li>
                            <li><input type="checkbox" /> Apple </li>
                            <li><input type="checkbox" /> Asus </li>
                            <li><input type="checkbox" /> Huawei </li>
                            <li><input type="checkbox" /> Lenovo </li>
                            <li><input type="checkbox" /> Dell </li>
                            <li><input type="checkbox" /> Fashion Trends </li>
                            <li><input type="checkbox" /> Gigabyte </li>
                            <li><input type="checkbox" /> Classic Wear </li>
                            <li><input type="checkbox" /> Casual Comfort </li>
                            <li><input type="checkbox" /> Urban Chic </li>


                        </ul>
                    </div> <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>price</p>

                        <ul >
                            <li><input type="radio" /> Rs. 10 to Rs. 250 </li>
                            <li><input type="radio" /> Rs. 250 to Rs. 500 </li>
                            <li><input type="radio" /> Rs. 500 to Rs. 1000 </li>
                            <li><input type="radio" /> Rs. 1000 to Above </li>

                        </ul>
                    </div>
                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>DISCOUNT RANGE</p>

                        <ul >
                            <li><input type="radio" /> 5% and above</li>
                            <li><input type="radio" /> 10% and above</li>
                            <li><input type="radio" /> 15% and above </li>
                            <li><input type="radio" /> 20% and above </li>

                        </ul>
                    </div>
                </div>

                <div className='bg-gray-50 grid lg:grid-cols-4 grid-cols-1 gap-5'>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                     <Productitem/>
                
                     
                  
                </div>
            </div>
        </div>
    )
}



