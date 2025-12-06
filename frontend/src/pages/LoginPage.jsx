import React from 'react';
import lockWhite from '../assets/lockWhite.svg';
import arrowDown from '../assets/arrowDown.svg';
import arrowUp from '../assets/arrowUp.svg';
import {useState} from 'react';


function LoginPage() {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-gray-50  h-screen flex items-center justify-center">
            <div className="shadow-lg rounded-lg p-4 w-1/3 py-12 flex flex-col bg-white ">
                <div className="flex flex-col gap-4 items-center">
                    <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center">
                        <img src={lockWhite} alt="lock" className="w-11 h-11"/>
                    </div>
                    <h1 className="text-black text-3xl font-light">Witaj w Systemie</h1>
                    <h1 className="text-md text-gray-600">System Koordynacji Planowania Budżetu</h1>
                    <div className="w-full border border-green-500 bg-green-50 rounded-lg p-4 flex flex-col gap-2 mt-4">
                        <h1 className="text-xs text-green-700">Bezpieczna Segmentacja Danych</h1>
                        <h1 className="text-xs text-green-600">Uzyskasz dostęp tylko do danych swojego departamentu. Wszystkie operacje są monitorowane i zabezpieczone.</h1>
                    </div>
                    <div className="text-left w-full mt-4 flex flex-col gap-2">
                        <h1 className="text-sm text-gray-600">Imię i nazwisko</h1>
                        <input type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-500 text-base" placeholder='Np. Jan Kowalski'/>
                    </div>
                    <div className="text-left w-full mt-4 flex flex-col gap-2 relative">
                        <h1 className="text-sm text-gray-600">Wybierz swój departament</h1>
                        <button onClick={() => setIsOpen(!isOpen)} className="w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-400 text-base text-left">Wybierz departament..</button>
                        {isOpen ?
                        <img src={arrowUp} alt="arrow" className="w-6 h-6 absolute right-3 top-9 cursor-pointer"/>
                        :
                        <img src={arrowDown} alt="arrow" className="w-6 h-6 absolute right-3 top-9 cursor-pointer" />
                        }
                    </div>

                    <div className="w-full mt-4">
                        <hr className="border border-gray-100"></hr>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;