import React from 'react';
import './Banner.css'
import banner from '../../../images/bannernew.jpeg'
import banner2 from '../../../images/section.png'
const Banner = () => {
    return (
        <>
            <div className='banner d-flex '>

                <div className='text-align-center'><h1 className='banner-text text-align-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, ducimus, fugiat quis magnam commodi tempora, tenetur non atque optio deleniti labore sed! Voluptatibus commodi sapiente quisquam at cupiditate repudiandae unde dicta, deserunt expedita fuga repellat ducimus illum sit pariatur debitis beatae ullam quis reiciendis, esse ea officia! Iste, perspiciatis aut.</h1></div>
                <img className='ms-auto' src={banner} alt="" />

            </div>

        </>
    );
};

export default Banner;