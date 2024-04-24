import Image from "next/image";

const Banner = () => {
    return (
        <section className="py-8 md:px-0 px-2">
            <div className="flex mx-auto md:max-w-6xl">
                <div className="w-full relative">
                    <Image  src="/paper-bg.jpg" alt="paper-bg" width={100} height={100} sizes="100vw" className="h-72 w-full rounded-lg"/>
                    <div className="absolute top-20 md:left-20 left-10 text-2xl md:text-5xl text-primary-500 kalam-bold md:leading-[4rem] z-20">
                        <h1>Read, Learn and code,</h1>
                        <h2>Search your Favourite...</h2>
                    </div>
                    <div className="absolute bottom-0 md:right-20 right-10">
                        <Image src="/book.png" alt="book" width={0} height={0} sizes="100vw" style={{width: 'auto', height: '20rem'}} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;