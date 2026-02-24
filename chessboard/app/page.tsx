import AEye from "@/components/aEye";
import Board from "@/components/board";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 w-full h-full">
      <div className="min-h-screen  text-slate-100 font-sans">
        <AEye />
        <div className="flex-1 flex flex-col items-center justify-start py-8 px-4 w-full relative">
          <Board />
        </div>
      </div>
    </main>
  );
}
