"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import TestimonialAboutCard from '@/components/sections/about/TestimonialAboutCard';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
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
          imageSrc="/api/placeholder/600/400"
          imageAlt="Professional Florida Elite Moving truck"
          mediaAnimation="slide-up"
          imagePosition="right"
          fixedMediaHeight={true}
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
          imageSrc="/api/placeholder/400/400"
          imageAlt="Clay Owens leading his professional moving team"
          mediaAnimation="slide-up"
          useInvertedBackground={false}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyThree
          features={[
            {
              id: "local-moving",              title: "Local Moving",              tags: ["Sarasota County", "Same-Day Available"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Professional local moving service"
            },
            {
              id: "long-distance",              title: "Long-Distance Moving",              tags: ["State-to-State", "Full Coverage"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Long distance moving services"
            },
            {
              id: "furniture-moving",              title: "Furniture Moving & Packing",              tags: ["Careful Handling", "Protected Transit"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Professional furniture moving and protection"
            },
            {
              id: "office-relocation",              title: "Office Relocation",              tags: ["Minimal Downtime", "Coordinated Setup"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Professional office moving service"
            },
            {
              id: "junk-removal",              title: "Junk & Clutter Removal",              tags: ["Garage Cleanouts", "Yard Waste Disposal"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Professional junk removal and cleanup"
            },
            {
              id: "construction-cleanup",              title: "Construction Cleanup",              tags: ["Site Cleanup", "Debris Removal"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Professional construction site cleanup"
            },
          ]}
          animationType="slide-up"
          title="Our Moving Services"
          description="From local moves to long-distance relocations, we handle every type of moving job with professionalism and care. Your belongings are in expert hands."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Complete Solutions"
          tagIcon={Truck}
          tagAnimation="slide-up"
        />
      </div>

      <div id="why-us" data-section="why-us">
        <FeatureCardTwentyThree
          features={[
            {
              id: "professional-team",              title: "Professional & Friendly Team",              tags: ["Trained Movers", "Courteous Service"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Professional and friendly moving team"
            },
            {
              id: "careful-handling",              title: "Careful Furniture Handling",              tags: ["Fragile Items Protected", "Zero Damage Guarantee"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Careful handling of furniture and valuables"
            },
            {
              id: "punctual-efficient",              title: "Punctual & Efficient",              tags: ["On-Time Service", "Quick Turnaround"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Fast and efficient moving service"
            },
            {
              id: "transparent-pricing",              title: "Transparent & Affordable",              tags: ["No Hidden Fees", "Fair Pricing"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Satisfied customer with affordable pricing"
            },
            {
              id: "5-star-rated",              title: "5-Star Customer Ratings",              tags: ["10+ Years Experience", "Hundreds of Happy Moves"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "Customer satisfaction and testimonials"
            },
            {
              id: "24-7-available",              title: "Available 24/7",              tags: ["Emergency Moves", "Flexible Scheduling"],
              imageSrc: "/api/placeholder/500/400",              imageAlt: "24/7 moving service availability"
            },
          ]}
          animationType="slide-up"
          title="Why Choose Florida Elite Moving?"
          description="We understand that moving can be both exciting and stressful. That's why we're committed to making every move smooth, efficient, and hassle-free."
          textboxLayout="default"
          useInvertedBackground={false}
          tag="Our Advantages"
          tagIcon={CheckCircle}
          tagAnimation="slide-up"
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTen
          testimonials={[
            {
              id: "1",              title: "Professional From Start to Finish",              quote: "Florida Elite Moving made our entire move stress-free. The team was punctual, careful with every item, and maintained a friendly attitude throughout. No hidden fees, fair pricing, and exceptional service. Highly recommended!",              name: "Sarah Johnson",              role: "Business Owner",              imageSrc: "/api/placeholder/300/300",              imageAlt: "Sarah Johnson testimonial"
            },
            {
              id: "2",              title: "We Trust Them With Our Most Precious Belongings",              quote: "After 10+ years in the moving business, Clay's team truly understands how to handle valuable furniture and fragile items. They treated our belongings like their own. We've already recommended them to friends!",              name: "Michael Chen",              role: "Homeowner",              imageSrc: "/api/placeholder/300/300",              imageAlt: "Michael Chen testimonial"
            },
            {
              id: "3",              title: "Fast, Reliable, and Transparent Pricing",              quote: "We moved across three states with Florida Elite Moving. Their efficiency was amazing, they kept us updated throughout, and the final bill matched their estimate perfectly. No surprises, just great service!",              name: "Emily & David Rodriguez",              role: "Relocating Family",              imageSrc: "/api/placeholder/300/300",              imageAlt: "Emily and David Rodriguez testimonial"
            },
            {
              id: "4",              title: "The Best Moving Company in Sarasota",              quote: "Five-star service, every single time. The team showed up on time, worked efficiently, and treated our home with respect. Customer satisfaction is clearly their top priority. We couldn't ask for better!",              name: "Jessica Williams",              role: "Corporate Executive",              imageSrc: "/api/placeholder/300/300",              imageAlt: "Jessica Williams testimonial"
            },
          ]}
          title="Real Reviews from Our Customers"
          description="Don't just take our word for it. See what hundreds of satisfied customers have to say about their moving experience with Florida Elite Moving."
          textboxLayout="default"
          useInvertedBackground={true}
          tag="Social Proof"
          tagIcon={Star}
          tagAnimation="slide-up"
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
          imageSrc="/api/placeholder/600/400"
          imageAlt="Florida Elite Moving truck ready for your move"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Get Free Quote"
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
