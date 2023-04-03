
import Link from "next/link";

const ButtonContactWhatsapp = () => {
    return (
        <>
            <div className="flex flex-col items-center justify-center p-5 space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                <Link
                    href={"https://wa.me/5493471626032"} target="_blank"
                    className="rounded-md bg-[#50cc5e] mt-5 pt-7 pb-7 px-8 lg:py-4 text-sm lg:text-base font-semibold text-white duration-300 ease-in-out hover:bg-[#50cc5e]/80"
                >
                    ENVIAR MENSAJE
                </Link>
            </div>
        </>
    )
}

export default ButtonContactWhatsapp;