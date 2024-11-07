import Hero from "@/sections/Hero";
import Cards from "@/sections/Cards";
import Posts from "@/sections/Posts";
import Skills from "@/sections/Skills";

export default function Home() {
  return (
    <main id="main">
      <Hero />
      <Skills />
      <Cards />
      <Posts />
    </main>
  );
}
