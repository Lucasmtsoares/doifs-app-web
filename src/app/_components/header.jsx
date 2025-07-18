const options = [
    { label: 'Serviços', id: 'services' },
    { label: 'Contato', id: 'contact' },
    { label: 'Sobre', id: 'about' },
];

export function Header() {
    return (
        <header className="flex justify-center">
            <div className="flex justify-between items-center w-6xl pt-5">
                <img src="file.svg" alt="Logo Conect Cursos" className="w-[50px] h-[60px]" />
                <navbar>
                    <ul className="flex items-center gap-6 text-black">
                        {
                            options.map((options, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${options.id}`}
                                        className="relative inline-block pb-1 
                                        before:content-[''] 
                                        before:absolute 
                                        before:bottom-0 
                                        before:left-0 
                                        before:h-[2px] 
                                        before:w-0 
                                        before:bg-green-700 
                                        before:transition-all 
                                        before:duration-300 
                                        hover:before:w-full"
                                    >
                                        {options.label}
                                    </a>
                                </li>

                            ))
                        }
                        <li>
                            <a
                                href="#contact-us"
                                className="text-white px-6 py-3 rounded-2xl bg-blue-800 inline-block">
                                Dashboard
                            </a>
                        </li>
                    </ul>
                </navbar>
            </div>
        </header>
    )
}