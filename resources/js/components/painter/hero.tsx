import { Button } from '@/components/ui/button';

export default function Hero() {
    return (
        <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 to-amber-50 dark:from-emerald-950 dark:to-amber-950">
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="mb-6 text-5xl font-bold tracking-tight text-foreground sm:text-6xl md:text-7xl">
                    Transformeer Uw Ruimte
                    <span className="block bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-transparent">
                        Met Professioneel Schilderwerk
                    </span>
                </h1>
                <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                    minim veniam, quis nostrud exercitation ullamco laboris.
                </p>
                <div className="flex flex-col justify-center gap-4 sm:flex-row">
                    <Button
                        size="lg"
                        className="bg-gradient-to-r from-emerald-600 to-amber-600 text-base hover:from-emerald-700 hover:to-amber-700"
                    >
                        Vraag Gratis Offerte
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className="border-2 border-emerald-600 text-base text-emerald-600 hover:bg-emerald-50 dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-950"
                    >
                        Bekijk Ons Werk
                    </Button>
                </div>
            </div>
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.emerald.200),transparent)] opacity-30 dark:opacity-20" />
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(35rem_40rem_at_bottom_right,theme(colors.amber.200),transparent)] opacity-30 dark:opacity-20" />
        </section>
    );
}
