import { Icon } from '@/components/ui/icon';

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-6 text-4xl font-bold tracking-tight text-foreground">
                            Over Ons Vakmanschap
                        </h2>
                        <p className="mb-4 text-lg text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                            enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p className="mb-6 text-lg text-muted-foreground">
                            Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia deserunt mollit
                            anim id est laborum.
                        </p>
                        <div className="grid gap-4 sm:grid-cols-2">
                            <div className="flex items-start gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                                    <Icon name="check" className="size-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        Kwaliteitsmaterialen
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Lorem ipsum dolor sit amet consectetur adipiscing.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3">
                                <div className="flex size-10 items-center justify-center rounded-full bg-primary/10">
                                    <Icon name="clock" className="size-5 text-primary" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-foreground">
                                        Tijdige Oplevering
                                    </h3>
                                    <p className="text-sm text-muted-foreground">
                                        Sed do eiusmod tempor incididunt ut labore.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/20 to-primary/5">
                        <div className="flex size-full items-center justify-center text-muted-foreground">
                            <Icon name="image" className="size-24 opacity-20" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
