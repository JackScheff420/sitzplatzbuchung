import logo from './Maxcode_Logo.png';

function App() {
  return (
    <div className="App">
      <section id="basis" className="flex flex-col items-center justify-center text-xl text-secondarytheme bg-primarytheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2 sm:py-3 h-screen">

        <section id="header" className="w-full max-w-screen-xl h-auto border-accenttheme border-2 flex justify-between mb-4">
          <div className="h-10 w-3/4 text-left p-2">
            SITZPLATZBUCHUNG
          </div>
          <div className="h-10 w-1/4 border-accenttheme border-l-2 text-right p-2">
            PLATZAUSWAHL
          </div>
        </section>

        <section id="main" className="w-full max-w-screen-xl mb-auto h-10 bg-green-600">

          <div className="text-primarytheme bg-accenttheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2 sm:py-3">
            Hello world!
          </div>
          <div className="text-primarytheme bg-secondarytheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2 sm:py-3">
            Hello world!
          </div>

        </section>

        <footer id="footer" className="w-full h-auto flex justify-between items-center text-xl text-secondarytheme bg-primarytheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2 sm:py-3">
          <div className="text-sm">
            <p>Firmenadresse: Musterstraße 123, 12345 Musterstadt</p>
            <p>Email: info@example.com</p>
            <p>Telefon: +49 123 456 789</p>
            <p>&copy; 2023-2023 Maxcode - Alle Rechte vorbehalten.</p>
          </div>
          <div className="text-2xl font-extrabold">
            <img src={logo} alt="Logo" className='w-52' />
          </div>
        </footer>

      </section>
    </div>
  );
}

export default App;
