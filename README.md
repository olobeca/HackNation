# HackNation

# System Koordynacji Planowania Budżetu

## Instalacja

### Wymagania
- Node.js (v14+)
- npm lub yarn

### Kroki instalacji

1. **Klonuj repozytorium**
```bash
git clone <URL_REPOZYTORIUM>
cd hackathonNowy/frontend
```

2. **Zainstaluj zależności**
```bash
npm install
```

3. **Uruchom aplikację**
```bash
npm start
```

Aplikacja otworzy się na `http://localhost:3000`

### Konfiguracja backendu

Upewnij się, że backend działa na:
- `http://localhost:8080` - API autentykacji
- `http://localhost:5000` - API pobierania dokumentów

### Dostępne skrypty

```bash
npm start      # Uruchamia aplikację w trybie development
npm test       # Uruchamia testy
npm build      # Buduje aplikację do produkcji
```

### Struktura projektu

```
src/
├── components/      # Komponenty React (Header, Footer)
├── context/        # Kontekst aplikacji (UserContext)
├── pages/          # Strony aplikacji
├── assets/         # Grafiki i ikony
└── App.jsx         # Główny komponent
```

### Funkcjonalności

- 🔐 Logowanie użytkowników
- 📊 Zarządzanie budżetem z edycją komórek
- 🔍 Filtrowanie danych
- 📥 Pobieranie dokumentów
- 💾 Zapisywanie zmian

### Technologie

- React
- React Router
- Tailwind CSS
- Context API

### Kontakt

W przypadku problemów skontaktuj się z zespołem.
