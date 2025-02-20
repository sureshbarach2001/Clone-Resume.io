
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight, FileText, LayoutGrid, Briefcase, TrendingUp, Palette, Settings } from "lucide-react";

const templates = [
  {
    title: "Word",
    description: "Microsoft Word templates, perfect for downloading, editing, and customizing offline.",
    icon: FileText,
  },
  {
    title: "Simple",
    description: "Clean, timeless templates with a classic balanced structure. A perfect basic canvas",
    icon: LayoutGrid,
  },
  {
    title: "Professional",
    description: "Job-winning templates to showcase professionalism, dependability, and expertise",
    icon: Briefcase,
  },
  {
    title: "Modern",
    description: "A current and stylish feel for forward-thinking candidates in innovative fields",
    icon: TrendingUp,
  },
  {
    title: "Creative",
    description: "A bold, original feel perfect for artistic fields and contemporary companies",
    icon: Palette,
  },
  {
    title: "ATS",
    description: "Optimize your resume and impress employers with these ATS-friendly designs.",
    icon: Settings,
  },
];

const Templates = () => {
  return (
    <div className="min-h-screen pt-16">
      <section className="section-padding bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Resume Templates</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our collection of professional resume templates to get started
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {templates.map((template, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-6 glass-card hover:scale-105 transition-transform cursor-pointer">
                  <div className="flex items-center space-x-4 mb-4">
                    <template.icon className="h-8 w-8 text-primary" />
                    <h3 className="text-xl font-semibold">{template.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{template.description}</p>
                  <Button variant="ghost" className="w-full justify-between">
                    View Templates <ChevronRight className="h-4 w-4" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to create your professional resume?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Choose your template and start building your resume now
          </p>
          <Button size="lg" variant="secondary">
            Create My Resume <ChevronRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Templates;
