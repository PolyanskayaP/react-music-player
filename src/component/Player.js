import { useEffect, useState } from "react"; 
import useSound from "use-sound"; //для работы со звуком
import qala from "../assets/qala.mp3"; // импорт музыки
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai"; // иконки для воспроизведения и паузы
import { BiSkipNext, BiSkipPrevious } from "react-icons/bi"; // иконки для следующего и предыдущего трека
import { IconContext } from "react-icons"; // для кастомизации иконок

const [isPlaying, setIsPlaying] = useState(false);
const [play, { pause, duration, sound }] = useSound(qala);

const playingButton = () => {
    if (isPlaying) {
      pause(); // приостанавливаем воспроизведение звука
      setIsPlaying(false);
    } else {
      play(); // воспроизводим аудиозапись
      setIsPlaying(true);
    }
  };
