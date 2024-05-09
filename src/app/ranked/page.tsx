import { Header } from "@/components/common/Header/Header";
import { Preview } from "@/components/common/Preview/Preview";
import { Players } from "@/components/index/Players/Players";
import { Footer } from "@/components/common/Footer/Footer";
import { Ranked } from "@/components/index/Ranked/Ranked";
import { Ranked_Dummy_Data } from "@/components/index/Ranked/ranked-data";

export default function RankedPage() {
  return (
    <body>
      <Header />

      <main>
        <Preview heading={"Ranked"} />
        <Ranked data={Ranked_Dummy_Data} />
      </main>

      <Footer displayText={false} displayImage={true} />
    </body>
  );
}
