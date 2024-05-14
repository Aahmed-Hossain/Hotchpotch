import Banner from '@/components/Banner';
import CreateContent from '@/components/CreateContent';
import TrustedClients from '@/components/TrustedClients';

export default function Home() {
  return (
    <div>
      <Banner/>
      <TrustedClients/>
      <CreateContent/>
    </div>
  );
}
