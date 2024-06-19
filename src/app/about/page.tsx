import { Preview } from "@/components/common/Preview/Preview";
import { Players } from "@/components/index/Players/Players";
import { Footer } from "@/components/common/Footer/Footer";
import { About } from "@/components/index/About/About";

export default function AboutPage() {
  return (
    <>
      <main>
        <Preview heading={"About"} />

        <About />
      </main>

      <Footer displayText={false} displayImage={false} />
    </>
  );
}
