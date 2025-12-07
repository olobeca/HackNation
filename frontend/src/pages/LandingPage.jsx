import dot from '../assets/dot.svg';
import docs from '../assets/docsRed.svg';
import wrongRed from '../assets/wrongRed.svg';
import warningRed from '../assets/warningRed.svg';
import dataGreen from '../assets/dataGreen.svg';
import usersGreen from '../assets/usersGreen.svg';
import checkboxGreen from '../assets/checkboxGreen.svg';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';

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
                    <Link to="/login" className="bg-white hover:bg-gray-50 rounded-lg text-blue-800 text-md flex items-center justify-center py-4 w-[60%]">Rozpocznij Cyfrową Transformację</Link>
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
            <div className="bg-gray-50 text-white py-24 px-8 flex flex-col gap-4 items-center justify-center relative">
                <h1 className="text-4xl font-normal text-gray-800">Od Chaosu do Kontroli</h1>
                <h1 className="text-lg font-normal text-gray-500 mb-5">Przejście z monolitycznych plików Excel do nowoczesnego centralnego repozytorium</h1>
                
                <span className="bg-red-600 text-white text-sm rounded-2xl py-2 px-4 absolute left-14 top-52">Stary sposób</span>
                <span className="bg-green-600 text-white text-sm rounded-2xl py-2 px-4 absolute right-14 top-52">Nowy sposób</span>
                <div className="w-full flex gap-4">
                    <div className="bg-white rounded-lg p-9 flex-1 flex flex-col gap-6 border border-red-400 text-left shadow-lg">
                        <div className="flex gap-4 items-center">
                            <div className="rounded-lg bg-red-200 w-12 h-12 flex items-center justify-center">
                                <img src={docs} alt="docs" className="w-9 h-9"/>
                            </div>
                            <h1 className="text-black text-2xl font-normal">Monolityczny Plik Excel</h1>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={wrongRed} alt="wrongRed" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Chaos w Danych</h1>
                                    <h1 className="text-gray-500 text-sm">Wielu użytkowników edytuje ten sam plik jednocześnie, powodując konflikty i nadpisywanie zmian</h1>
                                </div>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={warningRed} alt="warningRed" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Utrata Formuł</h1>
                                    <h1 className="text-gray-500 text-sm">Krytyczne formuły są przypadkowo usuwane lub modyfikowane bez możliwości odzyskania</h1>
                                </div>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={wrongRed} alt="wrongRed" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Błędy w Walidacji</h1>
                                    <h1 className="text-gray-500 text-sm">Brak centralnej kontroli prowadzi do niespójności z klasyfikacją budżetową</h1>
                                </div>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={warningRed} alt="warningRed" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Ręczna Aktualizacja Dokumentów</h1>
                                    <h1 className="text-gray-500 text-sm">Czasochłonne przenoszenie danych do dokumentów Word i innych systemów</h1>
                                </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg p-9 flex-1 flex flex-col gap-6 border border-green-400 text-left shadow-lg">
                        <div className="flex gap-4 items-center">
                            <div className="rounded-lg bg-green-200 w-12 h-12 flex items-center justify-center">
                                <img src={dataGreen} alt="docs" className="w-9 h-9"/>
                            </div>
                            <h1 className="text-black text-2xl font-normal">Centralne Master-Repozytorium</h1>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={checkboxGreen} alt="checkboxGreen" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Automatyczne Scalanie</h1>
                                    <h1 className="text-gray-500 text-sm">System inteligentnie łączy zmiany z różnych źródeł, eliminując konflikty wersji</h1>
                                </div>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={usersGreen} alt="usersGreen" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Równoległa Edycja</h1>
                                    <h1 className="text-gray-500 text-sm">Wielu użytkowników pracuje jednocześnie w swoich zakresach kompetencji bez zakłóceń</h1>
                                </div>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={checkboxGreen} alt="checkboxGreen" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Chronione Formuły</h1>
                                    <h1 className="text-gray-500 text-sm">Kluczowe mechanizmy obliczeniowe są zabezpieczone przed przypadkowymi modyfikacjami</h1>
                                </div>
                        </div>
                        <div className="flex gap-4 items-start">
                                <img src={checkboxGreen} alt="checkboxGreen" className="w-6 h-6"/>
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-gray-800 text-md font-normal">Automatyczna Integracja</h1>
                                    <h1 className="text-gray-500 text-sm">Bezpośrednie generowanie dokumentów urzędowych bez ręcznej interwencji</h1>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default LandingPage;