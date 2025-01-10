import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Activity, BarChart2, Target } from "lucide-react";

const features = [
  {
    title: "Workout Tracking",
    description: "Log your exercises, sets, reps, and weights with ease.",
    icon: Activity,
  },
  {
    title: "Progress Analytics",
    description: "Visualize your fitness journey with detailed charts and graphs.",
    icon: BarChart2,
  },
  {
    title: "Goal Setting",
    description: "Set and track your fitness goals to stay motivated.",
    icon: Target,
  },
];

const Features = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Key Features</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="transition-transform hover:scale-105">
              <CardHeader>
                <feature.icon className="mb-4 h-12 w-12 text-primary" />
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;