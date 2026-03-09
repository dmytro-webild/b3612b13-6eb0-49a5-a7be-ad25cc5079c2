"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import TextAbout from '@/components/sections/about/TextAbout';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterLogoReveal from '@/components/sections/footer/FooterLogoReveal';
import { Award, CheckCircle, Clock, Shield, Star, Truck } from 'lucide-react';

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="expand-hover"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
      contentWidth="smallMedium"
      sizing="mediumSizeLargeTitles"
      background="none"
      cardStyle="subtle-shadow"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="radial-glow"
      headingFontWeight="light"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          brandName="Florida Elite Moving"
          navItems={[
            { name: "Services", id: "services" },
            { name: "About", id: "about" },
            { name: "Why Us", id: "why-us" },
            { name: "Contact", id: "contact" },
            { name: "Call Now", id: "tel:+1-941-586-9329" },
          ]}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroSplit
          title="Stress-Free Moving Made Simple"
          description="Professional movers you can trust. Local, long-distance, and specialty moving services in Sarasota and beyond. Over 10 years of expert experience handling your precious belongings with care."
          tag="24/7 Available"
          tagIcon={Clock}
          tagAnimation="slide-up"
          background={{ variant: "plain" }}
          buttons={[
            { text: "Get Free Quote", href: "contact" },
            { text: "Call: 941-586-9329", href: "tel:+1-941-586-9329" },
          ]}
          buttonAnimation="slide-up"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AgLW7cKSaonxNLEy7olEWCSWyH/uploaded-1773058855444-ql4xc3ar.png"
          imageAlt="Professional moving truck"
        />
      </div>

      <div id="about" data-section="about">
        <TestimonialAboutCard
          tag="About Us"
          tagIcon={Shield}
          tagAnimation="slide-up"
          title="Meet Clay Owens: Your Moving Expert"
          description="Clay Owens"
          subdescription="Founder & Owner - 10+ Years of Moving Excellence"
          icon={Award}
          imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3AgLW7cKSaonxNLEy7olEWCSWyH/uploaded-1773058899655-vwsml17o.jpg"
          imageAlt="Clay Owens, Founder of Florida Elite Moving"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <TextAbout
          tag="Complete Solutions"
          tagIcon={Truck}
          tagAnimation="slide-up"
          title="Our Moving Services: From local moves to long-distance relocations, we handle every type of moving job with professionalism and care. Your belongings are in expert hands."
          useInvertedBackground={true}
          buttons={[
            { text: "Get Free Quote", href: "contact" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <TextAbout
          tag="Our Advantages"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
          title="Why Choose Florida Elite Moving? We understand that moving can be both exciting and stressful. That's why we're committed to making every move smooth, efficient, and hassle-free."
          useInvertedBackground={false}
          buttons={[
            { text: "Learn More", href: "contact" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TextAbout
          tag="Social Proof"
          tagIcon={Star}
          tagAnimation="slide-up"
          title="Real Reviews from Our Customers: Hundreds of satisfied customers trust Florida Elite Moving with their precious belongings. Don't just take our word for it—see what our clients have to say about their moving experience."
          useInvertedBackground={true}
          buttons={[
            { text: "Get Free Quote", href: "contact" },
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Request Your Free Moving Quote Today"
          description="Get in touch with our team to schedule your move, ask questions, or request a free no-obligation estimate. We're available 24/7 to help you plan your perfect move."
          inputs={[
            { name: "name", type: "text", placeholder: "Your Full Name", required: true },
            { name: "email", type: "email", placeholder: "Your Email Address", required: true },
            { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
            { name: "moveDate", type: "date", placeholder: "Preferred Moving Date", required: true },
          ]}
          textarea={{
            name: "message",            placeholder: "Tell us about your move (size, distance, special requirements, etc.)",            rows: 5,
            required: true,
          }}
          useInvertedBackground={false}
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Get Your Free Quote - No Obligation"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoReveal
          logoText="Florida Elite Moving"
          leftLink={{ text: "Privacy Policy", href: "#" }}
          rightLink={{ text: "Call: 941-586-9329", href: "tel:+1-941-586-9329" }}
        />
      </div>
    </ThemeProvider>
  );
}
