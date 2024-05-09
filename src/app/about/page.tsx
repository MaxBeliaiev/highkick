import { Header } from "@/components/common/Header/Header";
import { Preview } from "@/components/common/Preview/Preview";
import { Players } from "@/components/index/Players/Players";
import { Footer } from "@/components/common/Footer/Footer";
import { About } from "@/components/index/About/About";

export default function AboutPage() {
  return (
    <body>
      <Header />

      <main>
        <Preview heading={"About"} />

        <About />
      </main>

      <Footer displayText={false} displayImage={false} />
    </body>
  );
}
