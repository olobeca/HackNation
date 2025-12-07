import {useState} from 'react';
import UserContext from '../context/UserContext';
import { useContext } from 'react';
import shieldWhite from '../assets/shieldWhite.svg';
import clockBlue from '../assets/clockBlue.svg';


function Header() {

    const {UserData} = useContext(UserContext);

    async function handleDownloadFiles () {
        try { 
            const response = await fetch('http://localhost:5000/api/documents/download', { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if(!response.ok) throw new Error('Błąd pobierania plików');

            const blob = await response.blob();
            const url = window.URL.createObjectURL(new Blob([blob]));
            const link = document.createElement('a');
            link.href = url;
            link.download = 'documents.zip';
            document.body.appendChild(link);
            link.click();
            link.remove();
            window.URL.revokeObjectURL(url);

        } catch(error) {
            console.error("Błąd podczas pobierania dokumentów:", error);
        }
    }


    return (
        <header className="sticky top-0 z-50  bg-white border-b border-gray-200 shadow-md p-4">
            <div className="flex items-center justify-between px-5">
                <div className="flex items-center gap-6">
                    <div className="w-16 h-16 rounded-xl bg-blue-600 flex items-center justify-center">
                        <img src={shieldWhite} alt="shield" className="w-9 h-9"/>
                    </div>
                    <div className="text-left flex flex-col gap-1">
                        <h1 className="text-sm text-gray-600">SYSTEM KOORDYNACJI PLANOWANIA BUDŻETU</h1>
                        <div className="flex items-center gap-1">
                            <h1 className="text-2xl text-gray-800">Witaj,</h1>
                            <h1 className="text-2xl font-medium text-blue-600">{UserData.username}</h1>
                        </div>
                        <h1 className="text-sm text-gray-600">{UserData.userDepartment}</h1>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <button className="rounded-lg bg-green-600 hover:bg-green-700 px-4 py-3 text-white font-semibold" onClick={handleDownloadFiles}>Pobierz dokumenty</button>
                    <div className="bg-blue-50 flex gap-2 p-3 rounded-lg items-center border border-gray-100 shadow-md">
                        <img src={clockBlue} alt="clock" className="w-6 h-6"/>
                        <div className="flex flex-col text-left">
                            <h1 className="text-sm text-blue-600">Okres budżetowy</h1>
                            <h1 className="text-sm text-gray-900">2026-2029</h1>
                        </div>
                    </div>
                    <button className="px-5 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 text-gray-500">Wyloguj</button>
                </div>
            </div>
        </header>
    )
}

export default Header;