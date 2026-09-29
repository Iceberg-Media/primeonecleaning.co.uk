import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomePage from "@/pages/HomePage";
import AboutPage from "@/pages/AboutPage";
import ServicesPage from "@/pages/ServicesPage";
import ResidentialCleaningPage from "@/pages/ResidentialCleaningPage";
import EndOfTenancyCleaningPage from "@/pages/EndOfTenancyCleaningPage";
import AfterBuildersCleaningPage from "@/pages/AfterBuildersCleaningPage";
import CommercialCleaningPage from "@/pages/CommercialCleaningPage";
import CarpetUpholsteryCleaningPage from "@/pages/CarpetUpholsteryCleaningPage";
import AreasPage from "@/pages/AreasPage";
import MiltonKeynesAreaPage from "@/pages/MiltonKeynesAreaPage";
import BedfordAreaPage from "@/pages/BedfordAreaPage";
import LeightonBuzzardAreaPage from "@/pages/LeightonBuzzardAreaPage";
import LutonAreaPage from "@/pages/LutonAreaPage";
import DunstableAreaPage from "@/pages/DunstableAreaPage";
import HitchinAreaPage from "@/pages/HitchinAreaPage";
import StAlbansAreaPage from "@/pages/StAlbansAreaPage";
import HemelHempsteadAreaPage from "@/pages/HemelHempsteadAreaPage";
import WatfordAreaPage from "@/pages/WatfordAreaPage";
import AylesburyAreaPage from "@/pages/AylesburyAreaPage";
import GalleryPage from "@/pages/GalleryPage";
import ReviewsPage from "@/pages/ReviewsPage";
import ContactPage from "@/pages/ContactPage";
import PrivacyPolicyPage from "@/pages/PrivacyPolicyPage";
import TermsConditionsPage from "@/pages/TermsConditionsPage";
import NotFoundPage from "@/pages/NotFoundPage";

const SITE_URL = "https://primeonecleaning.co.uk";
const DEFAULT_OG_IMAGE =
  "https://images.pexels.com/photos/6195949/pexels-photo-6195949.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop";

interface SeoEntry {
  title: string;
  description: string;
  ogImage?: string;
  ogType?: string;
}

