import { useEffect } from "react";
import field_ from "../images/field.png";

const RoadMap = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('bg-bgRoad');

        return () => {
            document.body.classList.remove('bg-bgRoad');
        };
    });

    return (
        <div>

            <div className="w-screen h-screen sm:w-full sm:h-full uppercase flex flex-col items-stretch pt-broPad2 " >
                <div className="flex flex-col md:flex-row w-full justify-center align-center items-center pt-28">
                    <div className="flex md:flex-col flex-row justify-center align-center items-center md:justify-start md:align-start md:items-start  w-full md:w-6/12 text-center md:text-left pl-broPad md:self-start">
                        <p className="text-36px  md:text-roadmap font-nicely ">
                            Road
                        </p>
                        <p className="text-36px  md:text-roadmap font-nicely pl-5 md:pl-0 md:-mt-14">
                            Map
                        </p>
                    </div>

                    <div className="w-full md:w-6/12  text-center md:text-left pl-broPad">
                        <p className="text-bzone font-superstar pt-10 md:pt-0">
                            Mission, values and goals

                        </p>
                        <div className="font-superstar text-left text-1xl  w-11/12 justify-self-center tracking-mini leading-7  pt-12 md:pt-8">
                            We want to be one of the driving forces that aids the growth of lacrosse around the world.
                            With the emerging popularity of metaverse and NFTs, we saw an opportunity to merge physical and digital dimensions of our sport,
                            taking our sport to new heights.
                        </div>

                        <div className="font-superstar text-left text-1xl  w-11/12 justify-self-center tracking-mini py-5 md:pt-2 leading-7">
                            OUR VISION IS TO BE THE BACKBONE OF THE LACROSSE COMMUNITY WHILE OUR SPORT CONTINUES TO GROW ACROSS THE GLOBE. WE HOPE TO SEE LACROSSE TO BE AS POPULAR AS SPORTS LIKE BASKETBALL AND SOCCER AROUND THE WORLD
                        </div>

                    </div>

                </div>
                <div className="w-full text-center flex flex-col align-center items-center justify-center font-superstar text-1xl">
                    {/* <div className="absolute w-full h-full" style={{backgroundImage:'url(' + field_ + ')', backgroundSize:'cover', backgroundPosition:'center',backgroundRepeat:'no-repeat' }}>
                
                
                </div> */}
                    <div className="w-full flex flex-col align-center items-center justify-center px-4 md:px-40 py-10" style={{ backgroundColor: "rgb(253 230 138)" }}>
                        <div className="w-full md:w-8/12 md:px-0 md:py-0 ">
                            <div className="text-3xl">
                                May 2022: Bros before Pros.
                            </div>
                            <div>
                                Our Bros are fully dressed and coming out of the locker room! Just in time to celebrate the NCAA tournaments and PLL season 4. Stay tuned for our exact minting date!

                            </div>
                        </div>


                    </div>

                    <div className="w-full flex flex-col align-center items-center justify-center  px-4 md:px-40 py-10 " style={{ backgroundColor: "rgb(161 161 170)" }}>
                        <div className="w-full md:w-8/12">
                            <div className="text-3xl">
                                Q3 2022: Our establishments are ready!
                            </div>

                            <div className="py-4">
                                <p className="underline">Locker Room </p>
                                <p>With the bros in your wallets, we can redesign and construct the locker room for displaying and sorting all the bros </p>

                            </div>
                            <div className="py-4">
                                <p className="underline">
                                    Pro-Shop
                                </p>
                                <p>
                                    Just like any good Pro-Shop, we have all sorts of merchandise designed for our Lax Bros only. Remember, lacrosse is 30% skill and 70% looking good!

                                </p>
                            </div>

                            <div className="py-4" >
                                <p className="underline">
                                    The Stadium

                                </p>
                                <p>
                                    The Stadium will be the exclusive location where bros hangout and is a one-stop for all lacrosse games. Bros will be able to view all upcoming lacrosse games and events, participate in interactive games and win real world rewards!

                                </p>
                            </div>



                        </div>


                    </div>

                    <div className="w-full flex flex-col align-center items-center justify-center px-4 md:px-40 py-10 bg-green-400">
                        <div className="w-full md:w-8/12">
                            <div className="text-3xl">
                                LaxBros Metaverse
                            </div>
                            <div>
                                This is just the beginning for LaxBros. Our bros will be joining us on the front seat in our endeavour in the metaverse. We will pioneer growth and promotion of lacrosse through Web3. You name it, we build it!

                            </div>
                        </div>

                    </div>

                </div>



            </div>
        </div>

    );
}

export default RoadMap;