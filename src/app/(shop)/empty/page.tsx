import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function Empty () {
  return (
    <div className="flex items-center justify-center h-[800px]">

      <IoCartOutline size={80} className="mx-5" />

      <div>
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío
        </h1>

        <Link
          href='/'
          className="text-blue-500 mt-2 text-4xl"
        >
          Regresar
        </Link>

      </div>

    </div>
  );
}