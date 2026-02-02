import { Head } from '@inertiajs/react';
import Hero from '@/components/painter/hero';
import About from '@/components/painter/about';
import Gallery from '@/components/painter/gallery';
import Services from '@/components/painter/services';
import Contact from '@/components/painter/contact';

export default function Painter() {
    return (
        <>
            <Head title="Professional Painting Services" />
            <div className="min-h-screen bg-background">
                <Hero />
                <About />
                <Services />
                <Gallery />
                <Contact />
            </div>
        </>
    );
}
