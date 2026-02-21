import AEye from "@/components/aEye";
import Board from "@/components/board";

export default function Home() {
  return (
    <main className="flex flex-col items-center pax-4">
      <AEye />
      <Board />
    </main>
  );
}
