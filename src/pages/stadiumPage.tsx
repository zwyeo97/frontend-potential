
import footer_ from '../images/bottom.png'
import Typewriter from 'typewriter-effect';
import { useEffect } from "react";

const StadiumPage = () => {
    useEffect(() => {
        document.body.classList.add('bg-bgStadium');

        return () => {
            document.body.classList.remove('bg-bgStadium');
        };
    });

    return (
        <div className="h-full w-full">

            <div className="absolute w-full h-full uppercase bg-bgStadium ">
                <div className="absolute w-full text-center top-1/3 ">
                    <p className="text-36px md:text-7xl font-nicely ">
                        Stadium
                    </p>

                    <div className="font-superstar text-36px">
                        <Typewriter options={{ cursor: ".", delay: 50 }} onInit={(typewriter) => typewriter.typeString("Building in progress..").start()}  ></Typewriter>

                    </div>
                </div>


            </div>
            <div className="left-0 bottom-0 fixed center">
                <img className="min-w-screen w-screen lg:block transform object-contain overlay-item -z-50" alt="" src={footer_} />
            </div>
        </div>

    )


}


export default StadiumPage;