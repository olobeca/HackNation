

function LandingPage() {
    return (
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
                    <button className="bg-white rounded-lg text-blue-800 text-md items-center justify-center py-4 w-[60%]">Rozpocznij Cyfrową Transformację</button>
                    <button className="border-2 border-white rounded-lg text-white text-md items-center justify-center py-4 w-[40%]">Zobacz Demo</button>
                </div>
                <div className="max-w-[70%]">
                    <hr className=" border-[0.5px] border-blue-700"></hr>
                </div>
                <div className="max-w">

                </div>
            </div>
        </div>
    );
}

export default LandingPage;