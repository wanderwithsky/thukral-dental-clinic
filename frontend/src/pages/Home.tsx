import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import AboutSection from '../components/AboutSection';
import DoctorSection from '../components/DoctorSection';
import TreatmentsSection from '../components/TreatmentsSection';
import FeaturedSmileSection from '../components/FeaturedSmileSection';
import ReviewsSection from '../components/ReviewsSection';
import WhyThukral from '../components/WhyThukral';
import PatientJourney from '../components/PatientJourney';
import Gallery from '../components/Gallery';
import AppointmentForm from '../components/AppointmentForm';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      <Hero />
      <TrustBar />
      <AboutSection />
      <DoctorSection />
      <TreatmentsSection />
      <FeaturedSmileSection />
      <ReviewsSection />
      <WhyThukral />
      <PatientJourney />
      <Gallery />
      <AppointmentForm />
    </div>
  );
};

export default Home;
