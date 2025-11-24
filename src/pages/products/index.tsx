import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { GetStaticProps } from 'next';
import { Navbar } from '../../../components/navbar';
import { Button } from '../../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../../components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../../components/ui/select';
import { Badge } from '../../../components/ui/badge';
import { ArrowRight, Phone, MapPin, Mail, Package } from 'lucide-react';

const whatsappNumber = '+919623004455';

interface Product {
  slug: string;
  name: string;
  short_description: string;
  meta_description: string;
  grades: string[];
  sizes: string[];
  features: string[];
  images: string[];
  availability: string;
  min_order_qty: string;
  price: string;
}

interface ProductsPageProps {
  products: Product[];
  allGrades: string[];
}

export default function ProductsPage({ products, allGrades }: ProductsPageProps) {
  const [selectedGrade, setSelectedGrade] = useState<string>('all');
  
  const filteredProducts = selectedGrade === 'all' 
    ? products 
    : products.filter(product => product.grades.includes(selectedGrade));

  const getQuoteMessage = (productName: string) => 
    encodeURIComponent(`Hello! I would like to get a quote for ${productName}. Please share current rates and availability.`);

  return (
    <>
      <Head>
        <title>Steel Products - Bars, Rods & Alloy Steel | Shriram Steels Kolhapur</title>
        <meta name="description" content="Browse our complete range of steel products: black bars, bright bars, alloy steel rods, and structural steel sections. EN8, EN19, SS304, SS316, IS 2062 grades in stock. Get instant quotes." />
        <meta name="keywords" content="steel products, black bars, bright bars, alloy steel, structural steel, EN8, EN19, SS304, SS316, IS 2062, steel rods, Kolhapur" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
      </Head>

      <div className="min-h-screen">
        <Navbar currentPage="/products" />

        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">
                Our Product Range
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Comprehensive selection of steel bars and rods for diverse industrial applications. 
                All products available with Material Test Reports.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Section */}
        <section className="py-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <span className="text-sm font-medium">Filter by Grade:</span>
                <Select value={selectedGrade} onValueChange={setSelectedGrade}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="Select grade" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Grades</SelectItem>
                    {allGrades.map((grade) => (
                      <SelectItem key={grade} value={grade}>
                        {grade}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <Badge variant="secondary">
                {filteredProducts.length} Products Available
              </Badge>
            </div>

            {/* Products Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.map((product) => (
                <Card key={product.slug} className="glass-card overflow-hidden">
                  {/* Product Image */}
                  <div className="aspect-[4/3] bg-muted relative overflow-hidden">
                    {product.images && product.images.length > 0 ? (
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <Package className="h-12 w-12 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <CardTitle className="text-xl">{product.name}</CardTitle>
                      <Badge
                        variant={product.availability === 'In Stock' ? 'default' : 'secondary'}
                      >
                        {product.availability}
                      </Badge>
                    </div>
                    <CardDescription className="text-base">
                      {product.short_description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {/* Grades */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Available Grades:</h4>
                      <div className="flex flex-wrap gap-1">
                        {product.grades.slice(0, 4).map((grade) => (
                          <Badge key={grade} variant="outline" className="text-xs">
                            {grade}
                          </Badge>
                        ))}
                        {product.grades.length > 4 && (
                          <Badge variant="outline" className="text-xs">
                            +{product.grades.length - 4} more
                          </Badge>
                        )}
                      </div>
                    </div>

                    {/* Key Features */}
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Features:</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        {product.features.slice(0, 2).map((feature, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Order Info */}
                    <div className="pt-2 border-t">
                      <div className="flex justify-between items-center text-sm mb-3">
                        <span className="text-muted-foreground">Min Order:</span>
                        <span className="font-medium">{product.min_order_qty}</span>
                      </div>
                      <div className="flex justify-between items-center text-sm mb-4">
                        <span className="text-muted-foreground">Price:</span>
                        <span className="font-medium text-primary">{product.price}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col gap-2">
                      <Button asChild className="w-full">
                        <Link href={`/products/${product.slug}`}>
                          View Details
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        className="w-full" 
                        asChild
                      >
                        <a 
                          href={`https://wa.me/${whatsappNumber}?text=${getQuoteMessage(product.name)}`}
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          <Phone className="mr-2 h-4 w-4" />
                          Get Quote
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Need Custom Specifications?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              We can provide custom sizes, grades, and specifications for your specific requirements. 
              Contact us to discuss your project needs.
            </p>
            <Button size="lg" asChild>
              <a 
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hi! I need custom steel specifications for my project. Can we discuss the requirements?')}`}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Phone className="mr-2 h-4 w-4" />
                Discuss Custom Requirements
              </a>
            </Button>
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
              <p>&copy; 2024 Shriram Steels. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  // Import all product JSON files
  const blackBars = require('../../data/products/black-bars.json');
  const brightFlatBars = require('../../data/products/bright-flat-bars.json');
  const brightHexBars = require('../../data/products/bright-hex-bars.json');
  const brightRoundBars = require('../../data/products/bright-round-bars.json');
  const brightSquareBars = require('../../data/products/bright-square-bars.json');
  const alloySteel = require('../../data/products/alloy-steel.json');
  const structuralSteel = require('../../data/products/structural-steel.json');

  const products = [
    blackBars,
    brightFlatBars,
    brightHexBars,
    brightRoundBars,
    brightSquareBars,
    alloySteel,
    structuralSteel
  ];

  // Extract all unique grades for filtering
  const allGrades = Array.from(
    new Set(products.flatMap(product => product.grades))
  ).sort();

  return {
    props: {
      products,
      allGrades
    }
  };
};
