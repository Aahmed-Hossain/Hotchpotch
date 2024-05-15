import Banner from '@/components/Banner';
import CreateContent from '@/components/CreateContent';
import TrustedClients from '@/components/TrustedClients';
import WriteContent from '@/components/WriteContent';
import WritingTools from '@/components/WritingTools';

export default function Home() {
  return (
    <div>
      <Banner/>
      <TrustedClients/>
      <CreateContent/>
      <WriteContent/>
      <WritingTools/>
    </div>
  );
}
