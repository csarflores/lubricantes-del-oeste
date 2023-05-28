import Link from "next/link";

const ButtonContactShift = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-5 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                    href={"/reservas"}
                    className="rounded-md bg-primary mt-5 py-4 px-8 text-sm text-center lg:text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                >
                    RESERVAR TURNO AHORA
                </Link>
            </div>
        </>
    )
}

export default ButtonContactShift;