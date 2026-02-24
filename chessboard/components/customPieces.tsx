import { PieceRenderObject, defaultPieces } from "react-chessboard";

import whitePawnImg from "@/app/assets/wP.png";
import whiteKnightImg from "@/app/assets/wN.png";
import whiteRookImg from "@/app/assets/wR.png";
import whiteBishopImg from "@/app/assets/wB.png";
import whiteQueenImg from "@/app/assets/wQ.png";
import whiteKingImg from "@/app/assets/wK.png";

import blackPawnImg from "@/app/assets/bP.png";
import blackKnightImg from "@/app/assets/bN.png";
import blackRookImg from "@/app/assets/bR.png";
import blackBishopImg from "@/app/assets/bB.png";
import blackQueenImg from "@/app/assets/bQ.png";
import blackKingImg from "@/app/assets/bK.png";

export const customPieces: PieceRenderObject = {
  ...defaultPieces,
  wP: () => <img src={whitePawnImg.src} alt="White Pawn" />,
  wN: () => <img src={whiteKnightImg.src} alt="White Knight" />,
  wR: () => <img src={whiteRookImg.src} alt="White Rook" />,
  wB: () => <img src={whiteBishopImg.src} alt="White Bishop" />,
  wQ: () => <img src={whiteQueenImg.src} alt="White Queen" />,
  wK: () => <img src={whiteKingImg.src} alt="White King" />,
  bP: () => <img src={blackPawnImg.src} alt="Black Pawn" />,
  bN: () => <img src={blackKnightImg.src} alt="Black Knight" />,
  bR: () => <img src={blackRookImg.src} alt="Black Rook" />,
  bB: () => <img src={blackBishopImg.src} alt="Black Bishop" />,
  bQ: () => <img src={blackQueenImg.src} alt="Black Queen" />,
  bK: () => <img src={blackKingImg.src} alt="Black King" />,
};