const SEO_MAP: Record<string, SeoEntry> = {
  "/": {
    title: "Prime One Cleaning | Professional Cleaning Services in Luton & Bedfordshire",
    description:
      "Professional cleaning services for homes & offices in Luton & Bedfordshire. Fully insured team. Call 07512 345 678 for a free quote today.",
    ogType: "website",
  },
  "/about": {
    title: "About Us | Prime One Cleaning",
    description:
      "Learn about Prime One Cleaning — a fully insured, local cleaning company serving Luton & Bedfordshire with reliable, high-quality results.",
  },
  "/services": {
    title: "Our Cleaning Services | Prime One Cleaning",
    description:
      "Residential, end of tenancy, after builders, commercial & carpet cleaning in Luton & Bedfordshire. Get a free quote from Prime One Cleaning.",
  },
  "/services/residential-cleaning": {
    title: "Residential Cleaning in Luton & Bedfordshire | Prime One Cleaning",
    description:
      "Professional residential cleaning for homes in Luton & Bedfordshire. Regular, deep and one-off cleans by insured staff. Call 07512 345 678.",
    ogImage:
      "https://images.pexels.com/photos/7601135/pexels-photo-7601135.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
  "/services/end-of-tenancy-cleaning": {
    title: "End of Tenancy Cleaning in Luton & Bedfordshire | Prime One Cleaning",
    description:
      "Thorough end of tenancy cleaning in Luton & Bedfordshire. Get your full deposit back. Free quote — call 07512 345 678 today.",
    ogImage:
      "https://images.pexels.com/photos/3983719/pexels-photo-3983719.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
  "/services/after-builders-cleaning": {
    title: "After Builders Cleaning in Luton & Bedfordshire | Prime One Cleaning",
    description:
      "Post-construction and renovation cleaning in Luton & Bedfordshire. Dust & debris removal by insured professionals. Call 07512 345 678.",
    ogImage:
      "https://images.pexels.com/photos/3990359/pexels-photo-3990359.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
  "/services/commercial-cleaning": {
    title: "Commercial Cleaning in Luton & Bedfordshire | Prime One Cleaning",
    description:
      "Office, clinic, retail & gym cleaning in Luton & Bedfordshire. Reliable commercial cleaning contracts. Call 07512 345 678 for a free quote.",
    ogImage:
      "https://images.pexels.com/photos/6794970/pexels-photo-6794970.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
  "/services/carpet-upholstery-cleaning": {
    title: "Carpet & Upholstery Cleaning in Luton & Bedfordshire | Prime One Cleaning",
    description:
      "Carpet, rug & upholstery cleaning in Luton & Bedfordshire. Deep clean by insured professionals. Call 07512 345 678 for a free quote.",
    ogImage:
      "https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&fit=crop",
  },
  "/areas": {
    title: "Areas We Cover | Prime One Cleaning",
    description:
      "Prime One Cleaning serves Luton, Milton Keynes, Bedford, Dunstable, Hitchin, St Albans, Watford, Aylesbury & across Bedfordshire.",
  },
  "/areas/milton-keynes": {
    title: "Cleaning Services in Milton Keynes | Prime One Cleaning",
    description:
      "Professional cleaning services in Milton Keynes. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/bedford": {
    title: "Cleaning Services in Bedford | Prime One Cleaning",
    description:
      "Professional cleaning services in Bedford. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/leighton-buzzard": {
    title: "Cleaning Services in Leighton Buzzard | Prime One Cleaning",
    description:
      "Professional cleaning services in Leighton Buzzard. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/luton": {
    title: "Cleaning Services in Luton | Prime One Cleaning",
    description:
      "Professional cleaning services in Luton. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/dunstable": {
    title: "Cleaning Services in Dunstable | Prime One Cleaning",
    description:
      "Professional cleaning services in Dunstable. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/hitchin": {
    title: "Cleaning Services in Hitchin | Prime One Cleaning",
    description:
      "Professional cleaning services in Hitchin. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/st-albans": {
    title: "Cleaning Services in St Albans | Prime One Cleaning",
    description:
      "Professional cleaning services in St Albans. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/hemel-hempstead": {
    title: "Cleaning Services in Hemel Hempstead | Prime One Cleaning",
    description:
      "Professional cleaning services in Hemel Hempstead. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/watford": {
    title: "Cleaning Services in Watford | Prime One Cleaning",
    description:
      "Professional cleaning services in Watford. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/areas/aylesbury": {
    title: "Cleaning Services in Aylesbury | Prime One Cleaning",
    description:
      "Professional cleaning services in Aylesbury. Residential, commercial & end of tenancy cleaning. Call 07512 345 678 for a free quote.",
  },
  "/gallery": {
    title: "Gallery | Prime One Cleaning",
    description:
      "See our cleaning work in action. Photos of residential, commercial & end of tenancy cleans by Prime One Cleaning in Luton & Bedfordshire.",
  },
  "/reviews": {
    title: "Customer Reviews | Prime One Cleaning",
    description:
      "Read what our clients say about Prime One Cleaning. 5-star reviews from happy customers across Luton & Bedfordshire. Call 07512 345 678.",
  },
  "/contact": {
    title: "Contact Us | Prime One Cleaning",
    description:
      "Contact Prime One Cleaning for a free, no-obligation quote. Call 07512 345 678 or email info@primeonecleaning.co.uk. We reply fast!",
  },
  "/privacy-policy": {
    title: "Privacy Policy | Prime One Cleaning",
    description:
      "Read the Prime One Cleaning privacy policy. We protect your personal data and never share it without your consent.",
  },
  "/terms-conditions": {
    title: "Terms & Conditions | Prime One Cleaning",
    description:
      "Read the terms and conditions for Prime One Cleaning services in Luton & Bedfordshire.",
  },
};

const NOT_FOUND_SEO = {
  title: "Page Not Found | Prime One Cleaning",
  description: "The page you are looking for does not exist. Please return to the homepage.",
};

function upsertMeta(selector: string, attr: string, createName: string, content: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement | null;
  if (!el) {
    el = document.createElement(attr === "property" ? "meta" : "link") as HTMLMetaElement | HTMLLinkElement;
    if (attr === "property") {
      (el as HTMLMetaElement).setAttribute("property", createName);
    } else {
      (el as HTMLLinkElement).setAttribute("rel", createName);
    }
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

function useDocumentSeo(path: string) {
  useEffect(() => {
    const seo = SEO_MAP[path] ?? NOT_FOUND_SEO;
    const canonicalUrl = `${SITE_URL}/${path === "/" ? "" : "#/" + path}`;
    const ogImage = seo.ogImage ?? DEFAULT_OG_IMAGE;
    const ogType = seo.ogType ?? "article";

    document.title = seo.title;

    upsertMeta('meta[name="description"]', "name", "description", seo.description);

    upsertMeta('meta[property="og:title"]', "property", "og:title", seo.title);
    upsertMeta('meta[property="og:description"]', "property", "og:description", seo.description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:type"]', "property", "og:type", ogType);
    upsertMeta('meta[property="og:image"]', "property", "og:image", ogImage);
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", "Prime One Cleaning");

    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", seo.title);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", seo.description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", ogImage);

    upsertLink("canonical", canonicalUrl);
  }, [path]);
}

function App() {
  const [path, setPath] = useState<string>(() => {
    const hash = window.location.hash.replace("#", "");
    return hash || "/";
  });

  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      setPath(hash || "/");
      window.scrollTo(0, 0);
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  useDocumentSeo(path);

  const navigate = (newPath: string) => {
    window.location.hash = newPath;
  };

  const renderPage = () => {
    switch (path) {
      case "/":
        return <HomePage onNavigate={navigate} />;
      case "/about":
        return <AboutPage onNavigate={navigate} />;
      case "/services/residential-cleaning":
        return <ResidentialCleaningPage onNavigate={navigate} />;
      case "/services/end-of-tenancy-cleaning":
        return <EndOfTenancyCleaningPage onNavigate={navigate} />;
      case "/services/after-builders-cleaning":
        return <AfterBuildersCleaningPage onNavigate={navigate} />;
      case "/services/commercial-cleaning":
        return <CommercialCleaningPage onNavigate={navigate} />;
      case "/services/carpet-upholstery-cleaning":
        return <CarpetUpholsteryCleaningPage onNavigate={navigate} />;
      case "/areas":
        return <AreasPage onNavigate={navigate} />;
      case "/areas/milton-keynes":
        return <MiltonKeynesAreaPage onNavigate={navigate} />;
      case "/areas/bedford":
        return <BedfordAreaPage onNavigate={navigate} />;
      case "/areas/leighton-buzzard":
        return <LeightonBuzzardAreaPage onNavigate={navigate} />;
      case "/areas/luton":
        return <LutonAreaPage onNavigate={navigate} />;
      case "/areas/dunstable":
        return <DunstableAreaPage onNavigate={navigate} />;
      case "/areas/hitchin":
        return <HitchinAreaPage onNavigate={navigate} />;
      case "/areas/st-albans":
        return <StAlbansAreaPage onNavigate={navigate} />;
      case "/areas/hemel-hempstead":
        return <HemelHempsteadAreaPage onNavigate={navigate} />;
      case "/areas/watford":
        return <WatfordAreaPage onNavigate={navigate} />;
      case "/areas/aylesbury":
        return <AylesburyAreaPage onNavigate={navigate} />;
      case "/gallery":
        return <GalleryPage onNavigate={navigate} />;
      case "/reviews":
        return <ReviewsPage onNavigate={navigate} />;
      case "/services":
        return <ServicesPage onNavigate={navigate} />;
      case "/contact":
        return <ContactPage onNavigate={navigate} />;
      case "/privacy-policy":
        return <PrivacyPolicyPage onNavigate={navigate} />;
      case "/terms-conditions":
        return <TermsConditionsPage onNavigate={navigate} />;
      default:
        return <NotFoundPage onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header currentPath={path} onNavigate={navigate} />
      <main className="flex-1">{renderPage()}</main>
      <Footer onNavigate={navigate} />
    </div>
  );
}

export default App;
