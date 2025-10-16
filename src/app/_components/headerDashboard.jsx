import Link from "next/link";

export function HeaderDashboard() {
    return (
        <header className="flex justify-center bg-amber-500">
            <div className="flex justify-between items-center w-6xl pt-5">
                <img src="logo2-doifs.svg" alt="Logo Observatório Doifs" className="w-[200px] h-[100px]" />
                <Link
                    href="/"
                    className="text-white px-6 py-2 rounded-2xl bg-blue-800 inline-block">
                    Encerrar
                </Link>
            </div>
        </header>
    )
}