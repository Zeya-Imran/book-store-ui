import Image from "next/image";

const Banner = () => {
    return (
        <section className="py-8">
            <div className="flex mx-auto w-9/12">
                <div className="w-full relative">
                    <Image  src="/paper-bg.jpg" alt="paper-bg" width={100} height={100} sizes="100vw" className="h-72 w-full rounded-lg"/>
                    <div className="absolute top-20 left-20 text-5xl text-primary-500 kalam-bold leading-[4rem]">
                        <h1>Read, Learn and code,</h1>
                        <h2>Search your Favourite...</h2>
                    </div>
                    <div className="absolute bottom-0 right-20">
                        <Image src="/book.png" alt="book" width={0} height={0} sizes="100vw" style={{width: 'auto', height: '20rem'}} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Banner;