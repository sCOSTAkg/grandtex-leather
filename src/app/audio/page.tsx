import AudioPlayer from "@/components/AudioPlayer";

const demoTracks = [
  { title: "Пример трек 1", src: "https://www.w3schools.com/html/horse.mp3" },
  {
    title: "Пример трек 2",
    src: "https://www2.cs.uic.edu/~i101/SoundFiles/PinkPanther30.wav",
  },
];

export default function AudioPage() {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <AudioPlayer tracks={demoTracks} />
    </div>
  );
}
