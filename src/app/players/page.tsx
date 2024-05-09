import { Header } from "@/components/common/Header/Header";
import { Preview } from "@/components/common/Preview/Preview";
import { LiveNow } from "@/components/index/LiveNow/LiveNow";
import { Live_Dummy_Data } from "@/components/index/LiveNow/live-data";
import { Footer } from "@/components/common/Footer/Footer";
import { Players } from "@/components/index/Players/Players";

export default function PlayersPage() {
  return (
    <body>
      <Header />

      <main>
        <Preview heading={"Players"} />
        <Players />
      </main>

      <Footer displayText={false} displayImage={true} />
    </body>
  );
}
