import Header from '../components/Header';  
import {useState} from 'react';
import docsGray from '../assets/docsGray.svg';
import docsWhite from '../assets/docsWhite.svg';
import filtersBlue from '../assets/filtersBlue.svg';
import glass from '../assets/glass.svg';
import shield from '../assets/shield.svg';
import editBlue from '../assets/editBlue.svg';

function BezpieczneZarzadzanieBudzetem() {

    const [isChanged, SetisChanged] = useState(false);
    const [dataLen, SetdataLen] = useState(5);
    const [filterLen, SetfilterLen] = useState(5);
    const [dataToPush, SetdataToPush] = useState([]);
    const [editingCell, setEditingCell] = useState(null);
    const [originalValue, setOriginalValue] = useState("");
    const [tempValue, setTempValue] = useState("");
    const [tableData, setTableData] = useState({
        1: { CzescBudzetowa: "Dane", Dzial: "Dane", Rozdzial: "Dane", Paragraf: "Dane", ZrodloFinansowania: "Dane", GrupaWydatkow: "Dane", BudzetZadaniowyPelny: "Dane", BudzetZadaniowy: "Dane", NazwaProgram: "Dane", KomorkaOrganizacyjna: "Dane", PlanWI: "Dane", DysponentSrodkow: "Dane", Budzet: "Dane", NazwaZadania: "Dane", SzczegolowjeUzasadnienie: "Dane", Przeznaczenie: "Dane", Potrzeby2026: "Dane", Limit2026: "Dane", BrakujacaKwota2026: "Dane", KwotaUmowy: "Dane", NrUmowy: "Dane", DotacjaZKim: "Dane", PodstawaPrawna: "Dane", Uwagi: "Dane" },
        2: { CzescBudzetowa: "Dane", Dzial: "Dane", Rozdzial: "Dane", Paragraf: "Dane", ZrodloFinansowania: "Dane", GrupaWydatkow: "Dane", BudzetZadaniowyPelny: "Dane", BudzetZadaniowy: "Dane", NazwaProgram: "Dane", KomorkaOrganizacyjna: "Dane", PlanWI: "Dane", DysponentSrodkow: "Dane", Budzet: "Dane", NazwaZadania: "Dane", SzczegolowjeUzasadnienie: "Dane", Przeznaczenie: "Dane", Potrzeby2026: "Dane", Limit2026: "Dane", BrakujacaKwota2026: "Dane", KwotaUmowy: "Dane", NrUmowy: "Dane", DotacjaZKim: "Dane", PodstawaPrawna: "Dane", Uwagi: "Dane" },
        3: { CzescBudzetowa: "Dane", Dzial: "Dane", Rozdzial: "Dane", Paragraf: "Dane", ZrodloFinansowania: "Dane", GrupaWydatkow: "Dane", BudzetZadaniowyPelny: "Dane", BudzetZadaniowy: "Dane", NazwaProgram: "Dane", KomorkaOrganizacyjna: "Dane", PlanWI: "Dane", DysponentSrodkow: "Dane", Budzet: "Dane", NazwaZadania: "Dane", SzczegolowjeUzasadnienie: "Dane", Przeznaczenie: "Dane", Potrzeby2026: "Dane", Limit2026: "Dane", BrakujacaKwota2026: "Dane", KwotaUmowy: "Dane", NrUmowy: "Dane", DotacjaZKim: "Dane", PodstawaPrawna: "Dane", Uwagi: "Dane" },
        4: { CzescBudzetowa: "Dane", Dzial: "Dane", Rozdzial: "Dane", Paragraf: "Dane", ZrodloFinansowania: "Dane", GrupaWydatkow: "Dane", BudzetZadaniowyPelny: "Dane", BudzetZadaniowy: "Dane", NazwaProgram: "Dane", KomorkaOrganizacyjna: "Dane", PlanWI: "Dane", DysponentSrodkow: "Dane", Budzet: "Dane", NazwaZadania: "Dane", SzczegolowjeUzasadnienie: "Dane", Przeznaczenie: "Dane", Potrzeby2026: "Dane", Limit2026: "Dane", BrakujacaKwota2026: "Dane", KwotaUmowy: "Dane", NrUmowy: "Dane", DotacjaZKim: "Dane", PodstawaPrawna: "Dane", Uwagi: "Dane" }
    });

    const columns = [
        { key: "CzescBudzetowa", label: "Część Budżetowa" },
        { key: "Dzial", label: "Dział" },
        { key: "Rozdzial", label: "Rozdział" },
        { key: "Paragraf", label: "Paragraf" },
        { key: "ZrodloFinansowania", label: "Źródło Finansowania" },
        { key: "GrupaWydatkow", label: "Grupa Wydatków" },
        { key: "BudzetZadaniowyPelny", label: "Budżet Zadaniowy Pełny" },
        { key: "BudzetZadaniowy", label: "Budżet Zadaniowy" },
        { key: "NazwaProgram", label: "Nazwa Programu" },
        { key: "KomorkaOrganizacyjna", label: "Komórka Organizacyjna" },
        { key: "PlanWI", label: "Plan WI" },
        { key: "DysponentSrodkow", label: "Dysponent Środków" },
        { key: "Budzet", label: "Budżet" },
        { key: "NazwaZadania", label: "Nazwa Zadania" },
        { key: "SzczegolowjeUzasadnienie", label: "Szczegółowe Uzasadnienie" },
        { key: "Przeznaczenie", label: "Przeznaczenie" },
        { key: "Potrzeby2026", label: "Potrzeby 2026" },
        { key: "Limit2026", label: "Limit 2026" },
        { key: "BrakujacaKwota2026", label: "Brakująca Kwota 2026" },
        { key: "KwotaUmowy", label: "Kwota Umowy" },
        { key: "NrUmowy", label: "Nr Umowy" },
        { key: "DotacjaZKim", label: "Dotacja Z Kim" },
        { key: "PodstawaPrawna", label: "Podstawa Prawna Dotacji" },
        { key: "Uwagi", label: "Uwagi" }
    ];

    const handleCellClick = (rowId, columnName, currentValue) => {
        setEditingCell({ rowId, columnName });
        setOriginalValue(currentValue);
        setTempValue(currentValue);
    };

    const handleConfirm = (rowId, columnName) => {
        if (tempValue !== originalValue) {
            SetdataToPush([...dataToPush, { rowId, columnName, newValue: tempValue }]);
            SetisChanged(true);
            setTableData({
                ...tableData,
                [rowId]: {
                    ...tableData[rowId],
                    [columnName]: tempValue
                }
            });
        }
        setEditingCell(null);
    };

    const handleCancel = () => {
        setTempValue(originalValue);
        setEditingCell(null);
    };

    const renderCell = (row, columnKey) => {
        const isEditing = editingCell?.rowId === row && editingCell?.columnName === columnKey;
        const currentValue = tableData[row]?.[columnKey] || "Dane";

        if (isEditing) {
            return (
                <>
                    <input 
                        type="text" 
                        value={tempValue} 
                        onChange={(e) => setTempValue(e.target.value)}
                        className="w-full bg-white border border-blue-500 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        autoFocus
                    />
                    <button 
                        onClick={() => handleConfirm(row, columnKey)}
                        className="w-full bg-blue-500 text-white rounded-xl mt-2 text-xs py-1 hover:bg-blue-600"
                    >
                        Zatwierdź
                    </button>
                    <button 
                        onClick={handleCancel}
                        className="w-full bg-red-500 text-white rounded-xl mt-1 text-xs py-1 hover:bg-red-600"
                    >
                        Anuluj
                    </button>
                </>
            );
        }

        return (
            <span onClick={() => handleCellClick(row, columnKey, currentValue)}>
                {currentValue}
            </span>
        );
    };

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
                                <div className="w-full flex gap-3">
                                    <button className="w-1/2 py-4 rounded-xl bg-green-600 hover:bg-green-700 hover:shadow-lg hover:scale-105 text-white text-sm shadow-md">Zapisz do Master-Repozytorium</button>
                                    <button className="w-1/2 py-4 rounded-xl bg-red-600 hover:bg-red-700 hover:shadow-lg hover:scale-105 text-white text-sm shadow-md" onClick={() => {SetisChanged(false);SetdataToPush([])}}>Anuluj zmiany</button>
                                </div>
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
                        <div className="flex flex-col gap-1 text-s pr-5 border-l border-gray-300 pl-4">
                            Wyświetlono {filterLen} z {dataLen} 
                            <h1 className="text-xs text-gray-500">Kliknij komórkę aby edytować</h1>
                        </div>
                        <span className="bg-green-100 text-green-400 py-1 px-2 rounded-lg text-xs">Prawidłowe</span>
                        <span className="bg-red-100 text-red-400 py-1 px-2 rounded-lg text-xs">Błąd klasyfikacji</span>
                        <span className="bg-yellow-100 text-yellow-400 py-1 px-2 rounded-lg text-xs">Ostrzezenie</span>
                    </div>
                    <div className="bg-gray-50 rounded-xl overflow-auto border border-gray-100 p-5 max-h-[400px] w-full">
                        <div className="inline-block min-w-full">
                            <div className="grid gap-0 sticky top-0 z-10" style={{gridTemplateColumns: 'repeat(25, minmax(120px, 1fr))'}}>
                                <div className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">Id</div>
                                {columns.map((col) => (
                                    <div key={col.key} className="bg-gray-100 p-3 border border-gray-200 text-xs font-semibold text-gray-700">
                                        {col.label}
                                    </div>
                                ))}
                            </div>
                            
                            {[1, 2, 3, 4].map((row) => (
                                <div key={row} className="grid gap-0 group" style={{gridTemplateColumns: 'repeat(25, minmax(120px, 1fr))'}}>
                                    <div className="bg-white p-3 border border-gray-200 text-xs text-gray-700 hover:bg-gray-100">{row}</div>
                                    {columns.map((col) => (
                                        <div key={col.key} className="bg-white p-3 border border-gray-200 text-xs text-gray-700 hover:bg-blue-50 flex flex-col cursor-pointer">
                                            {renderCell(row, col.key)}
                                        </div>
                                    ))}
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