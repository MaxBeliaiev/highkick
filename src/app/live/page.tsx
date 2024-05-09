import { Header } from "@/components/common/Header/Header";
import { Preview } from "@/components/common/Preview/Preview";
import { Footer } from "@/components/common/Footer/Footer";
import { LiveNow } from "@/components/index/LiveNow/LiveNow";
import { Live_Dummy_Data } from "@/components/index/LiveNow/live-data";

export default function LivePage() {
  return (
    <body>
      <Header />

      <main>
        <Preview heading={"Live Now"} />
        <LiveNow data={Live_Dummy_Data} />
      </main>

      <Footer displayText={false} />
    </body>
  );
}
