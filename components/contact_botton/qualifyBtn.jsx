import Link from "next/link";

const ButtonQualify = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-5 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                    href="https://g.page/r/CZqtSze1EmQDEBM/review" passHref
                    className="rounded-md animate-bounce bg-primary mt-5 py-4 px-8 text-sm text-center lg:text-base font-semibold text-white transition duration-500 ease-in-out hover:bg-[#3bc555] hover:border-solid hover:border-4 hover:text-black transform hover:-translate-y-1 hover:scale-110"
                >
                    RECOMENDAR<br />CALIFICAR
                </Link>
            </div>
        </>
    )
}

export default ButtonQualify;