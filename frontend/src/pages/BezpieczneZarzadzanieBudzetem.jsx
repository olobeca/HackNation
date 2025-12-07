import Header from '../components/Header';  
import {useState} from 'react';
import docsGray from '../assets/docsGray.svg';
import docsWhite from '../assets/docsWhite.svg';

function BezpieczneZarzadzanieBudzetem() {

    const [isChanged,SetisChanged] = useState(true);

    return (
        <div className="bg-gray-50 h-screen">
            <Header/>
            <div className="flex flex-col px-12">
                <div className="w-full flex gap-5 items-center mt-5">
                    <div className="bg-white shadow-md w-[65%] rounded-xl p-8 relative">
                        {isChanged ? (
                            <div className="flex flex-col gap-1 text-left ">
                                <div className="flex justify-between items-center">
                                    <div>
                                        <h1 className="text-sm text-gray-500">Akcje</h1>
                                        <h1 className="text-xs text-gray-400 mb-4">Zarządzaj zmianami w budżecie</h1>
                                    </div>
                                    <div className="bg-yellow-50 text-yellow-600 text-xs font-medium px-3 py-1 rounded-full motion-preset-pulse motion-duration-2000 ">Niezapisane zmiany</div>
                                </div>
                                <button className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 hover:shadow-lg hover:scale-105 text-white text-base shadow-md">Zapisz do Master-Repozytorium</button>
                                <img src={docsWhite} alt="dosc" className="w-8 h-8 absolute top-5 right-5 opacity-20"/>
                                <div className="mt-4 flex w-full p-4 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg text-xs" role="alert">
                                    <p>Pamiętaj, aby zapisać wprowadzone zmiany. Nieprawidłowe dane zostaną automatycznie odrzucone.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-1 text-left relative">
                                <h1 className="text-sm text-gray-500">Akcje</h1>
                                <h1 className="text-xs text-gray-400 mb-4">Zarządzaj zmianami w budżecie</h1>
                                <button className="w-full py-4 rounded-xl bg-gray-100 text-gray-400 text-base cursor-not-allowed">Zapisz do Master-Repozytorium</button>
                                <img src={docsGray} alt="dosc" className="w-8 h-8 absolute top-0 right-0 opacity-20"/>
                            </div>
                        )}
                    </div>
                    <div className="bg-white shadow-md rounded-xl p-5 w-full">

                    </div>
                </div>
            </div>
        </div>

    )
}

export default BezpieczneZarzadzanieBudzetem;