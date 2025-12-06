import dot from '../assets/dot.svg';

function LandingPage() {
    return (
        <>
        <div className="bg-white min-h-screen flex flex-col gap-0">
            <div className="bg-gradient-to-r from-blue-800 to-blue-900 text-white py-32 px-8 flex flex-col gap-12 text-left">
                <h1 className="text-gray-300 font-light text-lg">Bezpieczne rozwiązanie dla administracji publicznej</h1>
                <div className="flex flex-col gap-2">
                    <h1 className="text-6xl font-medium text-white">Koniec Chaosu Excela.</h1>
                    <h1 className="text-6xl font-medium text-blue-400">Precyzyjne Planowanie Budżetu</h1>
                    <h1 className="text-6xl font-medium text-white">na 4 Lata.</h1>
                </div>
                <h1 className="text-white font-extralight text-2xl max-w-[65%]">System Koordynacji Planowania Budżetu zapewnia pełną kontrolę, bezpieczeństwo danych i zgodność z przepisami. Transformacja cyfrowa bez ryzyka.</h1>
                <div className="flex gap-2 max-w-[50%]">
                    <button className="bg-white hover:bg-gray-50 rounded-lg text-blue-800 text-md items-center justify-center py-4 w-[60%]">Rozpocznij Cyfrową Transformację</button>
                    <button className="border-2 border-white rounded-lg text-white text-md items-center justify-center py-4 w-[40%] hover:bg-blue-800">Zobacz Demo</button>
                </div>
                <div className="max-w-[70%]">
                    <hr className=" border-[0.5px] border-blue-700"></hr>
                </div>
                <div className="max-w-[70%]">
                    <div className="flex justify-between">
                        <div className="flex gap-2 justify-start">
                            <img src={dot} alt="dot" className="w-8 h-8"/>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-md text-gray-200">Odporność na błędy</h1>
                                <h1 className="text-sm text-gray-400">Automatyczna walidacja danych</h1>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-start">
                            <img src={dot} alt="dot" className="w-8 h-8"/>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-md text-gray-200">Bezpieczeństwo</h1>
                                <h1 className="text-sm text-gray-400">Segmentacja uprawnień</h1>
                            </div>
                        </div>
                        <div className="flex gap-2 justify-start">
                            <img src={dot} alt="dot" className="w-8 h-8"/>
                            <div className="flex flex-col gap-2">
                                <h1 className="text-md text-gray-200">Zgodność prawna</h1>
                                <h1 className="text-sm text-gray-400">Walidacja klasyfikacji budżetowej</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-gray-200 text-white py-24 px-8 flex flex-col gap-6 items-center justify-center">
                <h1 className="text-4xl font-normal text-gray-800">Od Chaosu do Kontroli</h1>
                <h1 className="text-lg font-normal text-gray-500 mb-3">Przejście z monolitycznych plików Excel do nowoczesnego centralnego repozytorium</h1>
                
                <div className="w-full flex gap-4">
                    <div className="bg-white rounded-lg p-9 flex-1 flex flex-col gap-4 border border-red-500 text-left shadow-lg">
                        <h1 className="text-black text-2xl font-light">Monolityczny Plik Excel</h1>
                    </div>
                    <div className="bg-white rounded-lg p-9 flex-1 flex flex-col gap-4 border border-green-500 text-left shadow-lg">

                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default LandingPage;