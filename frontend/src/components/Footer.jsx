

function Footer() {

    return(
        <div className="bg-gray-900 w-full">
                <div className="bg-gray-900 text-left flex w-[50%]">
                    <div className="flex gap-8 p-8 py-12">
                        <div className="flex flex-col gap-4">
                            <h1 className="text-lg text-white font-medium">System Koordynacji Planowania Budżetu</h1>
                            <h1 className="text-gray-400 text-base w-1/2">Nowoczesne rozwiązanie dla administracji publicznej zapewniające pełną kontrolę nad procesem budżetowym.</h1>
                        </div>
                    </div>
                    <div className="flex gap-8 p-8 py-12">
                        <div className="flex flex-col gap-">
                            <h1 className="text-base text-white font-medium mb-2">Informacje</h1>
                            <h1 className="text-gray-400 text-base">Polityka Prywatności</h1>
                            <h1 className="text-gray-400 text-base">Regulamin</h1>
                            <h1 className="text-gray-400 text-base">Bezpieczeństwo Danych</h1>
                            <h1 className="text-gray-400 text-base">Dokumentacja</h1>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Footer;