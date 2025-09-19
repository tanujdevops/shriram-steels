import { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps, GetStaticPaths } from 'next';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Badge } from '../../../components/ui/badge';
import { Separator } from '../../../components/ui/separator';
import { Input } from '../../../components/ui/input';
import { Label } from '../../../components/ui/label';
import { Textarea } from '../../../components/ui/textarea';
import { Navbar } from '../../../components/navbar';
import {
  Phone,
  Download,
  CheckCircle,
  Package,
  Truck,
  Shield,
  ArrowLeft,
  FileText,
  MessageCircle
} from 'lucide-react';

const whatsappNumber = '+919623004455';

interface Product {
  slug: string;
  name: string;
  short_description: string;
  meta_description: string;
  grades: string[];
  sizes: string[];
  features: string[];
  specifications: {
    material: string;
    surface: string;
    tolerance: string;
    certification: string;
  };
  applications: string[];
  spec_pdf: string;
  images: string[];
  availability: string;
  min_order_qty: string;
  price: string;
}

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    quantity: '',
    grade: '',
    specifications: ''
  });

  // Keyboard navigation for image gallery
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (product.images.length <= 1) return;

      if (event.key === 'ArrowLeft') {
        setSelectedImageIndex(prev => prev > 0 ? prev - 1 : product.images.length - 1);
      } else if (event.key === 'ArrowRight') {
        setSelectedImageIndex(prev => prev < product.images.length - 1 ? prev + 1 : 0);
      } else if (event.key === 'Escape' && isLightboxOpen) {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [product.images.length, isLightboxOpen]);

  const nextImage = () => {
    setSelectedImageIndex(prev => prev < product.images.length - 1 ? prev + 1 : 0);
  };

  const prevImage = () => {
    setSelectedImageIndex(prev => prev > 0 ? prev - 1 : product.images.length - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleGradeSelect = (grade: string) => {
    setFormData({
      ...formData,
      grade: grade
    });
  };

  const handleQuoteSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const message = `Hello! I would like a quote for ${product.name}.

Details:
- Name: ${formData.name}
- Company: ${formData.company}
- Phone: ${formData.phone}
- Email: ${formData.email}
- Quantity Required: ${formData.quantity}
- Grade Required: ${formData.grade}
- Specifications: ${formData.specifications}

Please share your current rates and availability. Thank you!`;

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank', 'noopener,noreferrer');
  };

  const downloadSpecMessage = encodeURIComponent(
    `Hi! I would like to download the technical specifications for ${product.name}. Could you please share the detailed spec sheet?`
  );

  return (
    <>
      <Head>
        <title>{product.name} - {product.meta_description.split('.')[0]} | Shriram Steels</title>
        <meta name="description" content={product.meta_description} />
        <meta name="keywords" content={`${product.name.toLowerCase()}, ${product.grades.join(', ')}, steel bars, Shriram Steels, Kolhapur`} />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${product.name} - Premium Steel Products | Shriram Steels`} />
        <meta property="og:description" content={product.meta_description} />
        <meta property="og:type" content="product" />
        <meta property="og:image" content={`https://shriramsteels.com${product.images[0]}`} />
        
        {/* Product Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org/",
              "@type": "Product",
              "name": product.name,
              "description": product.short_description,
              "brand": {
                "@type": "Brand",
                "name": "Shriram Steels"
              },
              "manufacturer": {
                "@type": "Organization",
                "name": "Shriram Steels",
                "address": {
                  "@type": "PostalAddress",
                  "streetAddress": "Plot No. E-66, Shriram Industries, M.I.D.C., Shiroli",
                  "addressLocality": "Kolhapur",
                  "addressRegion": "Maharashtra",
                  "postalCode": "416122",
                  "addressCountry": "IN"
                }
              },
              "offers": {
                "@type": "Offer",
                "price": "Request Quote",
                "priceCurrency": "INR",
                "availability": product.availability === 'In Stock' ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
              },
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "Material",
                  "value": product.specifications.material
                },
                {
                  "@type": "PropertyValue", 
                  "name": "Surface Finish",
                  "value": product.specifications.surface
                },
                {
                  "@type": "PropertyValue",
                  "name": "Minimum Order Quantity",
                  "value": product.min_order_qty
                }
              ]
            })
          }}
        />
      </Head>

      <div className="min-h-screen">
        <Navbar currentPage="/products" />

        {/* Breadcrumb */}
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-primary">Products</Link>
            <span>/</span>
            <span className="text-foreground">{product.name}</span>
          </nav>
        </div>

        {/* Product Detail */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Product Images */}
              <div className="space-y-4">
                {product.images.length > 0 ? (
                  <>
                    {/* Main Product Image */}
                    <div
                      className="aspect-square bg-muted rounded-lg overflow-hidden relative group cursor-zoom-in"
                      onClick={() => setIsLightboxOpen(true)}
                    >
                      <Image
                        src={product.images[selectedImageIndex]}
                        alt={product.name}
                        width={600}
                        height={600}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                        priority
                      />
                      {/* Image counter overlay */}
                      {product.images.length > 1 && (
                        <div className="absolute top-4 right-4 bg-black/60 text-white px-2 py-1 rounded-full text-sm backdrop-blur-sm">
                          {selectedImageIndex + 1} / {product.images.length}
                        </div>
                      )}
                      {/* Navigation arrows for large screens */}
                      {product.images.length > 1 && (
                        <>
                          <button
                            onClick={prevImage}
                            className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                            aria-label="Previous image"
                          >
                            ←
                          </button>
                          <button
                            onClick={nextImage}
                            className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110"
                            aria-label="Next image"
                          >
                            →
                          </button>
                        </>
                      )}
                    </div>
                    {/* Image Thumbnails */}
                    {product.images.length > 1 && (
                      <div className="grid grid-cols-4 gap-2">
                        {product.images.map((image, index) => (
                          <div
                            key={index}
                            className={`aspect-square bg-muted/50 rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                              selectedImageIndex === index
                                ? 'ring-2 ring-primary ring-offset-2 scale-105'
                                : 'hover:ring-2 hover:ring-primary/50 hover:scale-102'
                            }`}
                            onClick={() => setSelectedImageIndex(index)}
                          >
                            <Image
                              src={image}
                              alt={`${product.name} - View ${index + 1}`}
                              width={150}
                              height={150}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Package className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
                      <p className="text-muted-foreground">Product Image</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        No images available
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <h1 className="text-3xl font-bold">{product.name}</h1>
                    <Badge variant={product.availability === 'In Stock' ? 'default' : 'secondary'}>
                      {product.availability}
                    </Badge>
                  </div>
                  <p className="text-lg text-muted-foreground">
                    {product.short_description}
                  </p>
                </div>

                {/* Grades */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Available Grades</h3>
                  <div className="flex flex-wrap gap-2">
                    {product.grades.map((grade) => (
                      <Badge key={grade} variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">
                        {grade}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-3">Key Features</h3>
                  <ul className="space-y-2">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Order Info */}
                <div className="bg-muted/50 rounded-lg p-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Minimum Order:</span>
                      <p className="font-medium">{product.min_order_qty}</p>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Price:</span>
                      <p className="font-medium text-primary">{product.price}</p>
                    </div>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col gap-3">
                  <Button size="lg" className="w-full" asChild>
                    <a href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`I want a quote for ${product.name}`)}`} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Get Instant Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="w-full" asChild>
                    <a href={`https://wa.me/${whatsappNumber}?text=${downloadSpecMessage}`} target="_blank" rel="noopener noreferrer">
                      <Download className="mr-2 h-4 w-4" />
                      Download Specs
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Product Details Tabs */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Specifications */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="mr-2 h-5 w-5" />
                    Specifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Material:</span>
                    <span className="font-medium">{product.specifications.material}</span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Surface:</span>
                    <span className="font-medium">{product.specifications.surface}</span>
                  </div>
                  <Separator />
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <span className="text-muted-foreground">Tolerance:</span>
                    <span className="font-medium">{product.specifications.tolerance}</span>
                  </div>
                  <Separator />
                  <div className="text-sm">
                    <span className="text-muted-foreground">Certification:</span>
                    <p className="font-medium mt-1">{product.specifications.certification}</p>
                  </div>
                </CardContent>
              </Card>

              {/* Applications */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Shield className="mr-2 h-5 w-5" />
                    Applications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.applications.map((application, index) => (
                      <li key={index} className="flex items-center text-sm">
                        <span className="w-2 h-2 bg-primary rounded-full mr-2 flex-shrink-0"></span>
                        {application}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Available Sizes */}
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Package className="mr-2 h-5 w-5" />
                    Standard Sizes
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {product.sizes.map((size, index) => (
                      <div key={index} className="text-sm font-medium bg-muted/50 p-2 rounded">
                        {size}
                      </div>
                    ))}
                  </div>
                  <p className="text-xs text-muted-foreground mt-3">
                    Custom sizes available on request
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card className="premium-card">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Get Detailed Quote</CardTitle>
                  <CardDescription>
                    Fill out the form below and we&apos;ll connect you via WhatsApp with a personalized quote
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleQuoteSubmit} className="space-y-4">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="mt-1"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="quantity">Quantity Required *</Label>
                        <Input
                          id="quantity"
                          name="quantity"
                          value={formData.quantity}
                          onChange={handleInputChange}
                          required
                          placeholder="e.g., 2 MT, 500 KG"
                          className="mt-1"
                        />
                      </div>
                      <div>
                        <Label htmlFor="grade">Preferred Grade</Label>
                        <div className="mt-1 flex flex-wrap gap-1">
                          {product.grades.slice(0, 3).map((grade) => (
                            <Badge
                              key={grade}
                              variant={formData.grade === grade ? 'default' : 'outline'}
                              className="cursor-pointer"
                              onClick={() => handleGradeSelect(grade)}
                            >
                              {grade}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="specifications">Additional Specifications</Label>
                      <Textarea
                        id="specifications"
                        name="specifications"
                        value={formData.specifications}
                        onChange={handleInputChange}
                        placeholder="Any specific requirements, sizes, or technical specifications..."
                        className="mt-1"
                        rows={3}
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <MessageCircle className="mr-2 h-4 w-4" />
                      Send Quote Request via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-center mb-8">Related Products</h2>
            <div className="text-center">
              <Button asChild variant="outline">
                <Link href="/products">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  View All Products
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

        {/* Lightbox Modal */}
        {isLightboxOpen && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
            onClick={() => setIsLightboxOpen(false)}
          >
            <div className="relative max-w-7xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
              {/* Close button */}
              <button
                onClick={() => setIsLightboxOpen(false)}
                className="absolute -top-12 right-4 text-white hover:text-gray-300 text-2xl z-10"
                aria-label="Close lightbox"
              >
                ✕
              </button>

              {/* Main lightbox image */}
              <div className="relative">
                <Image
                  src={product.images[selectedImageIndex]}
                  alt={product.name}
                  width={1200}
                  height={1200}
                  className="max-w-full max-h-[90vh] object-contain rounded-lg"
                  priority
                />

                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Previous image"
                    >
                      ←
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/60 hover:bg-black/80 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label="Next image"
                    >
                      →
                    </button>
                  </>
                )}

                {/* Image counter */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full text-sm backdrop-blur-sm">
                    {selectedImageIndex + 1} / {product.images.length}
                  </div>
                )}
              </div>

              {/* Thumbnail navigation */}
              {product.images.length > 1 && (
                <div className="flex justify-center mt-4 space-x-2 max-w-full overflow-x-auto pb-2">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                        selectedImageIndex === index
                          ? 'border-white scale-110'
                          : 'border-transparent hover:border-gray-300 hover:scale-105'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${product.name} - View ${index + 1}`}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Instructions overlay */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 text-sm text-center">
              <p>Use arrow keys to navigate • Click outside to close • Press ESC to exit</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const productSlugs = [
    'black-bars',
    'bright-flat-bars',
    'bright-hex-bars',
    'bright-round-bars',
    'bright-square-bars',
    'alloy-steel'
  ];

  const paths = productSlugs.map((slug) => ({
    params: { slug }
  }));

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string;
  
  try {
    const product = require(`../../data/products/${slug}.json`);
    
    return {
      props: {
        product
      }
    };
  } catch (error) {
    return {
      notFound: true
    };
  }
};