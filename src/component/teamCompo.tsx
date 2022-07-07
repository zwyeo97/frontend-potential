import React, { useState } from "react";
import frame_ from "../images/avatar/frame.png"
import Typewriter from 'typewriter-effect';


const TeamComponent = () => {

    const [showText0, setShowText0] = useState(false);
    const [showText1, setShowText1] = useState(false);
    const [showText2, setShowText2] = useState(false);
    const [showText3, setShowText3] = useState(false);
    const [showText4, setShowText4] = useState(false);
    const [showText5, setShowText5] = useState(false);
    const [showText6, setShowText6] = useState(false);
    const [showText7, setShowText7] = useState(false);

    const show_ = [showText0, showText1, showText2, showText3, showText4, showText5, showText6, showText7];
    const setShow_ = [setShowText0, setShowText1, setShowText2, setShowText3, setShowText4, setShowText5, setShowText6, setShowText7]


    let temp = Array.from({ length: 8 }, (_, i) => i);
    let temp2 = Array.from({ length: 4 }, (_, i) => i);
    let temp3 = Array.from({ length: 4 }, (_, i) => i + 4);

    const make_visible = (id_: number) => {
        document.getElementById("avatar_" + id_)?.classList.remove("invisible");
        setShow_[id_](true);


        setTimeout(() => { document.getElementById("avatar_" + id_)?.classList.add("invisible"); setShow_[id_](false); }, 5000)
    }

    //<Typewriter options={{cursor:".", delay:50}} onInit={(typewriter) => typewriter.typeString("Building in progress..").start()}  ></Typewriter>
    let imageRow = temp.map((num) => {
        return (
            <div key={num} className="">
                <div id={"avatar_" + num} className="relative text-center flex flex-col items-center mr-20 invisible ">
                    <div id={"text_" + num} className="absolute top-1/3 text-center font-superstar text-2xs md:text-1xl leading-3">
                        {show_[num] && <Typewriter options={{ cursor: "_", delay: 50, autoStart: false }} onInit={(typewriter) => { typewriter.typeString("Hello").start() }}  ></Typewriter>}
                    </div>
                    <img className="w-9/12" alt="" src={frame_}></img>
                </div>
                <img className="" alt="" key={num} onMouseOver={() => { make_visible(num);}} src={require('../images/avatar/' + num + '.png')} />


            </div>
        )
    }

    )

    let imageRow2 = temp2.map((num) => {
        return (
            <div key={num} className="">
                <div id={"avatar_" + num} className="relative text-center flex flex-col items-center mr-20 invisible ">
                    <div id={"text_" + num} className="absolute top-1/3 text-center font-superstar text-2xs md:text-1xl leading-3">
                        {show_[num] && <Typewriter options={{ cursor: "_", delay: 50, autoStart: false }} onInit={(typewriter) => { typewriter.typeString("Hello").start() }}  ></Typewriter>}
                    </div>
                    <img className="w-9/12" alt="" src={frame_}></img>
                </div>
                <img className="" alt="" key={num} onMouseOver={() => { make_visible(num) }} src={require('../images/avatar/' + num + '.png')} />


            </div>
        )
    }

    )

    let imageRow3 = temp3.map((num) => {
        return (
            <div key={num} className="">
                <div id={"avatar_" + num} className="relative text-center flex flex-col items-center mr-20 invisible ">
                    <div id={"text_" + num} className="absolute top-1/3 text-center font-superstar text-2xs md:text-1xl leading-3">
                        {show_[num] && <Typewriter options={{ cursor: "_", delay: 50, autoStart: false }} onInit={(typewriter) => { typewriter.typeString("Hello").start() }}  ></Typewriter>}
                    </div>
                    <img className="w-9/12" alt="" src={frame_}></img>
                </div>
                <img className="" alt="" key={num} onMouseOver={() => { make_visible(num) }} src={require('../images/avatar/' + num + '.png')} />


            </div>
        )
    }

    )



    // <img className="-mx-12 w-6/12" key={num} onClick={()=> console.log(num)} src={require('../images/avatar/' + num + '.png')}/>

    return (
        <div >
            <div className="w-full h-full sm:w-full sm:h-full uppercase flex flex-row items-stretch pb-10 md:pt-broPad2 bg-bgTeam " >
                <div className="flex-col  w-full justify-center content-center">
                    <div className="text-center font-nicely pt-12 text-36px md:text-7xl">
                        Team
                    </div>
                    <div className="w-full  pt-8 flex flex-col items-center content-center text-center">
                        <div className="font-superstar text-center text-3xl px-5   md:px-0 w-screen md:w-9/12 justify-self-center">
                            Our team of bros come from all sorts of backgrounds, from players to designers, engineers, and analysts.
                            What brought us together is the passion we share for lacrosse.
                            Each member contributes to LaxBros uniquely, and we are hoping to expand our team in the near future.</div>
                    </div>


                    <div className="w-full pt-0 md:pt-20 hidden md:flex flex-row items-center content-center justify-center z-40">
                        {imageRow}
                    </div>

                    <div className="w-full pt-0 flex md:hidden flex-col items-center content-center justify-center">
                        <div className="w-full pt-0 flex md:hidden flex-row items-center content-center justify-center">
                            {imageRow2}
                        </div>
                        <div className="w-full pt-0 flex md:hidden flex-row items-center content-center justify-center">
                            {imageRow3}
                        </div>
                    </div>


                </div>


            </div>
        </div>

    );


}

export default TeamComponent;