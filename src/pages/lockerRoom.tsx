import { useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";
const LockerRoom = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
        document.body.classList.add('bg-bgLocker');

        return () => {
            document.body.classList.remove('bg-bgLocker');
        };
    });

    let temp = Array.from({ length: 3 }, (_, i) => i);

    const getImage = () => {
        let tmp_: { url: any }[] = [];
        for (let i = 0; i < 3; i++) {
            let num_ = Math.round(Math.random() * 16);
            tmp_.push({ url: require("../images/avatar/" + num_ + ".png") })
        }
        return tmp_;

    }

    let imageRow_1 = temp.map((num) => {
        return (
            <div key={num} className="flex flex-row content-between items-between justify-between z-50 gap-4">
                <SimpleImageSlider
                    width={250}
                    height={250}
                    images={getImage()}
                    showBullets={false}
                    showNavs={false}
                    bgColor={"#FBF8EE"}
                    autoPlay={true}
                    loop={true}
                    slideDuration={2}

                />
                <SimpleImageSlider
                    width={250}
                    height={250}
                    images={getImage()}
                    showBullets={false}
                    showNavs={false}
                    bgColor={"#FBF8EE"}
                    autoPlay={true}
                    loop={true}
                    slideDuration={2}

                />
                <SimpleImageSlider
                    width={250}
                    height={250}
                    images={getImage()}
                    showBullets={false}
                    showNavs={false}
                    bgColor={"#FBF8EE"}
                    autoPlay={true}
                    loop={true}
                    slideDuration={2}

                />

            </div>
        )
    })

    return (
        <div className="w-full h-full md:w-full md:h-full uppercase pt-32 md:pt-0 flex md:flex-row flex-col " >
            <div className="flex w-full md:flex-col flex-col-reverse ">
                <div className="w-full text-center md:text-left pt-10 md:pt-80 pl-broPad">
                    <p className="text-bzone font-superstar w-full md:w-locker_ ">
                        Our bros are still gearing up! But here are some that got dressed quickly for showcasing!
                    </p>
                </div>

                <div className="w-full md:w-6/12 text-center md:text-left pt-0 md:pt-32 pl-broPad">
                    <p className="text-36px md:text-7xl font-nicely ">
                        Locker
                    </p>
                    <p className="text-36px md:text-7xl font-nicely md:-mt-14">
                        Room
                    </p>
                </div>


            </div>
            <div className="md:flex flex-row content-end items-end justify-end w-full pt-0 md:pt-28 pr-20 z-10">
                <div className="gap-4 hidden md:flex flex-col content-end items-end justify-end ">
                    {imageRow_1}
                </div>
                <div className="flex md:hidden flex-row content-center items-center justify-center z-50 pl-10 py-10 gap-10">
                    <SimpleImageSlider
                        width={150}
                        height={150}
                        images={getImage()}
                        showBullets={false}
                        showNavs={false}
                        bgColor={"#FBF8EE"}
                        autoPlay={true}
                        loop={true}
                        slideDuration={2}

                    />
                    <SimpleImageSlider
                        width={150}
                        height={150}
                        images={getImage()}
                        showBullets={false}
                        showNavs={false}
                        bgColor={"#FBF8EE"}
                        autoPlay={true}
                        loop={true}
                        slideDuration={2}

                    />
                    <SimpleImageSlider
                        width={150}
                        height={150}
                        images={getImage()}
                        showBullets={false}
                        showNavs={false}
                        bgColor={"#FBF8EE"}
                        autoPlay={true}
                        loop={true}
                        slideDuration={2}

                    />

                </div>
            </div>


        </div>

    );
}

export default LockerRoom;