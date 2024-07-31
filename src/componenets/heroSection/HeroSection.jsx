import { Typography } from '@material-tailwind/react'
import React, { useContext } from 'react'
import myContext from '../../context/data/myContext';

function HeroSection() {
    const context = useContext(myContext);
    const { mode } = context;
    return (
        <section
            style={{ background: mode === 'dark' ? 'rgb(30, 41, 59)' : '#ffff' }}>

            {/* Hero Section  */}
            <div className="container mx-auto flex px-5 py-8 items-center justify-center flex-col">
                {/* Main Content  */}
                <main>
                    <div className="text-center">
                        <div className="mb-2">
                            {/* Image  */}
                            <div className="flex justify-center">
                                <img src="logo.svg" alt="" />
                            </div>

                            {/* Text  */}
                            <h1 className=' text-3xl text-blue-700 font-bold'>Blogram</h1>
                        </div>

                        {/* Paragraph  */}
                        <p
                            style={{ color: mode === 'dark' ? 'white' : 'cornflowerblue' }}
                            className="sm:text-3xl text-xl font-extralight sm:mx-auto ">
                            Here are some blogs & My Projects
                        </p>
                    </div>

                </main>
            </div>
        </section>
    )
}

export default HeroSection