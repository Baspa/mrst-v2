import { Icon } from '@/components/ui/icon';

export default function About() {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div className="flex flex-col justify-center">
                        <h2 className="mb-6 bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
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
                                <div className="flex size-10 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-950">
                                    <Icon name="check" className="size-5 text-emerald-600 dark:text-emerald-400" />
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
                                <div className="flex size-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-950">
                                    <Icon name="clock" className="size-5 text-amber-600 dark:text-amber-400" />
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
                    <div className="relative aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-200 to-amber-200 dark:from-emerald-900 dark:to-amber-900">
                        <div className="flex size-full items-center justify-center text-muted-foreground">
                            <Icon name="image" className="size-24 opacity-30" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
