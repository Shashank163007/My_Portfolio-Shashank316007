import {
  Navbar,
  Hero,
  Skills,
  Projects,
  Experience,
  Contact,
  Footer,
} from "@/components";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
