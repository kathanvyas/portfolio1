import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import SkillsEducation from "@/components/SkillsEducation";

export default function Home() {
  return (
    <main className="bg-[#121212] min-h-screen">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Experience />
      <Projects />
      <SkillsEducation />
    </main>
  );
}
