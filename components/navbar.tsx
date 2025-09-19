'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from './ui/button';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from './ui/sheet';
import { Menu, Phone } from 'lucide-react';

const whatsappNumber = '+919623004455';

interface NavbarProps {
  currentPage?: string;
}

export function Navbar({ currentPage }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const whatsappQuoteLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Hello! I found your website and would like to get a quote for steel products. Please share your current rates and availability.')}`;

  const navigationItems = [
    { href: '/products', label: 'Products' },
    { href: '/about', label: 'About' },
    { href: '/quality', label: 'Quality' },
    { href: '/resources', label: 'Resources' },
  ];

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/shriram-steels.png"
            alt="Shriram Steels"
            width={100}
            height={30}
            className="h-8 w-auto"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <nav className="flex space-x-6">
            {navigationItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  currentPage === item.href ? 'text-primary' : ''
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Button size="sm" asChild>
            <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
              <Phone className="mr-2 h-4 w-4" />
              Get Quote
            </a>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="sm" className="p-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <SheetHeader className="border-b pb-4 mb-6">
                <div className="flex items-center space-x-3">
                  <Image
                    src="/shriram-steels.png"
                    alt="Shriram Steels"
                    width={100}
                    height={30}
                    className="h-6 w-auto"
                  />
                </div>
                <SheetTitle className="text-left text-lg font-semibold">
                  Navigation
                </SheetTitle>
              </SheetHeader>

              <div className="flex flex-col space-y-3">
                {navigationItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-left p-3 rounded-lg transition-colors hover:bg-muted ${
                      currentPage === item.href ? 'bg-primary/10 text-primary font-medium' : ''
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}

                <div className="pt-4 border-t">
                  <Button asChild className="w-full">
                    <a href={whatsappQuoteLink} target="_blank" rel="noopener noreferrer">
                      <Phone className="mr-2 h-4 w-4" />
                      Get Quote
                    </a>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}