import { useState } from 'react';
import logo from './Maxcode_Logo.png';
import profilbild from './testhuman.jpg';

function App() {


  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSeat, setSelectedSeat] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [seatColor, setSeatColor] = useState('bg-purple-300')

  const handleBuchenClick = () => {
    setIsModalOpen(true);
  };

  const getRandomColor = () => {
    const colors = [
      'red', 'lime', 'yellow', 'orange',
      'green', 'blue','purple'
    ];

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    return `bg-${randomColor.toLowerCase()}-300`;
  };

  const handleAuswahlClick = (seatNumber, userInfo) => {
    setSelectedSeat(seatNumber);
    setUserInfo(userInfo);

    const seatColorClass = getRandomColor();
    setSeatColor(seatColorClass);
  };

  const handleButtonBlur = (event) => {
    const relatedTarget = event.relatedTarget;

    if (!relatedTarget || (relatedTarget.tagName && relatedTarget.tagName !== 'BUTTON')) {
      handleAuswahlClick(null, null);
    }
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedSeat(null);
  };

  const generateSeats = () => {
    const seatButtons = [];

    for (let seatNumber = 1; seatNumber <= 24; seatNumber++) {
      const buttonClassName = `border-accenttheme hover:border-primarytheme focus:border-primarytheme col-span-4 border-2 shadow-lg bg-buttontheme hover:bg-secondarytheme focus:bg-secondarytheme hover:text-buttontheme focus:text-buttontheme`;
      const buttonText = `Sitzplatz ${seatNumber}`;
      const userInfo = `Testnutzer ${seatNumber}`;

      seatButtons.push(
        <button
          key={`platz-${seatNumber}`}
          className={buttonClassName}
          onClick={() => handleAuswahlClick(seatNumber, userInfo)}
          onBlur={handleButtonBlur}>
          <div className='border-inherit border-2 m-1'>
            {buttonText}
          </div>
        </button>
      );
    }

    return seatButtons;
  };

  const renderSeatInfo = () => {
    if (selectedSeat !== null) {
      return (
        <div className="font-extrabold flex flex-col items-center justify-center">
          <div>
            Platzinfos für Sitzplatz {selectedSeat}:
          </div>
          <div>
            Verfügbarkeit: ganzer Tag
          </div>
        </div>
      );
    } else {
      return (
        <div className="font-extrabold flex items-center justify-center">
          Wählen Sie einen Platz aus, um Infos zu sehen.
        </div>
      );
    }
  };


  return (
    <div className="App">
      <section id="basis" className="flex flex-col items-center justify-center text-xl text-secondarytheme bg-primarytheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2 sm:py-3">

        <header className="border-accenttheme border-2 top-0 w-full flex justify-between mb-4">
          <div className="h-10 w-auto text-left p-2">
            SITZPLATZBUCHUNG MAXCODE
          </div>
          <div className="h-10 w-auto border-accenttheme border-l-2 text-right p-2">
            Angemeldet als Maximilian Scheffler
          </div>
        </header>

        <section id="main" className="w-full max-w-screen-xl mb-4 h-auto">

          <div className="grid grid-cols-2 grid-rows-2 gap-4">
            <div className='border-accenttheme border-2'>
              <div className="flex grid-cols-2 grid-rows-1 gap-4 m-2 font-extrabold items-center justify-center">
                <div className={`col-start-1 row-start-1 ${seatColor} w-72 h-72 flex items-center justify-center text-4xl`}>
                  Sitzplatz: {selectedSeat}
                </div>
                <div className={`col-start-2 row-start-1 ${seatColor} w-72 h-72 flex flex-col items-center justify-center`}>
                  <img src={profilbild} alt="Profilbild" className="w-3/4 h-auto rounded-full mb-2 grayscale border-accenttheme border-4" />
                  Nutzer: {userInfo}
                </div>
              </div>
            </div>
            <div className="row-span-2 border-accenttheme border-2 flex items-center justify-center">
              <div className="grid grid-cols-12 grid-rows-6 m-2 gap-2 w-96">
                {generateSeats()}
              </div>
            </div>
            <div className="row-start-2 border-accenttheme border-2 font-extrabold flex items-center justify-center">
              {renderSeatInfo()}
            </div>
          </div>

        </section>



        <section id="Buttons" className="w-full max-w-screen-xl mb-auto h-auto">
          <div className="grid grid-cols-2 gap-4">
            <button
              id='buchen'
              className={`border-accenttheme hover:border-primarytheme border-2 shadow-lg shadow-accenttheme bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme ${selectedSeat === null ? 'disabled:opacity-50 cursor-not-allowed' : ''
                }`}
              onClick={handleBuchenClick}
              disabled={selectedSeat === null}
            >
              <div className='border-inherit border-2 m-1'>
                Sitzplatz buchen
              </div>
            </button>
            <button
              id='stornieren'
              className={`border-accenttheme hover:border-primarytheme border-2 shadow-lg shadow-accenttheme bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme ${selectedSeat === null ? 'disabled:opacity-50 cursor-not-allowed' : ''
                }`}
              disabled={selectedSeat === null}
            >
              <div className='border-inherit border-2 m-1'>
                Sitzplatz stornieren
              </div>
            </button>
          </div>
        </section>

        {isModalOpen && (
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
              <div className="fixed inset-0 transition-opacity">
                <div className="absolute inset-0 bg-primarytheme opacity-75"></div>
              </div>

              <div className="inline-block align-bottom bg-white border-accenttheme border-2 rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
                <div className="bg-primarytheme px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <h3 className="text-lg leading-6 font-medium text-gray-900">Der Sitzplatz wurde erfolgreich gebucht</h3>
                  </div>
                </div>
                <div className="bg-primarytheme px-4 py-3 sm:px-6 sm:flex items-center justify-center">
                  <button
                    id='schließen'
                    className='border-accenttheme hover:border-primarytheme border-2 w-36 shadow-lg shadow-accenttheme bg-buttontheme hover:bg-secondarytheme hover:text-buttontheme'
                    onClick={handleCloseModal}
                  >
                    <div className='border-inherit border-2 m-1'>
                      Schließen
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        <footer id="footer" className="w-full h-auto flex justify-between items-center text-xl text-secondarytheme bg-primarytheme border-2 border-primarytheme shadow-lg shadow-primarytheme px-4 sm:px-8 py-2">
          <div className="text-sm">
            <p>Firmenadresse: Musterstraße 123, 12345 Musterstadt</p>
            <p>Email: info@example.com</p>
            <p>Telefon: +49 123 456 789</p>
            <p>&copy; 2023-2023 Maxcode - Alle Rechte vorbehalten.</p>
          </div>
          <div className="text-2xl font-extrabold">
            <img src={logo} alt="Logo" className='w-52 sm:w-36' />
          </div>
        </footer>

      </section>
    </div>
  );
}

export default App;
