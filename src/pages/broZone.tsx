import laxGuy from "../images/lac.png"
import { useEffect } from "react";
import TeamComponent from "../component/teamCompo";


const BroZone = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('bg-bgBro');

        return () => {
            document.body.classList.remove('bg-bgBro');
        };
    });



    return (
        <div >

            <div className="w-screen h-full md:w-full md:h-full uppercase bg-bgBro flex flex-row items-stretch  md:pt-broPad2  " >
                <div className="flex-col w-screen h-full md:w-6/12">
                    <div className="w-full text-left pt-20 md:pt-44 pl-5 md:pl-broPad">
                        <p className="text-bzone font-superstar ">
                            Created By Lacrosse Lovers,

                        </p>
                        <p className="text-bzone font-superstar ">
                            For the Ultimate Lacrosse Lover
                        </p>

                    </div>

                    <div className="w-screen h-full md:w-10/12 text-left  py-8  md:pt-10  pl-5 md:pl-broPad">
                        <p className="text-bzone2 font-superstar tracking-mini">
                            {/* This is a project that unites all of lacrosse in the metaverse, owned and driven by
                    the lacrosse community   */}
                            The 10000 unique Bros double as your membership to the Fraternity. The goal of the project is simple yet full of possibilities:
                            To grow the game, connect lacrosse passionates and give back to all.
                        </p>

                        <p className="text-bzone2 font-superstar pt-5 tracking-mini">
                            {/* A collection of 10000 unique lax bros is the membership that aims to
                    revolutionise this sport like no other. The goal of the project is simple yet full
                    of possibilities: To grow the game, connect players and give back to all */}
                            LaxBros are created to be the driving force that pioneers the growth of lacrosse around the world. With the emerging popularity of metaverse and NFTs,
                            we are attempting to merge physical and digital dimensions of our sport, push boundaries and take lacrosse to the next level.
                        </p>

                        <p className="text-bzone2 font-superstar pt-5 tracking-mini ">
                            {/* We have a few steps planned to kickstart this project, starting off with donating
                    to charities that would help grow our medicine game, member exclusive
                    merchandise, “The Stadium” for winning real world rewards and so much more… But
                    what comes after, comes down to the bros    */}
                            We visualise LaxBros as the backbone of the lacrosse community while our sport continues to grow across the globe.
                            We hope to see lacrosse to be as popular as sports like basketball and soccer around the world.
                        </p>

                        <p className="text-bzone2 font-superstar pt-5 tracking-mini ">
                            LaxBros is created to give all lacrosse lovers power to develop our medicine  game. Together, possibilities are endless. Everyone will have a voice on our platform.
                        </p>

                        <p className="text-bzone2 font-superstar pt-5 tracking-mini ">
                            We want to hear from you.
                        </p>


                        <p className="text-bzone2 font-superstar pt-5 tracking-mini ">
                            Join us as one of the bros.
                        </p>

                        <p className="text-bzone2 font-superstar pt-5 tracking-mini ">
                            We await you all in the Fraternity…
                        </p>


                    </div>
                    <div className="hidden md:block  w-6/12 text-leftmd:pt-8 pl-broPad">
                        <p className="text-7xl font-nicely ">
                            Bro
                        </p>
                        <p className="text-7xl font-nicely -mt-14">
                            Zone
                        </p>
                    </div>
                </div>

                <div className="w-6/12 hidden md:flex flex-column content-end items-end justify-end">
                    <img className="pr-36 w-11/12" alt="" src={laxGuy}></img>
                </div>

            </div>
            <TeamComponent></TeamComponent>
        </div>



    );
}

export default BroZone;