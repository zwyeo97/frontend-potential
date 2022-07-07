import laxBG from '../images/lax_bg.png'

const HomePage = () => {

    return (
        <div>

            <div className=" min-w-screen w-screen h-screen lg:block transform object-contain absolute top-0 left-0 object-center overlay-item -z-50" style={{ backgroundImage: 'url(' + laxBG + ')', backgroundSize: '65%', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', display: 'block' }}>

            </div>
        </div>
    )

}

export default HomePage;