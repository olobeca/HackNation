import React from 'react';
import lockWhite from '../assets/lockWhite.svg';
import arrowDown from '../assets/arrowDown.svg';
import arrowUp from '../assets/arrowUp.svg';
import shield from '../assets/shield.svg';
import arrowRight from '../assets/arrowRight.svg';
import {useState} from 'react';
import UserContext from '../context/UserContext';
import {Link} from 'react-router-dom';
import { useContext } from 'react';



function LoginPage() {

    const [isOpen, setIsOpen] = useState(false);

    const [Username, setUsername] = useState('');

    const [Department, setDepartment] = useState('')

    const {SetUserData} = useContext(UserContext);

    const [password, setPassword] = useState('');

    const handleLogin = () => {
        SetUserData({
            username: Username,
            userDepartment: Department,
            password: password
        });
    }

    return (
        <div className="bg-gray-50  h-screen flex items-center justify-center">
            <div className="shadow-lg rounded-lg p-4 w-1/3 py-2 px-6 flex flex-col bg-white ">
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
                    <div className="text-left w-full mt-2 flex flex-col gap-2">
                        <h1 className="text-sm text-gray-600">Imię i nazwisko</h1>
                        <input type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base" placeholder='Np. Jan Kowalski' value={Username} onChange={(e) => setUsername(e.target.value)}/>
                    </div>
                    <div className="text-left w-full mt-2 flex flex-col gap-2">
                        <h1 className="text-sm text-gray-600">Hasło</h1>
                        <input type="text" className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-700 text-base" placeholder='**********' value={password} onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <div className="text-left w-full mt-4 flex flex-col gap-1 relative">
                        <h1 className="text-sm text-gray-600">Wybierz swój departament</h1>
                        <button onClick={() => setIsOpen(!isOpen)} className={`w-full border border-gray-300 rounded-lg p-2 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500 ${Department !== '' ? 'text-gray-700':'text-gray-400'} text-base text-left`}>{Department || "Wybierz departament.."}</button>
                        <h1 className="text-gray-400 text-xs">16 jednostek organizacyjnych dostępnych</h1>
                        {isOpen ?
                        <img src={arrowUp} alt="arrow" className="w-6 h-6 absolute right-3 top-9 cursor-pointer"/>
                        :
                        <img src={arrowDown} alt="arrow" className="w-6 h-6 absolute right-3 top-9 cursor-pointer" />
                        }
                        {isOpen &&
                        <div className="absolute top-16 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-10 text-gray-600 overflow-y-auto max-h-48">
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Finansów i Budzetu'); setIsOpen(false)}}>Departament Finansów i Budzetu</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Zdrowia'); setIsOpen(false)}}>Departament Zdrowia</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Edukacji'); setIsOpen(false)}}>Departament Edukacji</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Transportu'); setIsOpen(false)}}>Departament Transportu</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Bezpieczeństwa'); setIsOpen(false)}}>Departament Bezpieczeństwa</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Infrastruktury'); setIsOpen(false)}}>Departament Infrastruktury</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Środowiska'); setIsOpen(false)}}>Departament Środowiska</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('Departament Kultury i Turystyki'); setIsOpen(false)}}>Departament Kultury i Turystyki</button>
                            <button className="p-2 hover:bg-blue-50 cursor-pointer rounded-md w-full text-left" onClick={() => {setDepartment('admin'); setIsOpen(false)}}>admin</button>
                        </div>
                        }
                        
                    </div>
                    <div className="w-full mt-6 relative">
                        <Link className={`w-full flex items-center justify-center py-4 ${Username !== '' && Department !== '' ? 'bg-blue-700 hover:bg-blue-900' : 'bg-blue-300 cursor-not-allowed '} text-white p-3 rounded-lg transition duration-200`} disabled={Username === '' || Department === ''} onClick={handleLogin} to={`${Username !== '' && Department !== '' ?`/BezpieczneZarzadzanieBudzetem`:`/login`}`}>Przejdź do aplikacji</Link>
                        <img src={arrowRight} alt="arrowRight" className="w-6 h-6 absolute right-28 top-4"/>
                    </div>

                    <div className="w-full mt-2">
                        <hr className="border border-gray-100"></hr>
                    </div>
                    <div className="w-full flex mt-2 mb-2 items-center gap-2">
                        <img src={shield} alt="shield" className="w-5 h-5"/>
                        <h1 className="text-xs text-gray-400">Twoja sesja jest szyfrowana i zabezpieczona. Wszystkie działania są rejestrowane zgodnie z wymogami audytu.</h1>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default LoginPage;