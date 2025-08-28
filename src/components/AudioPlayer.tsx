"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Volume2,
  VolumeX,
} from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface Track {
  title: string;
  src: string;
}

interface AudioPlayerProps {
  tracks: Track[];
  className?: string;
}

export default function AudioPlayer({ tracks, className }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [current, setCurrent] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const handlePrev = useCallback(() => {
    setCurrent((c) => (c - 1 + tracks.length) % tracks.length);
  }, [tracks.length]);

  const handleNext = useCallback(() => {
    setCurrent((c) => (c + 1) % tracks.length);
  }, [tracks.length]);

  // Update progress bar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const onTime = () => {
      setProgress(audio.currentTime / audio.duration || 0);
    };

    audio.addEventListener("timeupdate", onTime);
    audio.addEventListener("ended", handleNext);
    return () => {
      audio.removeEventListener("timeupdate", onTime);
      audio.removeEventListener("ended", handleNext);
    };
  }, [current, handleNext]);

  // Load new track when index changes
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = 0;
    setProgress(0);
  }, [current]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      void audio.play();
    } else {
      audio.pause();
    }
  }, [playing, current]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (playing) {
      audio.pause();
    } else {
      void audio.play();
    }
    setPlaying(!playing);
  };

  const onProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.currentTime = value * audio.duration;
    setProgress(value);
  };

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;
    const value = Number(e.target.value);
    audio.volume = value;
    setVolume(value);
  };

  return (
    <div
      className={cn(
        "w-full max-w-md p-4 rounded-xl shadow-md bg-background",
        className,
      )}
    >
      <audio ref={audioRef} src={tracks[current].src} />
      <motion.h3
        key={current}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="text-center font-medium mb-4"
      >
        {tracks[current].title}
      </motion.h3>

      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          onClick={handlePrev}
          aria-label="Предыдущий"
          className="p-2 rounded-full hover:bg-muted"
        >
          <SkipBack className="h-5 w-5" />
        </button>
        <button
          onClick={togglePlay}
          aria-label={playing ? "Пауза" : "Воспроизвести"}
          className="p-4 bg-primary text-primary-foreground rounded-full hover:bg-primary/80 transition-colors"
        >
          {playing ? (
            <Pause className="h-6 w-6" />
          ) : (
            <Play className="h-6 w-6" />
          )}
        </button>
        <button
          onClick={handleNext}
          aria-label="Следующий"
          className="p-2 rounded-full hover:bg-muted"
        >
          <SkipForward className="h-5 w-5" />
        </button>
      </div>

      <div className="mb-4">
        <motion.div className="h-2 bg-muted rounded">
          <motion.div
            className="h-full bg-primary rounded"
            style={{ width: `${progress * 100}%` }}
          />
        </motion.div>
        <input
          type="range"
          min="0"
          max="1"
          step="0.001"
          value={progress}
          onChange={onProgressChange}
          className="w-full mt-2"
        />
      </div>

      <div className="flex items-center space-x-2">
        <button
          onClick={() => {
            const audio = audioRef.current;
            if (!audio) return;
            if (audio.volume === 0) {
              audio.volume = 1;
              setVolume(1);
            } else {
              audio.volume = 0;
              setVolume(0);
            }
          }}
          aria-label="Звук"
          className="p-2"
        >
          {volume === 0 ? (
            <VolumeX className="h-4 w-4" />
          ) : (
            <Volume2 className="h-4 w-4" />
          )}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={onVolumeChange}
          className="w-full"
        />
      </div>

      <ul className="mt-4 space-y-1 max-h-40 overflow-y-auto">
        {tracks.map((track, idx) => (
          <li key={track.src}>
            <button
              className={cn(
                "w-full text-left p-2 rounded hover:bg-muted transition-colors",
                idx === current && "bg-muted",
              )}
              onClick={() => {
                setCurrent(idx);
                setPlaying(true);
              }}
            >
              {track.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
