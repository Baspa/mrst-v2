import { Card } from '@/components/ui/card';
import { Icon } from '@/components/ui/icon';

const services = [
    {
        icon: 'home',
        title: 'Binnenschilderwerk',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        color: 'emerald',
    },
    {
        icon: 'building',
        title: 'Buitenschilderwerk',
        description:
            'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        color: 'amber',
    },
    {
        icon: 'warehouse',
        title: 'Commerciële Projecten',
        description:
            'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        color: 'emerald',
    },
    {
        icon: 'paint-bucket',
        title: 'Meubel Renovatie',
        description:
            'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        color: 'amber',
    },
    {
        icon: 'palette',
        title: 'Kleuradvies',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.',
        color: 'emerald',
    },
    {
        icon: 'sparkles',
        title: 'Behang Installatie',
        description:
            'Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt.',
        color: 'amber',
    },
];

const colorClasses = {
    emerald: 'bg-emerald-100 text-emerald-600 dark:bg-emerald-950 dark:text-emerald-400',
    amber: 'bg-amber-100 text-amber-600 dark:bg-amber-950 dark:text-amber-400',
};

export default function Services() {
    return (
        <section id="services" className="bg-muted/30 py-20">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="mb-4 bg-gradient-to-r from-emerald-600 to-amber-600 bg-clip-text text-4xl font-bold tracking-tight text-transparent">
                        Onze Diensten
                    </h2>
                    <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {services.map((service, index) => (
                        <Card
                            key={index}
                            className="flex flex-col items-start gap-4 border-2 p-6 transition-all hover:scale-105 hover:shadow-xl"
                        >
                            <div
                                className={`flex size-12 items-center justify-center rounded-lg ${colorClasses[service.color as keyof typeof colorClasses]}`}
                            >
                                <Icon name={service.icon} className="size-6" />
                            </div>
                            <div>
                                <h3 className="mb-2 text-xl font-semibold text-foreground">
                                    {service.title}
                                </h3>
                                <p className="text-muted-foreground">
                                    {service.description}
                                </p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
