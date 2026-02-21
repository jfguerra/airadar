import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Copy, Check, Palette, Type, Ruler, Grid3x3 } from "lucide-react"
import { useState } from "react"

export default function StyleGuide() {
  const [copiedColor, setCopiedColor] = useState<string | null>(null)

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedColor(text)
      setTimeout(() => setCopiedColor(null), 2000)
    })
  }

  const brandColors = [
    { name: "UC Blue Primary", value: "#005FFF", usage: "Primary brand color, CTAs, key interactions" },
    { name: "UC Blue Dark", value: "#0047CC", usage: "Hover states, emphasis" },
    { name: "UC Blue Light", value: "#4D8FFF", usage: "Gradients, highlights, accents" },
    { name: "UC Blue Lighter", value: "#E6F0FF", usage: "Backgrounds, subtle highlights" },
    { name: "UC Blue Subtle", value: "#F5F9FF", usage: "Page backgrounds, containers" },
  ]

  const neutralColors = [
    { name: "Black", value: "#0a0a0a", usage: "Primary text, headings" },
    { name: "Gray 600", value: "#666666", usage: "Secondary text, descriptions" },
    { name: "Gray 200", value: "#e5e5e5", usage: "Borders, dividers, separators" },
    { name: "White", value: "#ffffff", usage: "Cards, panels, elevated surfaces" },
  ]

  const accentColors = [
    { name: "Success Green", value: "#00D68F", usage: "Success states, active badges" },
    { name: "Accent Purple", value: "#6B4FFF", usage: "Premium features, gradients" },
    { name: "Accent Orange", value: "#FF6B35", usage: "Warnings, important actions" },
  ]

  const typeScale = [
    { name: "Hero Display", size: "72px", weight: "800 (Extra Bold)", letterSpacing: "-2px" },
    { name: "Section Headline", size: "52px", weight: "800 (Extra Bold)", letterSpacing: "-1.5px" },
    { name: "Subsection Title", size: "28px", weight: "700 (Bold)", letterSpacing: "normal" },
    { name: "Body Text Large", size: "18px", weight: "600 (Semi-bold)", letterSpacing: "normal" },
    { name: "Body Text Medium", size: "15px", weight: "600 (Semi-bold)", letterSpacing: "normal" },
    { name: "Body Text Regular", size: "14px", weight: "400 (Regular)", letterSpacing: "normal" },
  ]

  const spacing = [
    { name: "XS", value: "8px" },
    { name: "SM", value: "12px" },
    { name: "MD", value: "16px" },
    { name: "LG", value: "20px" },
    { name: "XL", value: "24px" },
    { name: "2XL", value: "32px" },
    { name: "3XL", value: "40px" },
    { name: "4XL", value: "48px" },
  ]

  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-blue-600 to-blue-400 p-8 text-white">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
            <div className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
            Version 1.0 Live
          </div>
          <h1 className="mb-3 text-5xl font-bold tracking-tight">Design System</h1>
          <p className="max-w-2xl text-lg text-blue-50">
            Build trust at first sight. A comprehensive design language for creating consistent,
            accessible, and beautiful user experiences.
          </p>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-4xl font-bold">14</CardTitle>
            <CardDescription>Color Tokens</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-4xl font-bold">6</CardTitle>
            <CardDescription>Type Styles</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-4xl font-bold">8</CardTitle>
            <CardDescription>Spacing Scale</CardDescription>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-4xl font-bold">∞</CardTitle>
            <CardDescription>Possibilities</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Main Content Tabs */}
      <Tabs defaultValue="colors" className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="colors" className="gap-2">
            <Palette className="h-4 w-4" />
            Colors
          </TabsTrigger>
          <TabsTrigger value="typography" className="gap-2">
            <Type className="h-4 w-4" />
            Typography
          </TabsTrigger>
          <TabsTrigger value="spacing" className="gap-2">
            <Ruler className="h-4 w-4" />
            Spacing
          </TabsTrigger>
          <TabsTrigger value="components" className="gap-2">
            <Grid3x3 className="h-4 w-4" />
            Components
          </TabsTrigger>
        </TabsList>

        {/* Colors Tab */}
        <TabsContent value="colors" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Color Palette</CardTitle>
              <CardDescription>
                Our color system is designed to convey trust, professionalism, and clarity.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {/* Brand Colors */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Usercentrics Blue</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {brandColors.map((color) => (
                    <Card
                      key={color.value}
                      className="cursor-pointer transition-all hover:shadow-lg"
                      onClick={() => copyToClipboard(color.value)}
                    >
                      <CardContent className="p-0">
                        <div
                          className="h-32 w-full rounded-t-lg"
                          style={{ backgroundColor: color.value }}
                        />
                        <div className="p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="font-semibold">{color.name}</h4>
                            {copiedColor === color.value ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          <code className="mb-2 block rounded bg-gray-100 px-2 py-1 text-sm font-mono">
                            {color.value}
                          </code>
                          <p className="text-sm text-muted-foreground">{color.usage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Neutral Colors */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Neutral Colors</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  {neutralColors.map((color) => (
                    <Card
                      key={color.value}
                      className="cursor-pointer transition-all hover:shadow-lg"
                      onClick={() => copyToClipboard(color.value)}
                    >
                      <CardContent className="p-0">
                        <div
                          className="h-24 w-full rounded-t-lg"
                          style={{
                            backgroundColor: color.value,
                            border: color.value === "#ffffff" ? "1px solid #e5e5e5" : "none",
                          }}
                        />
                        <div className="p-3">
                          <div className="mb-1 flex items-center justify-between">
                            <h4 className="text-sm font-semibold">{color.name}</h4>
                            {copiedColor === color.value ? (
                              <Check className="h-3 w-3 text-green-600" />
                            ) : (
                              <Copy className="h-3 w-3 text-gray-400" />
                            )}
                          </div>
                          <code className="mb-2 block rounded bg-gray-100 px-2 py-0.5 text-xs font-mono">
                            {color.value}
                          </code>
                          <p className="text-xs text-muted-foreground">{color.usage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <Separator />

              {/* Accent Colors */}
              <div>
                <h3 className="mb-4 text-lg font-semibold">Accent Colors</h3>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {accentColors.map((color) => (
                    <Card
                      key={color.value}
                      className="cursor-pointer transition-all hover:shadow-lg"
                      onClick={() => copyToClipboard(color.value)}
                    >
                      <CardContent className="p-0">
                        <div
                          className="h-32 w-full rounded-t-lg"
                          style={{ backgroundColor: color.value }}
                        />
                        <div className="p-4">
                          <div className="mb-2 flex items-center justify-between">
                            <h4 className="font-semibold">{color.name}</h4>
                            {copiedColor === color.value ? (
                              <Check className="h-4 w-4 text-green-600" />
                            ) : (
                              <Copy className="h-4 w-4 text-gray-400" />
                            )}
                          </div>
                          <code className="mb-2 block rounded bg-gray-100 px-2 py-1 text-sm font-mono">
                            {color.value}
                          </code>
                          <p className="text-sm text-muted-foreground">{color.usage}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Typography Tab */}
        <TabsContent value="typography" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Typography System</CardTitle>
              <CardDescription>
                Our typography system uses Inter, a modern and highly legible typeface.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              {typeScale.map((type, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div
                      className="mb-4 font-bold"
                      style={{
                        fontSize: type.size,
                        fontWeight: type.weight.split(" ")[0],
                        letterSpacing: type.letterSpacing,
                        lineHeight: "1.2",
                      }}
                    >
                      {type.name}
                    </div>
                    <Separator className="my-4" />
                    <div className="grid gap-3 text-sm md:grid-cols-3">
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Font Size
                        </div>
                        <div className="font-mono">{type.size}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Font Weight
                        </div>
                        <div className="font-mono">{type.weight}</div>
                      </div>
                      <div>
                        <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                          Letter Spacing
                        </div>
                        <div className="font-mono">{type.letterSpacing}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </CardContent>
          </Card>
        </TabsContent>

        {/* Spacing Tab */}
        <TabsContent value="spacing" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Spacing System</CardTitle>
              <CardDescription>
                Our 8-point spacing system provides consistent rhythm and predictable layouts.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {spacing.map((space) => (
                  <Card key={space.name}>
                    <CardContent className="p-6">
                      <div
                        className="mb-4 rounded bg-gradient-to-r from-blue-600 to-blue-400"
                        style={{ height: space.value }}
                      />
                      <div className="space-y-1">
                        <div className="text-lg font-bold">{space.name}</div>
                        <div className="font-mono text-sm text-muted-foreground">
                          {space.value}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Components Tab */}
        <TabsContent value="components" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Design Principles</CardTitle>
              <CardDescription>
                Core principles that guide every design decision in the Usercentrics platform.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    icon: "🛡️",
                    title: "Trust First",
                    description:
                      "Every design decision prioritizes building and maintaining user trust through transparency and clarity.",
                  },
                  {
                    icon: "♿",
                    title: "Accessible",
                    description:
                      "WCAG 2.1 AA compliant interfaces that work for everyone, regardless of ability or device.",
                  },
                  {
                    icon: "⚡",
                    title: "Performance",
                    description:
                      "Lightweight, fast-loading components that deliver exceptional user experiences.",
                  },
                  {
                    icon: "🎯",
                    title: "Clarity",
                    description:
                      "Clear, concise communication that makes complex privacy concepts easy to understand.",
                  },
                  {
                    icon: "🔄",
                    title: "Consistency",
                    description:
                      "Predictable patterns and interactions that create familiarity and confidence.",
                  },
                  {
                    icon: "🌍",
                    title: "Global",
                    description:
                      "Designed for international audiences with support for multiple languages and regions.",
                  },
                ].map((principle, index) => (
                  <Card key={index} className="transition-all hover:shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 text-5xl">{principle.icon}</div>
                      <h3 className="mb-2 text-xl font-bold">{principle.title}</h3>
                      <p className="text-sm text-muted-foreground">{principle.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Component Examples</CardTitle>
              <CardDescription>Common UI patterns used throughout the platform.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="mb-3 font-semibold">Buttons</h4>
                <div className="flex flex-wrap gap-3">
                  <Button>Default</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
              </div>

              <Separator />

              <div>
                <h4 className="mb-3 font-semibold">Cards</h4>
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle>Card Title</CardTitle>
                      <CardDescription>Card description goes here</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        This is an example of a card component with header and content.
                      </p>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardHeader>
                      <CardTitle>Another Card</CardTitle>
                      <CardDescription>With some content inside</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">
                        Cards are great for displaying grouped information.
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      {/* Footer */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50">
        <CardContent className="p-8">
          <div className="text-center">
            <h3 className="mb-2 text-2xl font-bold">Ready to Build?</h3>
            <p className="mb-6 text-muted-foreground">
              All design tokens and components are available for use in your application.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button>Get Started</Button>
              <Button variant="outline">View Documentation</Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
