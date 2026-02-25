import AEye from "@/components/aEye";
import Board from "@/components/board";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <div className="min-h-screen  text-slate-100 font-sans">
        <AEye />
        <Board />
      </div>
    </main>
  );
}
