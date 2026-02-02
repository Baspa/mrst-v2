import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-950 dark:to-neutral-900">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                    Transformeer Uw Ruimte
                    <span className="block text-primary">Met Professioneel Schilderwerk</span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button size="lg" className="text-base">
                        Vraag Gratis Offerte
                    </Button>
                    <Button size="lg" variant="outline" className="text-base">
                        Bekijk Ons Werk
                    </Button>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.primary.100),transparent)] opacity-20 dark:opacity-10" />
        </section>
    );
}
