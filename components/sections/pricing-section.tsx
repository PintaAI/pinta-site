"use client"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

export function PricingSection() {
  const handleWhatsAppClick = (plan: string, price: string) => {
    const message = encodeURIComponent(`Halo, saya tertarik dengan paket ${plan} (${price}) untuk pembuatan website.`)
    window.open(`https://wa.me/6285728212056?text=${message}`, '_blank')
  }

  return (
    <div className="mt-32 mb-10 w-full max-w-5xl mx-auto">
      <h2 className="text-2xl font-semibold text-center mb-8">Pilih Paket Website Sesuai Kebutuhan Mu</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="bg-background/80 backdrop-blur-sm border-primary/20 h-full">
          <div className="flex flex-col h-full">
            <CardHeader className="pb-0">
              <h3 className="text-lg font-semibold text-primary">Basic</h3>
              <div className="text-3xl font-bold mt-2">Rp 99K</div>
              <p className="text-sm text-muted-foreground mt-1">Perfect untuk personal branding</p>
              <p className="text-xs text-primary mt-1">⚡ Delivery 1 Hari</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Landing Page Simple</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">1-3 Sections</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Responsive Design</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">1x Revisi</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6"
                onClick={() => handleWhatsAppClick("Basic", "Rp 99K")}
              >
                Pilih Paket
              </Button>
            </CardContent>
          </div>
        </Card>

        <Card className="bg-background/80 backdrop-blur-sm border-2 border-primary relative h-full">
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-3 py-1 rounded-full text-sm">
            Popular
          </div>
          <div className="flex flex-col h-full">
            <CardHeader className="pb-0">
              <h3 className="text-lg font-semibold text-primary">Standard</h3>
              <div className="text-3xl font-bold mt-2">Rp 250K</div>
              <p className="text-sm text-muted-foreground mt-1">Ideal untuk UMKM</p>
              <p className="text-xs text-primary mt-1">⚡ Delivery 2 Hari</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Multi Page Website</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Admin Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Content Management</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">3x Revisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">SEO Basic</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6"
                onClick={() => handleWhatsAppClick("Standard", "Rp 250K")}
              >
                Pilih Paket
              </Button>
            </CardContent>
          </div>
        </Card>

        <Card className="bg-background/80 backdrop-blur-sm border-primary/20 h-full">
          <div className="flex flex-col h-full">
            <CardHeader className="pb-0">
              <h3 className="text-lg font-semibold text-primary">Custom</h3>
              <div className="flex items-baseline gap-2">
                <div className="text-3xl font-bold mt-2">Rp 499K</div>
                <span className="text-xs text-muted-foreground">start from *</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">Untuk kebutuhan kompleks</p>
              <p className="text-xs text-primary mt-1">⏱️ Delivery Negotiable</p>
            </CardHeader>
            <CardContent className="flex flex-col flex-grow">
              <div className="space-y-2 flex-grow">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Custom Features</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">E-commerce Integration</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Advanced Admin Panel</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Unlimited Revisi</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">SEO Advanced</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-primary" />
                  <span className="text-sm">Priority Support</span>
                </div>
              </div>
              <Button 
                className="w-full mt-6"
                onClick={() => handleWhatsAppClick("Custom", "Rp 499K (start from)")}
              >
                Pilih Paket
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
    </div>
  )
}
