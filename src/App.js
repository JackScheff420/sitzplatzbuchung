import logo from './Maxcode_Logo.png';
import profilbild from './testhuman.jpg';

function App() {
  return (
    <div className="App">
      <section id="basis" className="flex flex-col items-center justify-center text-xl text-secondarytheme bg-primarytheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2 sm:py-3 h-screen">

        <section id="header" className="w-full max-w-screen-xl h-auto border-accenttheme border-2 flex justify-between mb-auto">
          <div className="h-10 w-3/4 text-left p-2">
            SITZPLATZBUCHUNG MAXCODE
          </div>
          <div className="h-10 w-1/4 border-accenttheme border-l-2 text-right p-2">
            PLATZAUSWAHL
          </div>
        </section>

        <section id="main" className="w-full max-w-screen-xl mb-auto h-auto">
          <div class="grid grid-cols-3 grid-rows-2 gap-4">

            <div class="col-span-1 border-accenttheme border-2">
              <div class="grid-cols-2 grid-rows-1 gap-2 m-2 font-extrabold flex items-center justify-center">
                <div className="bg-purple-300 w-60 h-72 flex items-center justify-center text-4xl">
                  Sitzplatz: 1
                </div>
                <div className="bg-purple-300 w-60 h-72 flex flex-col items-center justify-center">
                  <img src={profilbild} alt="Profilbild" className="w-3/4 h-auto rounded-full mb-2 grayscale border-accenttheme border-4" />
                  Nutzer: Testmann
                </div>
              </div>
            </div>

            <div class="col-span-2 row-span-2 border-accenttheme border-2 h-auto flex items-center justify-center">
              <div className="grid grid-cols-12 grid-rows-6 gap-2 w-96">
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 1
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 2
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 3
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 4
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 5
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 6
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 7
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 8
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 9
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 10
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 11
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 12
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 13
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 14
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 15
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 16
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 17
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 18
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 19
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 20
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 21
                  </div>
                </button>
                <button id='buchen' className='border-accenttheme hover:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 22
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 23
                  </div>
                </button>
                <button id='buchen' className='border-primarytheme col-span-4 border-2 shadow-lg  bg-secondarytheme text-buttontheme cursor-not-allowed'>
                  <div className='border-inherit border-2 m-1'>
                    Sitzplatz 24
                  </div>
                </button>
              </div>
            </div>

            <div class="col-span-1 border-accenttheme border-2 font-extrabold flex items-center justify-center">
              Platzinfos:
            </div>

          </div>

        </section>



        <section id="Buttons" className="w-full max-w-screen-xl mb-auto h-auto">
          <div className="grid grid-cols-2 gap-4">
            <button id='buchen' className='border-accenttheme hover:border-primarytheme border-2 shadow-lg shadow-accenttheme bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
              <div className='border-inherit border-2 m-1'>
                Sitzplatz buchen
              </div>
            </button>
            <button id='stornieren' className='border-accenttheme hover:border-primarytheme border-2 shadow-lg shadow-accenttheme bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'>
              <div className='border-inherit border-2 m-1'>
                Sitzplatz stornieren
              </div>
            </button>
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
