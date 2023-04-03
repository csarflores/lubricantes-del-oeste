import Image from "next/image"

const Gallery = () => {

    return (
        <>
            <section className="overflow-hidden text-neutral-700">
                <div className="container mx-auto px-5 py-2 lg:px-32">
                    <div className="-m-1 flex flex-wrap md:-m-2">
                        <div className="flex w-1/2 flex-wrap">
                            <div className="w-1/2 p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition duration-500 hover:rounded-lg"
                                    src="/images/works/fiesta.jpg"
                                    width={300}
                                    height={300}
                                />
                            </div>
                            <div className="w-1/2 p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition duration-500 hover:rounded-lg"
                                    src="/images/works/clio.jpg"
                                    width={300}
                                    height={300} />

                            </div>
                            <div className="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    className="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition duration-500"
                                    src="/images/works/camion.jpg"
                                    width={300}
                                    height={300} />
                            </div>
                        </div>
                        <div class="flex w-1/2 flex-wrap">
                            <div class="w-full p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition duration-500 hover:rounded-lg"
                                    src="/images/works/corolla.jpg"
                                    width={300}
                                    height={300} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition duration-500 hover:rounded-lg"
                                    src="/images/works/vw.jpg"
                                    width={300}
                                    height={300} />
                            </div>
                            <div class="w-1/2 p-1 md:p-2">
                                <Image
                                    alt="gallery"
                                    class="block h-full w-full rounded-lg object-cover object-center hover:scale-110 transition duration-500 hover:rounded-lg"
                                    src="/images/works/208.jpg"
                                    width={300}
                                    height={300} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )

}

export default Gallery