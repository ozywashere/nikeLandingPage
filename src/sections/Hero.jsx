import React, { useState } from "react";
import { arrowRight } from "../assets/icons/index.js";
import { Button } from "../components/Button.jsx";
import { statistics } from "../constants/index.js";
import {bigShoe1} from "../assets/images/index.js";
import {shoes} from "../constants/index.js";
import { ShoeCard } from "../components/ShoeCard.jsx";

export const Hero = () => {
    const [bigShoeImg,setBigShoeImg] = useState(bigShoe1)
    return ( <div className='w-full flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container '
                      id="home">
        <div className='relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28'>
            <p className="text-xl font-montserrat text-coral-red">Our Summer Collection</p>
            <h1 className='mt-10 font-palanquin text-8xl max-sm:text-[72px] max-sm:leading[82] font-bold'>
                <span className="xl:bg-white xl:whitespace-nowrap relative z-10 pr-10">The New Arrival</span>
                <br/>
                <span className="text-coral-red inline-block mt-3">Nike</span>
                Shoes
            </h1>
            <p className="font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 ">
                Discover stylish Nike arrivals,quality and affordable shoes for everyone in the family from the latest
                brands.

            </p>
            <Button label='Shop Now' iconURL={ arrowRight }/>
            <div className="flex  justify-start items-start mt-20 w-full flex-wrap gap-16 sm:max-w-md">
                { statistics.map ( ( item , index ) => (

                    <div key={ index }>
                        <p className="text-4xl font-palanquin font-bold">{ item.value }</p>
                        <p className="leading-7 font-montserrat text-slate-gray">{ item.label }</p>
                    </div> ) )
                }
            </div>
        </div>

        <div className='flex justify-center items-center relative flex-1 xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-cover bg-center'>
            <img src={bigShoeImg}
                 alt="hero" width={610}
                 height={500}
                className="object-contain relative z-10"
            />
            <div
                className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                {
                    shoes.map((shoe)=>(
                        <div key={shoe}>
                            <ShoeCard
                                imgURL={shoe}
                                changeBigShoeImage={(shoe)=>{setBigShoeImg(shoe)}}
                                bigShoeImg={bigShoeImg}
                            />
                        </div>
                    )
                    )
                }
            </div>
        </div>
    </div> )
}