import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100">
      <div className="relative text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-green-100 via-blue-100 to-purple-100 rounded-lg opacity-50 blur-lg"></div>
        <div className="relative text-gray-800 p-10">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to AI Financial Portfolio
          </h1>
          <p className="text-2xl">
            Your smart investment companion
          </p>
        </div>
      </div>
    </div>
  );
}
