import Timer from '@/components/Timer';

export default function Home() {
  return (
    <main className="my-32 flex flex-col items-center justify-center max-w-7xl mx-auto">
      <h1 className="text-3xl ">
        Countdown to end <span className="text-blue-500">military service</span>
      </h1>
      <Timer />
    </main>
  );
}
