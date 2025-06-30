import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import Layout from "@/components/layouts/Layout";
import CommonButton from "@/components/commons/Button";
import LayoutButton from "@/components/layouts/Button";
import Loading from "@/components/commons/Loading";
import MovieCard from "@/components/commons/MovieCard";

const HomePage = () => {
  const movies = [1, 2, 3]; // Replace with actual movie data when available

  return (
    <Layout>
      <div className="text-center space-y-6">
        <h2 className="text-2xl font-bold">Welcome to the ALX Movie App</h2>

        <div className="flex justify-center gap-4">
          <CommonButton />
          <LayoutButton />
        </div>

        <Loading />

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {movies.map((_, index) => (
            <MovieCard key={index} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HomePage;
