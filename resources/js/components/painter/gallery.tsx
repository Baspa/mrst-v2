import { Icon } from '@/components/ui/icon';

const galleryItems = [
    {
        id: 1,
        title: 'Moderne Woonkamer',
        gradient: 'from-emerald-300 to-emerald-400 dark:from-emerald-800 dark:to-emerald-900',
    },
    {
        id: 2,
        title: 'Buitengevel Renovatie',
        gradient: 'from-amber-300 to-amber-400 dark:from-amber-800 dark:to-amber-900',
    },
    {
        id: 3,
        title: 'Keuken Meubels',
        gradient: 'from-emerald-400 to-emerald-500 dark:from-emerald-700 dark:to-emerald-800',
    },
    {
        id: 4,
        title: 'Commerciële Kantoorruimte',
        gradient: 'from-amber-400 to-amber-500 dark:from-amber-700 dark:to-amber-800',
    },
    {
        id: 5,
        title: 'Slaapkamer Makeover',
        gradient: 'from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700',
    },
    {
        id: 6,
        title: 'Buitengevel',
        gradient: 'from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700',
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                        Ons Recent Werk
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {galleryItems.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br shadow-lg transition-all hover:scale-[1.05] hover:shadow-2xl ${item.gradient}`}
                        >
                            <div className="flex size-full items-center justify-center">
                                <Icon
                                    name="image"
                                    className="size-16 text-white opacity-40"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/70 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-white/90">
                                        Lorem ipsum dolor sit amet
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
