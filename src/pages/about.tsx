import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Navbar } from '../../components/navbar';
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
  const contactMessage = encodeURIComponent('Hello! I found your website and would like to learn more about Shriram Steels & Shriram Industries. Could we discuss our steel requirements?');

  return (
    <>
      <Head>
        <title>About Shriram Steels & Shriram Industries - Steel Manufacturing Company in Kolhapur | Our Story</title>
        <meta name="description" content="Learn about Shriram Steels & Shriram Industries, established in 1995 in Kolhapur. Manufacturer and wholesaler of bright round bars, alloy steel bars, and premium steel products." />
        <meta name="keywords" content="about Shriram Steels, Shriram Industries, steel manufacturer Kolhapur, Maharashtra steel company, steel bars manufacturer, industrial steel supplier" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Shriram Steels & Shriram Industries",
              "alternateName": ["Shriram Steels", "Shriram Industries", "Shri Ram Industries"],
              "url": "https://shriramsteels.com",
              "logo": "https://shriramsteels.com/shriram-steels.png",
              "description": "Manufacturer and wholesaler of bright round bars, alloy steel bars, and premium steel products from Kolhapur, Maharashtra.",
              "foundingDate": "1995",
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
        <Navbar currentPage="/about" />

        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About Shriram Steels & Shriram Industries
              </h1>
              <p className="text-xl text-muted-foreground">
                Established in 1995 in Kolhapur, we unite Shriram Steels & Shriram Industries to deliver premium steel products with a client-first mindset.
              </p>
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
              <Card className="glass-card text-center">
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

              <Card className="glass-card text-center">
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

              <Card className="glass-card text-center">
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

              <Card className="glass-card text-center">
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

        {/* Our Story */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge variant="outline" className="mb-4">
                  <Calendar className="mr-2 h-3 w-3" />
                  Established 1995 in Kolhapur, Maharashtra
                </Badge>
                <h2 className="text-3xl font-bold mb-6">Our Journey</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Established in the year 1995 in Kolhapur (Maharashtra, India), Shriram Industries has grown into a reputed manufacturer and wholesaler of bright round bars and alloy steel bars. Every batch is produced using quality raw material and advanced technology that aligns with industry norms.
                  </p>
                  <p>
                    Our products are known for their reliable qualities - colorfastness, smooth texture, shrink and tear resistance, and a perfect finish - making them highly demanded in the market. With the help of a rich vendor base, we have emerged as an affluent supplier of bright round bars and alloy steel bars.
                    In order to attain complete client satisfaction, we procure inputs from trusted vendors across the industry.
                  </p>
                  <p>
                    To store the offered products safely, we maintain a well-furnished warehousing unit. Our advanced infrastructure covers procurement, manufacturing, quality control, R&D, sales and marketing, warehouse, and logistics - each supervised by experienced domain experts equipped with modern tools and machinery.
                  </p>
                  <p>
                    Quality remains central. We run a well-equipped testing unit where the offered products are stringently checked with the latest tools. Under the mentorship of Ratan Panjwani, and with a client-oriented approach, fair practices, competitive pricing, and timely delivery, we continue to grow our base of satisfied customers.
                  </p>
                  <div className="rounded-lg border bg-muted/50 p-4 text-sm text-foreground">
                    <p className="font-semibold mb-1">Address</p>
                    <p>SHRIRAM INDUSTRIES</p>
                    <p>E-66 MIDC SHIROLI</p>
                    <p>KOLHAPUR 416122</p>
                    <p className="mt-2 text-muted-foreground">GST: 27AAUPP7201Q1ZU | Phone: 9623004455</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="relative aspect-video bg-white rounded-lg border shadow-sm overflow-hidden">
                  <Image
                    src="/shriram-industries.jpeg"
                    alt="Shriram Industries logo"
                    fill
                    className="object-contain p-6"
                    sizes="(min-width: 1024px) 480px, 100vw"
                    priority
                  />
                </div>
                <p className="text-center text-muted-foreground text-sm">
                  Shriram Industries - trusted manufacturing partner since 1995
                </p>
              </div>
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
              <Card className="premium-card text-center">
                <CardHeader>
                  {/* TODO: Add actual leadership photos */}
                  <div className="w-24 h-24 bg-muted rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-12 w-12 text-muted-foreground" />
                  </div>
                  <CardTitle>Ratan Panjwani</CardTitle>
                  <CardDescription>Mentor & Leadership</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Guiding Shriram Steels & Shriram Industries with vision and expertise, driving growth
                    while maintaining our reputation for quality in the steel industry.
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
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MapPin className="mr-2 h-5 w-5" />
                    Our Location
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <h4 className="font-semibold">Shriram Steels & Shriram Industries</h4>
                    <p className="text-muted-foreground text-sm">
                      Plot No. E-66, Shriram Industries<br />
                      M.I.D.C., Shiroli<br />
                      Kolhapur - 416122<br />
                      Maharashtra, India
                    </p>
                  </div>
                  <div className="pt-2 text-xs text-muted-foreground">
                    <strong>GST Number:</strong> 27AAUPP7201Q1ZU
                  </div>
                </CardContent>
              </Card>

              <Card className="premium-card">
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
                      Phone: 9623004455
                    </p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm">Email</h4>
                    <p className="text-muted-foreground text-sm">
                      sales@shriramsteels.example
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
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-white/90 px-2 py-1 shadow-sm">
                    <Image
                      src="/shriram-steels.png"
                      alt="Shriram Steels"
                      width={120}
                      height={36}
                      className="h-9 w-auto"
                    />
                  </div>
                  <div className="rounded-md bg-white/90 px-2 py-1 shadow-sm">
                    <Image
                      src="/shriram-industries.jpeg"
                      alt="Shriram Industries"
                      width={120}
                      height={36}
                      className="h-9 w-auto"
                    />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Shriram Steels & Shriram Industries - leading steel manufacturers in Kolhapur, Maharashtra with quality products and competitive pricing.
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-4">Products</h4>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li><Link href="/products/black-bars">Black Bars</Link></li>
                  <li><Link href="/products/bright-round-bars">Bright Round Bars</Link></li>
                  <li><Link href="/products/alloy-steel">Alloy Steel</Link></li>
                  <li><Link href="/products/structural-steel">Structural Steel</Link></li>
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
              <p>&copy; 2024 Shriram Steels & Shriram Industries. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
