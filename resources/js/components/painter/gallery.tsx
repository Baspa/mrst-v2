import { Icon } from '@/components/ui/icon';

const galleryItems = [
    { id: 1, title: 'Moderne Woonkamer' },
    { id: 2, title: 'Buitengevel Renovatie' },
    { id: 3, title: 'Keuken Meubels' },
    { id: 4, title: 'Commerciële Kantoorruimte' },
    { id: 5, title: 'Slaapkamer Makeover' },
    { id: 6, title: 'Buitengevel' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
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
                            className="group relative aspect-[4/3] overflow-hidden rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 transition-transform hover:scale-[1.02]"
                        >
                            <div className="flex size-full items-center justify-center">
                                <Icon
                                    name="image"
                                    className="size-16 text-muted-foreground opacity-20"
                                />
                            </div>
                            <div className="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity group-hover:opacity-100">
                                <div className="p-4 text-white">
                                    <h3 className="text-lg font-semibold">{item.title}</h3>
                                    <p className="text-sm text-white/80">
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
