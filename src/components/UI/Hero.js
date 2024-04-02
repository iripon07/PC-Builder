import Image from 'next/image'
import banner1 from "../../../images/desktop1.jpg"

const Hero = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="slide1" className="carousel-item relative w-full">
                    <Image
                        src={banner1}
                        width={0}
                        height={0}
                        alt="Picture of the author"
                        style={{ width: '100%', height: 'auto' }}
                    />
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Hero