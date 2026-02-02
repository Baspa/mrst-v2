import { Icon } from '@/components/ui/icon';

const galleryItems = [
    {
        id: 1,
        title: 'Moderne Woonkamer',
        gradient: 'from-blue-300 to-blue-400 dark:from-blue-800 dark:to-blue-900',
    },
    {
        id: 2,
        title: 'Buitengevel Renovatie',
        gradient: 'from-orange-300 to-orange-400 dark:from-orange-800 dark:to-orange-900',
    },
    {
        id: 3,
        title: 'Keuken Meubels',
        gradient: 'from-blue-400 to-blue-500 dark:from-blue-700 dark:to-blue-800',
    },
    {
        id: 4,
        title: 'Commerciële Kantoorruimte',
        gradient: 'from-orange-400 to-orange-500 dark:from-orange-700 dark:to-orange-800',
    },
    {
        id: 5,
        title: 'Slaapkamer Makeover',
        gradient: 'from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700',
    },
    {
        id: 6,
        title: 'Buitengevel',
        gradient: 'from-orange-500 to-orange-600 dark:from-orange-600 dark:to-orange-700',
    },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
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
