import Banner from '@/components/Banner';
import BusinessPlan from '@/components/BusinessPlan';
import CreateContent from '@/components/CreateContent';
import CustomersReview from '@/components/CustomersReview';
import Footer from '@/components/Footer';
import MixlandHelps from '@/components/MixlandHelps';
import Subscription from '@/components/Subscription';
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
      <MixlandHelps/>
      <CustomersReview/>
      <BusinessPlan/>
      <Subscription/>
      <Footer/>
    </div>
  );
}
