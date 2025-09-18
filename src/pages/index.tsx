import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { ArrowRight, Phone, MapPin, Mail, Shield, Truck, Award } from 'lucide-react';

const whatsappNumber = '+919623004455';
const getQuoteMessage = encodeURIComponent('Hello! I would like to get a quote for steel products. Please share your current rates and availability.');
const downloadMessage = encodeURIComponent('Hi! I would like to download product specifications and technical details. Could you please share the latest catalogs?');

export default function HomePage() {
  const whatsappQuoteLink = `https://wa.me/${whatsappNumber}?text=${getQuoteMessage}`;
  const whatsappDownloadLink = `https://wa.me/${whatsappNumber}?text=${downloadMessage}`;

  return (
    <>
      <Head>
        <title>Shriram Steels - Premium Steel Bars & Rods Manufacturer | Kolhapur</title>
        <meta name="description" content="Leading manufacturer of premium steel bars, bright bars, alloy steel rods in Kolhapur. EN8, EN19, SS304, SS316 grades available. Get instant quotes via WhatsApp." />
        <meta name="keywords" content="steel bars, bright bars, alloy steel, stainless steel, EN8, EN19, SS304, Kolhapur, Maharashtra, steel manufacturer" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
        <link rel="apple-touch-icon" href="/shriram-steels.png" />
        <meta property="og:title" content="Shriram Steels - Premium Steel Bars Manufacturer" />
        <meta property="og:description" content="Quality steel bars, bright bars & alloy steel from Kolhapur. Multiple grades in stock. Get instant quotes." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://shriramsteels.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shriram Steels",
              "alternateName": "Shri Ram Industries",
              "url": "https://shriramsteels.com",
              "logo": "https://shriramsteels.com/shriram-steels.png",
              "description": "Leading manufacturer of premium steel bars and rods in Kolhapur",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Plot No. E-66, Shriram Industries, M.I.D.C., Shiroli",
                "addressLocality": "Kolhapur",
                "addressRegion": "Maharashtra",
                "postalCode": "416122",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+919623004455",
                "contactType": "sales"
              }
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        {/* Header */}
        <header className="border-b">
          <div className="container mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <Image
                src="/shriram-steels.png"
                alt="Shriram Steels Logo"
                width={120}
                height={36}
                priority
              />
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/products" className="text-sm font-medium hover:text-primary transition-colors">Products</Link>
              <Link href="/about" className="text-sm font-medium hover:text-primary transition-colors">About</Link>
              <Link href="/quality" className="text-sm font-medium hover:text-primary transition-colors">Quality</Link>
              <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
            </nav>
            <Button size="sm" asChild>
              <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Get Quote
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <Badge variant="outline" className="mb-8">
              <Shield className="mr-2 h-3 w-3" />
              Trusted Steel Manufacturer since decades
            </Badge>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Premium{' '}
              <span className="brand-text-gradient">
                Steel Bars
              </span>
              {' '}& Rods
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Leading manufacturer of high-quality steel bars, bright bars, and alloy steel rods. 
              Multiple grades in stock with Material Test Reports and competitive pricing.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Button size="lg" asChild className="group">
                <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
                  Get Instant Quote
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={whatsappDownloadLink} target="_blank" rel="noopener noreferrer">
                  Download Specs
                </a>
              </Button>
            </div>

            {/* Hero Image */}
            <div className="relative max-w-4xl mx-auto">
              <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/30 rounded-full blur-3xl"></div>
              <Image
                width={1200}
                height={800}
                className="w-full mx-auto rounded-lg relative leading-none flex items-center border border-t-2 border-secondary border-t-primary/30"
                src="/hero.jpg"
                alt="Shriram Steels Manufacturing Facility"
                priority
              />
              <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Trust & Traceability */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Trust & Traceability</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Quality assurance and transparent processes for every steel product we manufacture.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardHeader className="text-center">
                  <Shield className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Quality Certified</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Material Test Reports (MTR) available for all products with complete chemical analysis and mechanical properties.
                    {/* TODO: Verify specific certifications and quality standards */}
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="text-center">
                  <Truck className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Reliable Supply</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Consistent inventory management and timely delivery across Maharashtra and neighboring states.
                  </CardDescription>
                </CardContent>
              </Card>
              <Card className="glass-card">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Industry Experience</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Decades of expertise in steel manufacturing with established presence in Kolhapur industrial sector.
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Products Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Product Range</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wide variety of steel bars and rods to meet diverse industrial requirements.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { name: 'Black Bars', desc: 'EN8, EN19, EN24 grades for general engineering', slug: 'black-bars' },
                { name: 'Bright Round Bars', desc: 'Mirror finish for precision applications', slug: 'bright-round-bars' },
                { name: 'Bright Flat Bars', desc: 'Perfect for machining and tooling', slug: 'bright-flat-bars' },
                { name: 'Bright Hex Bars', desc: 'Ideal for fasteners and fittings', slug: 'bright-hex-bars' },
                { name: 'Bright Square Bars', desc: 'Structural and decorative applications', slug: 'bright-square-bars' },
                { name: 'Alloy Steel', desc: 'High-strength for critical components', slug: 'alloy-steel' }
              ].map((product) => (
                <Card key={product.slug} className="glass-card">
                  <CardHeader>
                    <CardTitle className="text-lg">{product.name}</CardTitle>
                    <CardDescription>{product.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button asChild variant="outline" className="w-full">
                      <Link href={`/products/${product.slug}`}>View Details</Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
                <Link href="/products">View All Products</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
              <p className="text-muted-foreground">
                Ready to discuss your steel requirements? Contact us via WhatsApp for instant quotes.
              </p>
            </div>
            <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle>Quick Quote via WhatsApp</CardTitle>
                  <CardDescription>
                    Get instant pricing and availability for your steel requirements
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button asChild className="w-full" size="lg">
                    <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      WhatsApp: +91 96230 04455
                    </a>
                  </Button>
                </CardContent>
              </Card>
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle>Visit Our Facility</CardTitle>
                  <CardDescription>Located in Kolhapur&apos;s industrial hub</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="text-sm">
                      <p className="font-medium">Shriram Steels</p>
                      <p className="text-muted-foreground">
                        Plot No. E-66, M.I.D.C., Shiroli,<br />
                        Kolhapur - 416122, Maharashtra
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-5 w-5 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">
                      sales@shriramsteels.example
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>
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
                  <p className="text-xs mt-4">
                    GST: 27AAUPP7201Q1ZU 
                    {/* TODO: Verify GST number */}
                  </p>
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