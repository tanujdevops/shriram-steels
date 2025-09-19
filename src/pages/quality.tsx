import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { Navbar } from '../../components/navbar';
import { Button } from '../../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/card';
import { Badge } from '../../components/ui/badge';
import { Separator } from '../../components/ui/separator';
import {
  Phone,
  Shield,
  FileCheck,
  Microscope,
  CheckCircle2,
  AlertTriangle,
  Award,
  Target,
  Users,
  ClipboardList,
  Factory,
  Download
} from 'lucide-react';

const whatsappNumber = '+919623004455';

export default function QualityPage() {
  const mtrRequestMessage = encodeURIComponent('Hello! I would like to request Material Test Reports (MTR) for your steel products. Could you please share the available documentation?');
  const qualityInquiryMessage = encodeURIComponent('Hi! I have questions about your quality control processes and certifications. Can we discuss your quality standards?');

  return (
    <>
      <Head>
        <title>Quality Assurance - MTR, Testing & Certifications | Shriram Steels</title>
        <meta name="description" content="Comprehensive quality control at Shriram Steels. Material Test Reports, chemical analysis, mechanical testing for all steel products. ISO standards compliance." />
        <meta name="keywords" content="steel quality control, Material Test Reports, MTR, steel testing, chemical analysis, mechanical testing, quality certification, ISO standards" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" type="image/png" sizes="32x32" href="/shriram-steels.png" />
      </Head>

      <div className="min-h-screen">
        <Navbar currentPage="/quality" />

        {/* Hero Section */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="outline" className="mb-4">
                <Shield className="mr-2 h-3 w-3" />
                Quality First Approach
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Quality Assurance & Testing
              </h1>
              <p className="text-xl text-muted-foreground">
                Comprehensive quality control processes ensuring every steel product meets 
                the highest industry standards with full traceability and documentation.
              </p>
            </div>
          </div>
        </section>

        {/* Quality Standards */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Quality Standards</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Rigorous testing and quality control measures at every stage of production 
                to ensure consistent, reliable steel products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="glass-card">
                <CardHeader className="text-center">
                  <FileCheck className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Material Test Reports</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    Complete Material Test Reports (MTR) provided with every batch, 
                    including chemical composition and mechanical properties analysis.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Chemical Analysis
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Mechanical Properties
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Dimensional Inspection
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="text-center">
                  <Microscope className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Laboratory Testing</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    In-house and third-party laboratory testing to verify product 
                    specifications and compliance with relevant standards.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Tensile Strength Testing
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Hardness Testing
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      Impact Testing
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="glass-card">
                <CardHeader className="text-center">
                  <Award className="h-12 w-12 mx-auto text-primary mb-4" />
                  <CardTitle>Standards Compliance</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    All products manufactured in compliance with relevant Indian Standards (IS), 
                    ASTM, and other international specifications.
                  </CardDescription>
                  <div className="mt-4 space-y-2">
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      IS Standards
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      ASTM Standards
                    </div>
                    <div className="flex items-center text-sm">
                      <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                      DIN Standards
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Quality Process */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Quality Control Process</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Multi-stage quality assurance process from raw material to finished products.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ClipboardList className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">1. Raw Material Inspection</h3>
                <p className="text-sm text-muted-foreground">
                  Incoming raw materials undergo thorough inspection and testing 
                  before processing begins.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Factory className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">2. Process Monitoring</h3>
                <p className="text-sm text-muted-foreground">
                  Continuous monitoring of manufacturing processes to maintain 
                  consistent quality throughout production.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Microscope className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">3. Product Testing</h3>
                <p className="text-sm text-muted-foreground">
                  Finished products undergo comprehensive testing for mechanical 
                  properties and dimensional accuracy.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileCheck className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">4. Documentation</h3>
                <p className="text-sm text-muted-foreground">
                  Complete documentation and certification provided with 
                  every shipment for full traceability.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testing Capabilities */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold mb-6">Testing Capabilities</h2>
                <div className="space-y-6">
                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Chemical Analysis</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Carbon content analysis
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Alloying element verification
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Trace element detection
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Spectrometer analysis
                        </li>
                      </ul>
                    </CardContent>
                  </Card>

                  <Card className="glass-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Mechanical Testing</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Tensile strength testing
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Yield strength measurement
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Elongation testing
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Hardness testing (HB, HRC, HV)
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-bold mb-6">Quality Certifications</h2>
                <div className="space-y-4">
                  <Card className="premium-card">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        <Award className="mr-2 h-5 w-5 text-primary" />
                        Industry Certifications
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3">
                      <div>
                        <p className="font-medium">Material Test Reports (MTR)</p>
                        <p className="text-sm text-muted-foreground">
                          Comprehensive test certificates for all products
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-medium">Quality Management System</p>
                        <p className="text-sm text-muted-foreground">
                          Structured quality processes and documentation
                          <br />
                          <span className="text-red-500">TODO: Verify ISO certification status</span>
                        </p>
                      </div>
                      <Separator />
                      <div>
                        <p className="font-medium">Third-Party Testing</p>
                        <p className="text-sm text-muted-foreground">
                          Independent laboratory verification available
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="premium-card">
                    <CardHeader>
                      <CardTitle className="text-lg">Traceability</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-3">
                        Complete batch traceability from raw material to finished product:
                      </p>
                      <ul className="space-y-1 text-sm">
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Raw material source tracking
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Production batch records
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Quality test documentation
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Shipment tracking records
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Material Test Reports */}
        <section className="py-16 bg-muted/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Material Test Reports (MTR)</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Detailed test certificates provided with every shipment for complete quality assurance.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="premium-card">
                <CardHeader>
                  <CardTitle className="text-xl text-center">MTR Contents</CardTitle>
                  <CardDescription className="text-center">
                    Each Material Test Report includes comprehensive testing data
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-semibold mb-3">Chemical Analysis</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Carbon (C) content
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Silicon (Si) content
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Manganese (Mn) content
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Phosphorus (P) & Sulfur (S)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Alloying elements (as applicable)
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold mb-3">Mechanical Properties</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Tensile strength (MPa)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Yield strength (MPa)
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Elongation percentage
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Hardness values
                        </li>
                        <li className="flex items-center">
                          <CheckCircle2 className="h-4 w-4 text-green-600 mr-2" />
                          Impact resistance (if applicable)
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-6 border-t text-center">
                    <p className="text-sm text-muted-foreground mb-4">
                      <AlertTriangle className="h-4 w-4 inline mr-1 text-amber-500" />
                      All test reports are non-binding and provided for reference purposes only.
                      Specific application suitability should be verified by the customer.
                    </p>
                    <Button asChild>
                      <a href={`https://wa.me/${whatsappNumber}?text=${mtrRequestMessage}`} target="_blank" rel="noopener noreferrer">
                        <Download className="mr-2 h-4 w-4" />
                        Request MTR Samples
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Questions About Our Quality Standards?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Our quality team is ready to discuss your specific requirements and 
              provide detailed information about our testing and certification processes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href={`https://wa.me/${whatsappNumber}?text=${qualityInquiryMessage}`} target="_blank" rel="noopener noreferrer">
                  <Phone className="mr-2 h-4 w-4" />
                  Discuss Quality Requirements
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href={`https://wa.me/${whatsappNumber}?text=${mtrRequestMessage}`} target="_blank" rel="noopener noreferrer">
                  <FileCheck className="mr-2 h-4 w-4" />
                  Request MTR Documentation
                </a>
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