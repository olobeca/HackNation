import Header from '../components/Header';  
import {useState} from 'react';
import docsGray from '../assets/docsGray.svg';
import docsWhite from '../assets/docsWhite.svg';
import filtersBlue from '../assets/filtersBlue.svg';
import glass from '../assets/glass.svg';
import shield from '../assets/shield.svg';
import editBlue from '../assets/editBlue.svg';

function BezpieczneZarzadzanieBudzetem() {

    const [isChanged,SetisChanged] = useState(false);

    const [dataLen,SetdataLen] = useState(5);

    const [filterLen,SetfilterLen] = useState(5);

    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Header/>
            <div className="flex flex-col px-12">
                <div className="w-full flex gap-5 items-stretch mt-5">
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
                                <div className="mt-4 flex w-full p-4 bg-yellow-50 border border-yellow-200 text-yellow-700 rounded-lg text-xs" role="alert">
                                    <p>Pamiętaj, aby zapisać wprowadzone zmiany. Nieprawidłowe dane zostaną automatycznie odrzucone.</p>
                                </div>
                            </div>
                        ) : (
                            <div className="flex flex-col gap-1 text-left relative">
                                <h1 className="text-sm text-gray-500">Akcje</h1>
                                <h1 className="text-xs text-gray-400 mb-4">Zarządzaj zmianami w budżecie</h1>
                                <button className="w-full py-4 rounded-xl bg-gray-100 text-gray-400 text-base cursor-not-allowed">Zapisz do Master-Repozytorium</button>
                                <img src={docsGray} alt="dosc" className="w-8 h-8 absolute top-5 right-5 opacity-20"/>
                            </div>
                        )}
                    </div>
                    <div className={`bg-white shadow-md rounded-xl p-5 w-full ${isChanged ? "h-70" : "h-[45]"}`}>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between mb-4">
                                <div className="flex gap-4 items-center">
                                    <div className="w-8 h-8 flex items-center justify-center     bg-blue-200 rounded-xl">
                                        <img src={filtersBlue} alt='filters' className="h-6 w-6"></img>
                                    </div>
                                    <div className="flex flex-col gap-0 text-left">
                                        <h1 className="text-gray-900 text-sm">Filtry</h1>
                                        <h1 className="text-gray-500 text-xs">Zawęź wyniki wyszukiwania</h1>
                                    </div>
                                </div>
                                <button className="text-xs text-blue-500 bg-blue-50 px-2 rounded-lg">Wyczyść</button>
                            </div>
                            <div className="w-full flex relative gap-3">
                                <input type="text" placeholder="Dział" className="w-full relative border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base"/>
                                <img src={glass} alt="search" className="w-6 h-6 absolute right-3 top-2 cursor-pointer"/>
                                <input type="text" placeholder="Rozdział" className="w-full relative border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base"/>
                                <img src={glass} alt="search" className="w-6 h-6 absolute right-3 top-2 cursor-pointer"/>
                                <input type="text" placeholder="Paragraf" className="w-full relative border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base"/>
                                <img src={glass} alt="search" className="w-6 h-6 absolute right-3 top-2 cursor-pointer"/>
                                <input type="text" placeholder="Nazwa zadan" className="w-full relative border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base"/>
                                <img src={glass} alt="search" className="w-6 h-6 absolute right-3 top-2 cursor-pointer"/>
                            </div>
                        </div> 
                    </div>
                </div>
                <div className="w-full bg-blue-50 border border-blue-100 flex gap-4 rounded-xl p-5 mt-4 items-center">
                    <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                        <img src={shield} alt="shield" className="w-6 h-6"/>  
                    </div>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-blue-700 text-sm">Bezpieczne zarządzanie budżetem</h1>
                        <p className="text-blue-600 text-xs">Wszystkie komórki są edytowalne. System automatycznie sprawdza zgodność z klasyfikacją budżetową i blokowaniem nieprawidłowych danych przed zapisem do centralnego repozytorium.</p>
                    </div>
                </div>
                <div className="flex flex-col gap-0 rounded-xl mt-5 bg-white shadow-md">
                    <div className="flex gap-6 items-center p-5 border-b border-gray-200">
                        <div className="flex items-center justify-center w-9 h-9 bg-blue-200 rounded-lg">
                            <img src={editBlue} alt="edit" className="w-6 h-6"/>
                        </div>
                        <div className="flex flex-col gap-1 text-s pr-5">
                            Wyświetlono {filterLen} z {dataLen} 
                            <h1 className="text-xs text-gray-500">Kliknij komórkę aby edytować</h1>
                        </div>
                        <span className="bg-green-100 text-green-400 py-1 px-2 rounded-lg text-xs">Prawidłowe</span>
                        <span className="bg-red-100 text-red-400 py-1 px-2 rounded-lg text-xs">Błąd klasyfikacji</span>
                        <span className="bg-yellow-100 text-yellow-400 py-1 px-2 rounded-lg text-xs">Ostrzezenie</span>
                    </div>
                                        <div className="bg-gray-50 rounded-xl overflow-auto border border-gray-100 p-5 max-h-[400px] w-full">
                        {/* Table */}
                        <div className="inline-block min-w-full">
                            {/* Header Row */}
                            <div className="grid gap-0 sticky left-0 z-10" style={{gridTemplateColumns: 'repeat(25, minmax(120px, 1fr))'}}>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Id</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Część Budżetowa</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Dział</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Rozdział</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Paragraf</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Źródło Finansowania</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Grupa Wydatków</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Budżet Zadaniowy Pełny</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Budżet Zadaniowy</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Nazwa Programu</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Komórka Organizacyjna</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Plan WI</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Dysponent Środków</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Budżet</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Nazwa Zadania</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Szczegółowe Uzasadnienie</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Przeznaczenie</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Potrzeby 2026</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Limit 2026</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Brakująca Kwota 2026</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Kwota Umowy</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Nr Umowy</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Dotacja Z Kim</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Podstawa Prawna Dotacji</div>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Uwagi</div>
                            </div>
                            
                            {/* Data Rows */}
                            {[1, 2, 3, 4].map((row) => (
                                <div key={row} className="grid gap-0" style={{gridTemplateColumns: 'repeat(25, minmax(120px, 1fr))'}}>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">{row}</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700">Dane</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default BezpieczneZarzadzanieBudzetem;