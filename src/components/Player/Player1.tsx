import { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import audioButtom from '/src/assets/audios/Carinito.mp3';

const Player1 = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [showButton, setShowButton] = useState(true); // Muestra el botón de inicio
    const audioRef = useRef<HTMLAudioElement>(null);

    const startAudio = () => {
        if (audioRef.current) {
            audioRef.current.play().then(() => {
                setIsPlaying(true);
                setShowButton(false); // Oculta el botón una vez iniciado el audio
            }).catch(error => console.log("Error al reproducir:", error));
        }
    };

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            {/* Botón de inicio */}
            {showButton && (
                <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
                    <button
                        onClick={startAudio}
                        className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-bold shadow-lg">
                        Iniciar Música 🎵
                    </button>
                </div>
            )}

            {/* Botón de Play/Pause */}
            <div className="audio-button fixed bottom-5 right-5 bg-blue-500 text-white p-3 rounded-full shadow-lg" onClick={togglePlay}>
                {isPlaying ? <FaPause size={24} /> : <FaPlay size={24} />}
            </div>

            <audio ref={audioRef} src={audioButtom} />
        </div>
    );
};

export default Player1;
