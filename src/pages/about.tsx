import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { 
  Phone, 
  MapPin, 
  Mail, 
  Factory, 
  Users, 
  Award, 
  Calendar, 
  Target,
  CheckCircle
} from 'lucide-react';

const whatsappNumber = '+919623004455';

export default function AboutPage() {
  const contactMessage = encodeURIComponent('Hello! I found your website and would like to learn more about Shriram Steels. Could we discuss our steel requirements?');

  return (
    <>
      <Head>
        <title>About Shriram Steels - Steel Manufacturing Company in Kolhapur | Our Story</title>
        <meta name="description" content="Learn about Shriram Steels, a leading steel manufacturer in Kolhapur, Maharashtra. Decades of experience in producing quality steel bars and rods for industrial applications." />
        <meta name="keywords" content="about Shriram Steels, steel manufacturer Kolhapur, Maharashtra steel company, steel bars manufacturer, industrial steel supplier" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
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
              "description": "Leading manufacturer of premium steel bars and rods in Kolhapur, Maharashtra",
              "foundingDate": "1990", 
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
                "contactType": "customer service",
                "areaServed": "IN",
                "availableLanguage": ["en", "hi", "mr"]
              },
              "sameAs": [
                "https://www.shriramindustries9.com/"
              ]
            })
          }}
        />
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
              <Link href="/about" className="text-sm font-medium text-primary">About</Link>
              <Link href="/quality" className="text-sm font-medium hover:text-primary transition-colors">Quality</Link>
              <Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">Resources</Link>
            </nav>
            <Button size="sm" asChild>
              <a href={`https://wa.me/${whatsappNumber}?text=${contactMessage}`} target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-4 w-4" />
                Contact Us
              </a>
            </Button>
          </div>
        </header>

        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Shriram Steels
              </h1>
              <p className="text-xl text-muted-foreground">
                A trusted name in steel manufacturing with decades of experience serving 
                industries across Maharashtra and beyond.
              </p>
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Calendar className="mr-2 h-3 w-3" />
                  Established 1990s {/* TODO: Confirm actual founding year */}
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Shriram Steels has been a cornerstone of the steel manufacturing industry in Kolhapur, 
                    Maharashtra, for decades. Located in the heart of the M.I.D.C. industrial area at 
                    Shiroli, our facility is strategically positioned to serve customers across 
                    Western Maharashtra and neighboring states.
                  </p>
                  <p>
                    What started as a focused steel processing unit has evolved into a comprehensive 
                    manufacturer of high-quality steel bars, bright bars, and specialized alloy steels. 
                    Our commitment to quality, reliability, and customer satisfaction has made us a 
                    trusted partner for industries ranging from automotive to construction.
                  </p>
                  <p>
                    Today, under the leadership of our CEO Ratan P {/* TODO: Confirm CEO details */}, 
                    we continue to expand our capabilities while maintaining the core values that 
                    have defined our success: quality, integrity, and customer-first approach.
                  </p>
                </div>
              </div>
              
              {/* TODO: Replace with actual facility images */}
              <div className="space-y-4">
                <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Factory className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">Manufacturing Facility</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      TODO: Add facility photography
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Capabilities */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Capabilities</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                State-of-the-art manufacturing processes and quality systems that ensure 
                consistent delivery of premium steel products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <Factory className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Manufacturing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Advanced production facilities for black bars, bright bars, and specialty steel products
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <CheckCircle className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Quality Control</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Rigorous testing procedures with Material Test Reports for every batch
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Expert Team</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Skilled professionals with decades of experience in steel manufacturing
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Customer Focus</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    Tailored solutions and responsive service to meet specific industry requirements
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Leadership Team</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Experienced leadership guiding our commitment to excellence and innovation.
              </p>
            </div>

            <div className="max-w-md mx-auto">
              <Card className="text-center">
                <CardHeader>
                  {/* TODO: Add actual leadership photos */}
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Ratan P</CardTitle>
                  <CardDescription>Chief Executive Officer</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Leading Shriram Steels with vision and expertise, driving growth 
                    and maintaining our reputation for quality in the steel industry.
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {/* TODO: Confirm CEO details and background */}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Information */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Company Information</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Shriram Steels</h4>
                    <p className="text-muted-foreground text-sm">
                      Plot No. E-66, Shriram Industries<br />
                      M.I.D.C., Shiroli<br />
                      Kolhapur - 416122<br />
                      Maharashtra, India
                    </p>
                  </div>
                  <div className="pt-2">
                    <p className="text-xs text-muted-foreground">
                      <strong>GST Number:</strong> 27AAUPP7201Q1ZU
                      <br />
                      <span className="text-red-500">TODO: Verify GST number</span>
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="mr-2 h-5 w-5" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm">Primary Contact</h4>
                    <p className="text-muted-foreground text-sm">
                      WhatsApp: +91 96230 04455<br />
                      Phone: +91-XXXXXXXXXX {/* TODO: Add landline if available */}
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      sales@shriramsteels.example
                      <br />
                      <span className="text-xs text-red-500">TODO: Update with actual email</span>
                    </p>
                  </div>
                  <Button asChild className="w-full mt-4">
                    <a href={`https://wa.me/${whatsappNumber}?text=${contactMessage}`} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Connect via WhatsApp
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Work Together?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Whether you need standard steel products or custom specifications, 
              our team is ready to help. Contact us to discuss your requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={`https://wa.me/${whatsappNumber}?text=${contactMessage}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/products">
                  View Our Products
                </Link>
              </Button>
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