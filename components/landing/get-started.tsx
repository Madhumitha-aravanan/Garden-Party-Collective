"use client"

import React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Mail, FileText, MessageSquare, CheckCircle2, Loader2 } from "lucide-react"

type FormStatus = "idle" | "loading" | "success" | "error"

export function GetStarted() {
  const [newsletterEmail, setNewsletterEmail] = useState("")
  const [newsletterStatus, setNewsletterStatus] = useState<FormStatus>("idle")

  const [brochureName, setBrochureName] = useState("")
  const [brochureEmail, setBrochureEmail] = useState("")
  const [brochureStatus, setBrochureStatus] = useState<FormStatus>("idle")

  const [quoteName, setQuoteName] = useState("")
  const [quoteEmail, setQuoteEmail] = useState("")
  const [quotePhone, setQuotePhone] = useState("")
  const [quoteAddress, setQuoteAddress] = useState("")
  const [quoteMessage, setQuoteMessage] = useState("")
  const [quoteStatus, setQuoteStatus] = useState<FormStatus>("idle")

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setNewsletterStatus("loading")
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: newsletterEmail })
      })
      if (!res.ok) throw new Error("Failed to subscribe")
      setNewsletterStatus("success")
      setNewsletterEmail("")
    } catch {
      setNewsletterStatus("error")
    }
  }

  const handleBrochureSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setBrochureStatus("loading")
    try {
      const res = await fetch("/api/brochure", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: brochureName, email: brochureEmail })
      })
      if (!res.ok) throw new Error("Failed to request brochure")
      setBrochureStatus("success")
      setBrochureName("")
      setBrochureEmail("")
    } catch {
      setBrochureStatus("error")
    }
  }

  const handleQuoteSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setQuoteStatus("loading")
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: quoteName,
          email: quoteEmail,
          phone: quotePhone,
          address: quoteAddress,
          message: quoteMessage
        })
      })
      if (!res.ok) throw new Error("Failed to submit quote")
      setQuoteStatus("success")
      setQuoteName("")
      setQuoteEmail("")
      setQuotePhone("")
      setQuoteAddress("")
      setQuoteMessage("")
    } catch {
      setQuoteStatus("error")
    }
  }

  return (
    <section id="get-started" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold text-sm uppercase tracking-wider">Get Started</span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-4 mb-4 text-balance">
            Ready to Go Wild?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Whether you&apos;re just curious or ready to transform your yard, we&apos;ve got options.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Tabs defaultValue="quote" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="newsletter" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span className="hidden sm:inline">Newsletter</span>
              </TabsTrigger>
              <TabsTrigger value="brochure" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Brochure</span>
              </TabsTrigger>
              <TabsTrigger value="quote" className="flex items-center gap-2">
                <MessageSquare className="w-4 h-4" />
                <span className="hidden sm:inline">Quote</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="newsletter">
              <Card>
                <CardHeader>
                  <CardTitle>Join the Newsletter</CardTitle>
                  <CardDescription>
                    Monthly tips on native gardening, Detroit ecology updates, and seasonal plant spotlights.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {newsletterStatus === "success" ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">You&apos;re on the list!</h3>
                      <p className="text-muted-foreground">Welcome to the Grit & Green community.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="newsletter-email">Email</Label>
                        <Input
                          id="newsletter-email"
                          type="email"
                          placeholder="you@example.com"
                          value={newsletterEmail}
                          onChange={(e) => setNewsletterEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={newsletterStatus === "loading"}
                      >
                        {newsletterStatus === "loading" ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Subscribing...</>
                        ) : (
                          "Subscribe"
                        )}
                      </Button>
                      {newsletterStatus === "error" && (
                        <p className="text-destructive text-sm text-center">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="brochure">
              <Card>
                <CardHeader>
                  <CardTitle>Get the Brochure</CardTitle>
                  <CardDescription>
                    A one-time download with everything you need to know about native landscaping in Detroit.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {brochureStatus === "success" ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">Check your inbox!</h3>
                      <p className="text-muted-foreground">Your brochure is on its way.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleBrochureSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="brochure-name">Name</Label>
                        <Input
                          id="brochure-name"
                          type="text"
                          placeholder="Your name"
                          value={brochureName}
                          onChange={(e) => setBrochureName(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="brochure-email">Email</Label>
                        <Input
                          id="brochure-email"
                          type="email"
                          placeholder="you@example.com"
                          value={brochureEmail}
                          onChange={(e) => setBrochureEmail(e.target.value)}
                          required
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-secondary hover:bg-secondary/90"
                        disabled={brochureStatus === "loading"}
                      >
                        {brochureStatus === "loading" ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Sending...</>
                        ) : (
                          "Send Me the Brochure"
                        )}
                      </Button>
                      {brochureStatus === "error" && (
                        <p className="text-destructive text-sm text-center">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="quote">
              <Card>
                <CardHeader>
                  <CardTitle>Request a Free Quote</CardTitle>
                  <CardDescription>
                    Tell us about your space and we&apos;ll get back to you with ideas and pricing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {quoteStatus === "success" ? (
                    <div className="flex flex-col items-center py-8 text-center">
                      <CheckCircle2 className="w-12 h-12 text-primary mb-4" />
                      <h3 className="font-bold text-lg mb-2">Quote requested!</h3>
                      <p className="text-muted-foreground">We&apos;ll be in touch within 2 business days.</p>
                    </div>
                  ) : (
                    <form onSubmit={handleQuoteSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="quote-name">Name</Label>
                          <Input
                            id="quote-name"
                            type="text"
                            placeholder="Your name"
                            value={quoteName}
                            onChange={(e) => setQuoteName(e.target.value)}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="quote-phone">Phone</Label>
                          <Input
                            id="quote-phone"
                            type="tel"
                            placeholder="(313) 555-1234"
                            value={quotePhone}
                            onChange={(e) => setQuotePhone(e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-email">Email</Label>
                        <Input
                          id="quote-email"
                          type="email"
                          placeholder="you@example.com"
                          value={quoteEmail}
                          onChange={(e) => setQuoteEmail(e.target.value)}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-address">Property Address</Label>
                        <Input
                          id="quote-address"
                          type="text"
                          placeholder="123 Main St, Detroit, MI"
                          value={quoteAddress}
                          onChange={(e) => setQuoteAddress(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="quote-message">Tell us about your yard</Label>
                        <Textarea
                          id="quote-message"
                          placeholder="Size, current state, what you're dreaming of..."
                          value={quoteMessage}
                          onChange={(e) => setQuoteMessage(e.target.value)}
                          rows={4}
                        />
                      </div>
                      <Button 
                        type="submit" 
                        className="w-full bg-primary hover:bg-primary/90"
                        disabled={quoteStatus === "loading"}
                      >
                        {quoteStatus === "loading" ? (
                          <><Loader2 className="w-4 h-4 mr-2 animate-spin" /> Submitting...</>
                        ) : (
                          "Request My Free Quote"
                        )}
                      </Button>
                      {quoteStatus === "error" && (
                        <p className="text-destructive text-sm text-center">Something went wrong. Please try again.</p>
                      )}
                    </form>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  )
}
