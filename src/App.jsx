import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import AboutPage from './pages/AboutPage'
import VideosPage from './pages/VideosPage'
import ImagesPage from './pages/ImagesPage'

// Islam Pages
import NoahPage from './pages/islam/NoahPage'
import TranslationsPage from './pages/islam/TranslationsPage'
import FaithPage from './pages/islam/FaithPage'
import QuranAIPage from './pages/islam/QuranAIPage'
import ResearchPage from './pages/islam/ResearchPage'
import TheBookPage from './pages/islam/TheBookPage'
import WritingIslamPage from './pages/islam/WritingIslamPage'

// Health Pages
import AgeCalcPage from './pages/health/AgeCalcPage'
import CardiacAxisPage from './pages/health/CardiacAxisPage'
import EcgCalcPage from './pages/health/EcgCalcPage'
import GcsCalcPage from './pages/health/GcsCalcPage'
import BmiCalcPage from './pages/health/BmiCalcPage'
import GlucoseCalcPage from './pages/health/GlucoseCalcPage'
import HeartFailureCalcPage from './pages/health/HeartFailureCalcPage'
import MapCalcPage from './pages/health/MapCalcPage'

// Tech Pages
import PingPage from './pages/tech/PingPage'
import HeaderPage from './pages/tech/HeaderPage'
import BurpsuitePage from './pages/tech/BurpsuitePage'
import FbTaggingPage from './pages/tech/FbTaggingPage'

// Poetry Pages
import SkirtsPage from './pages/poetry/SkirtsPage'
import OurJourneyPage from './pages/poetry/OurJourneyPage'
import PalestinePage from './pages/poetry/PalestinePage'

// Writeups Pages
import AcrossMartPage from './pages/writeups/AcrossMartPage'
import NigerPage from './pages/writeups/NigerPage'

const islamPosts = [
    { title: 'Insight from a verse in Surah An-Nuh', desc: 'This verse reminds preachers about what their true duty is', href: '/islam/noah' },
    { title: 'Example of meanings lost in Quran translations', desc: 'The example verse here is from Surah Al-Kahf', href: '/islam/translations' },
    { title: 'Faith & Its Conditions', desc: 'An exploration of the pillars of faith', href: '/islam/faith' },
    { title: 'Quran AI', desc: 'Exploring the Quran with artificial intelligence', href: '/islam/quran-ai' },
    { title: 'Research Highlights', desc: 'Key insights from Islamic research', href: '/islam/research' },
    { title: 'THE BOOK', desc: 'Reflections on the Ultimate Book', href: '/islam/the-book' },
    { title: 'Writing for Islam', desc: 'The importance of writing in the modern age', href: '/islam/writing' },
]

const healthPosts = [
    { title: 'Pediatrics Age Calculator', desc: 'For quick estimation of weight in management of pediatrics age group', href: '/health/age-calc' },
    { title: 'Cardiac Axis Interpreter', desc: 'For quick determination of cardiac axis', href: '/health/cardiac-axis' },
    { title: 'ECG Waves Explained', desc: 'Understanding the basics of ECG waveforms', href: '/health/ecg-calc' },
    { title: 'Glasgow Coma Scale', desc: 'Quick GCS assessment tool', href: '/health/gcs' },
    { title: 'BMI Calculator', desc: 'Body Mass Index calculator', href: '/health/bmi' },
    { title: 'Glucose Converter', desc: 'Convert blood glucose levels between units', href: '/health/glucose' },
    { title: 'Heart Failure Criteria', desc: 'Framingham Heart Failure Criteria Calculator', href: '/health/heart-failure' },
    { title: 'Mean Arterial Pressure', desc: 'Calculate MAP from blood pressure readings', href: '/health/map' },
]

const techPosts = [
    { title: 'Ping in Terminal', desc: 'Silly errors that can mess up ping tool', href: '/technology/ping' },
    { title: 'Header Vs Payload', desc: 'Description of headers and payloads', href: '/technology/header' },
    { title: 'Burp Suite Basics', desc: 'Getting started with Burp Suite', href: '/technology/burpsuite' },
    { title: 'Facebook Tagging', desc: 'The dangers of tagging on Facebook', href: '/technology/fb-tagging' },
]

const poetryPosts = [
    { title: 'Skirts at Knee on The Way to School', desc: 'On parents that allow immodesty in their children', href: '/poetry/skirts' },
    { title: 'Our Journey', desc: 'The reality of life', href: '/poetry/our-journey' },
    { title: 'Palestine', desc: 'Reflections on the struggle', href: '/poetry/palestine' },
]

const writeupsPosts = [
    { title: 'AcrossMart', desc: 'About the online store', href: '/writeups/acrossmart' },
    { title: 'Niger, ECOWAS and Nigeria', desc: 'A short overview on the Niger coup', href: '/writeups/niger' },
]

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/islam" element={<CategoryPage title="Islam" icon="🕌" posts={islamPosts} accentColor="var(--accent-islam)" />} />
                <Route path="/islam/noah" element={<NoahPage />} />
                <Route path="/islam/translations" element={<TranslationsPage />} />
                <Route path="/islam/faith" element={<FaithPage />} />
                <Route path="/islam/quran-ai" element={<QuranAIPage />} />
                <Route path="/islam/research" element={<ResearchPage />} />
                <Route path="/islam/the-book" element={<TheBookPage />} />
                <Route path="/islam/writing" element={<WritingIslamPage />} />

                <Route path="/health" element={<CategoryPage title="Health" icon="🩺" posts={healthPosts} accentColor="var(--accent-health)" />} />
                <Route path="/health/age-calc" element={<AgeCalcPage />} />
                <Route path="/health/cardiac-axis" element={<CardiacAxisPage />} />
                <Route path="/health/ecg-calc" element={<EcgCalcPage />} />
                <Route path="/health/gcs" element={<GcsCalcPage />} />
                <Route path="/health/bmi" element={<BmiCalcPage />} />
                <Route path="/health/glucose" element={<GlucoseCalcPage />} />
                <Route path="/health/heart-failure" element={<HeartFailureCalcPage />} />
                <Route path="/health/map" element={<MapCalcPage />} />

                <Route path="/technology" element={<CategoryPage title="Technology" icon="💻" posts={techPosts} accentColor="var(--accent-tech)" />} />
                <Route path="/technology/ping" element={<PingPage />} />
                <Route path="/technology/header" element={<HeaderPage />} />
                <Route path="/technology/burpsuite" element={<BurpsuitePage />} />
                <Route path="/technology/fb-tagging" element={<FbTaggingPage />} />

                <Route path="/poetry" element={<CategoryPage title="Poetry" icon="📜" posts={poetryPosts} accentColor="var(--accent-poetry)" />} />
                <Route path="/poetry/skirts" element={<SkirtsPage />} />
                <Route path="/poetry/our-journey" element={<OurJourneyPage />} />
                <Route path="/poetry/palestine" element={<PalestinePage />} />

                <Route path="/writeups" element={<CategoryPage title="Writeups" icon="✍️" posts={writeupsPosts} accentColor="var(--accent-writeups)" />} />
                <Route path="/writeups/acrossmart" element={<AcrossMartPage />} />
                <Route path="/writeups/niger" element={<NigerPage />} />

                <Route path="/videos" element={<VideosPage />} />
                <Route path="/images" element={<ImagesPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}
