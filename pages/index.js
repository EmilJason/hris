import Image from "next/image";
import { Inter } from "next/font/google";
import Layout from "@/components/Layout";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Layout>
        <div className="flex min-h-screen flex-col justify-between p-24">
          <h1>Hello World</h1>
        </div>
      </Layout>
    </>
  );
}
