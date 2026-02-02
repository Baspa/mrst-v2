import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Icon } from '@/components/ui/icon';

export default function Contact() {
    return (
        <section id="contact" className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
                <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <h2 className="mb-6 bg-gradient-to-r from-blue-600 to-orange-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                            Neem Contact Op
                        </h2>
                        <p className="mb-8 text-lg text-muted-foreground">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        </p>
                        <div className="space-y-6">
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                                    <Icon name="phone" className="size-5 text-blue-600 dark:text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-foreground">
                                        Telefoon
                                    </h3>
                                    <p className="text-muted-foreground">
                                        +1 (555) 123-4567
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-950">
                                    <Icon name="mail" className="size-5 text-orange-600 dark:text-orange-400" />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-foreground">
                                        E-mail
                                    </h3>
                                    <p className="text-muted-foreground">
                                        contact@painter.example
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4">
                                <div className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-blue-100 dark:bg-blue-950">
                                    <Icon
                                        name="map-pin"
                                        className="size-5 text-blue-600 dark:text-blue-400"
                                    />
                                </div>
                                <div>
                                    <h3 className="mb-1 font-semibold text-foreground">
                                        Adres
                                    </h3>
                                    <p className="text-muted-foreground">
                                        123 Lorem Street
                                        <br />
                                        Ipsum City, ST 12345
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-2xl border-2 border-blue-200 bg-card p-8 shadow-xl dark:border-blue-800">
                        <h3 className="mb-6 text-2xl font-semibold text-foreground">
                            Vraag een Offerte Aan
                        </h3>
                        <form className="space-y-4">
                            <div>
                                <Label htmlFor="name">Naam</Label>
                                <Input
                                    id="name"
                                    type="text"
                                    placeholder="Jan Jansen"
                                    className="mt-1.5"
                                />
                            </div>
                            <div>
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="jan@voorbeeld.nl"
                                    className="mt-1.5"
                                />
                            </div>
                            <div>
                                <Label htmlFor="phone">Telefoon</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="06 12345678"
                                    className="mt-1.5"
                                />
                            </div>
                            <div>
                                <Label htmlFor="message">Bericht</Label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    placeholder="Vertel ons over uw project..."
                                    className="mt-1.5 flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                />
                            </div>
                            <Button
                                type="submit"
                                className="w-full bg-gradient-to-r from-blue-600 to-orange-600 hover:from-blue-700 hover:to-orange-700"
                            >
                                Verstuur Bericht
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
