import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Phone, 
  Download, 
  FileText, 
  BookOpen, 
  MessageCircle, 
  ExternalLink,
  AlertCircle,
  Wrench,
  Calculator,
  Lightbulb
} from 'lucide-react';

const whatsappNumber = '+919623004455';

export default function ResourcesPage() {
  const detailedInquiryMessage = encodeURIComponent('Hello! I need detailed technical specifications and documentation for your steel products. Could we discuss my specific requirements?');
  
  const resources = [
    {
      title: "Black Bars Technical Specifications",
      description: "Complete technical data sheet for EN8, EN19, EN24 black bars including chemical composition, mechanical properties, and dimensional tolerances.",
      category: "Technical Specs",
      filename: "black-bars-specs.pdf",
      path: "/specs/black-bars-specs.pdf",
      icon: FileText
    },
    {
      title: "Bright Bar Product Catalog",
      description: "Comprehensive catalog covering bright round bars, flat bars, hex bars, and square bars with available sizes and grades.",
      category: "Product Catalog",
      filename: "bright-bars-catalog.pdf", 
      path: "/specs/bright-bars-catalog.pdf",
      icon: BookOpen
    },
    {
      title: "Alloy Steel Grade Chart",
      description: "Reference chart for alloy steel grades including EN19, EN24, EN31, 4140, 4340 with applications and heat treatment data.",
      category: "Grade Reference",
      filename: "alloy-steel-grades.pdf",
      path: "/specs/alloy-steel-grades.pdf", 
      icon: Calculator
    },
    {
      title: "Stainless Steel Properties",
      description: "Material properties and applications for SS304, SS316, and other stainless steel grades in bright bar form.",
      category: "Material Properties",
      filename: "stainless-steel-properties.pdf",
      path: "/specs/stainless-steel-properties.pdf",
      icon: Wrench
    },
    {
      title: "Quality Standards & Testing",
      description: "Overview of quality control processes, testing procedures, and certification standards followed at Shriram Steels.",
      category: "Quality Documentation", 
      filename: "quality-standards.pdf",
      path: "/specs/quality-standards.pdf",
      icon: FileText
    },
    {
      title: "Application Guide",
      description: "Industry application guide for selecting appropriate steel grades and specifications for various engineering applications.",
      category: "Application Guide",
      filename: "steel-application-guide.pdf",
      path: "/specs/application-guide.pdf", 
      icon: Lightbulb
    }
  ];

  const handleDownloadRequest = (resourceTitle: string) => {
    const message = encodeURIComponent(`Hi! I would like to download the "${resourceTitle}" document. Could you please share this resource?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Head>
        <title>Technical Resources & Specifications - Steel Product Documentation | Shriram Steels</title>
        <meta name="description" content="Download technical specifications, product catalogs, and grade charts for steel bars from Shriram Steels. Complete documentation for informed decision making." />
        <meta name="keywords" content="steel specifications, technical documentation, product catalogs, grade charts, steel properties, application guides, material data sheets" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
      </Head>

      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <Link href="/">
              <Image
                src="/shriram-steels.png"
                alt="Shriram Steels Logo"
                width={120}
                height={36}
                priority
              />
            </Link>
            <nav className="hidden md:flex space-x-6">
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">Products</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link href="/quality" className="text-sm font-medium hover:text-primary transition-colors">Quality</Link>
              <Link href="/resources" className="text-sm font-medium text-primary">Resources</Link>
            </nav>
            <Button size="sm" asChild>
              <a href={`https://wa.me/${whatsappNumber}?text=${detailedInquiryMessage}`} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Get Resources
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <BookOpen className="mr-2 h-3 w-3" />
                Technical Documentation
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Resources & Documentation
              </h1>
              <p className="text-xl text-muted-foreground">
                Access comprehensive technical specifications, product catalogs, and application guides 
                to make informed decisions about steel product selection.
              </p>
            </div>
          </div>
        </section>

        {/* Important Notice */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <Card className="max-w-4xl mx-auto border-amber-200 bg-amber-50/50">
              <CardHeader>
                <CardTitle className="flex items-center text-amber-800">
                  <AlertCircle className="mr-2 h-5 w-5" />
                  Important Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-amber-700 space-y-2">
                  <p>
                    <strong>TODO:</strong> The following resources are placeholder links. Actual PDF documents need to be created and uploaded to the /public/specs/ directory.
                  </p>
                  <p>
                    All technical specifications and material properties are provided for reference purposes only. 
                    Customers should verify suitability for their specific applications. For the most current documentation, 
                    please contact us directly via WhatsApp.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Resources Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Available Resources</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download technical documentation and specifications for our complete range of steel products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource, index) => {
                const IconComponent = resource.icon;
                return (
                  <Card key={index} className="glass-card">
                    <CardHeader>
                      <div className="flex items-start justify-between mb-2">
                        <div className="flex items-center">
                          <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mr-3">
                            <IconComponent className="h-5 w-5 text-primary" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {resource.category}
                          </Badge>
                        </div>
                      </div>
                      <CardTitle className="text-lg leading-tight">
                        {resource.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <CardDescription className="text-sm">
                        {resource.description}
                      </CardDescription>
                      
                      <div className="pt-2 border-t">
                        <p className="text-xs text-muted-foreground mb-3">
                          File: {resource.filename}
                        </p>
                        
                        <div className="flex flex-col gap-2">
                          <Button 
                            className="w-full" 
                            onClick={() => handleDownloadRequest(resource.title)}
                          >
                            <Download className="mr-2 h-4 w-4" />
                            Request via WhatsApp
                          </Button>
                          <Button 
                            variant="outline" 
                            className="w-full text-xs" 
                            disabled
                          >
                            <ExternalLink className="mr-2 h-3 w-3" />
                            Direct Download (TODO: Add PDF)
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technical Support */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Need Additional Information?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our technical team can provide customized documentation, application-specific recommendations, 
                and detailed product information beyond standard specifications.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card className="premium-card text-center">
                <CardHeader>
                  <MessageCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Technical Consultation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Get expert advice on material selection and application suitability
                  </CardDescription>
                  <Button asChild className="w-full">
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I need technical consultation for material selection. Can we discuss my application requirements?')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Consult Expert
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="premium-card text-center">
                <CardHeader>
                  <FileText className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Custom Documentation</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Request customized specifications and test reports for your projects
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello! I need custom documentation and specifications for my project. Can you help with tailored material data?')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <FileText className="mr-2 h-4 w-4" />
                      Request Custom Docs
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="premium-card text-center">
                <CardHeader>
                  <Calculator className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Material Calculator</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">
                    Get help with weight calculations, quantity estimation, and sizing
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full">
                    <a 
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I need help with material calculations and quantity estimation. Can you assist with my requirements?')}`}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <Calculator className="mr-2 h-4 w-4" />
                      Get Calculations
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quick Access */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quick Access</h2>
              <p className="text-muted-foreground">
                Jump directly to specific product information
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
              {[
                { name: 'Black Bars', slug: 'black-bars' },
                { name: 'Bright Round Bars', slug: 'bright-round-bars' },
                { name: 'Bright Flat Bars', slug: 'bright-flat-bars' },
                { name: 'Bright Hex Bars', slug: 'bright-hex-bars' },
                { name: 'Bright Square Bars', slug: 'bright-square-bars' },
                { name: 'Alloy Steel', slug: 'alloy-steel' }
              ].map((product) => (
                <Button key={product.slug} variant="outline" asChild>
                  <Link href={`/products/${product.slug}`}>
                    {product.name}
                  </Link>
                </Button>
              ))}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Can&apos;t Find What You&apos;re Looking For?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our team maintains a comprehensive library of technical resources and can provide 
              additional documentation based on your specific needs.
            </p>
            <Button size="lg" asChild>
              <a href={`https://wa.me/${whatsappNumber}?text=${detailedInquiryMessage}`} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Request Specific Documentation
              </a>
            </Button>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t py-12">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <div>
                <Image
                  src="/shriram-steels.png"
                  alt="Shriram Steels"
                  width={120}
                  height={36}
                  className="mb-4"
                />
                <p className="text-sm text-muted-foreground">
                  Leading steel manufacturer in Kolhapur, Maharashtra. Quality products with competitive pricing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/products/black-bars">Black Bars</Link></li>
                  <li><Link href="/products/bright-round-bars">Bright Round Bars</Link></li>
                  <li><Link href="/products/alloy-steel">Alloy Steel</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Company</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/about">About Us</Link></li>
                  <li><Link href="/quality">Quality</Link></li>
                  <li><Link href="/resources">Resources</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <p>Plot No. E-66, M.I.D.C., Shiroli</p>
                  <p>Kolhapur - 416122, Maharashtra</p>
                  <p>WhatsApp: +91 96230 04455</p>
                  <p className="text-xs mt-4">GST: 27AAUPP7201Q1ZU</p>
                </div>
              </div>
            </div>
            <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
              <p>&copy; 2024 Shriram Steels. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}