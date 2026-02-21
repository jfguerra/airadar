import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Crown, Sparkles, Star, Zap, TrendingUp, Award, Check } from "lucide-react"

export default function PremiumDemo() {
  return (
    <div className="space-y-8">
      {/* Hero Section */}
      <div className="relative overflow-hidden rounded-lg bg-gradient-to-r from-premium to-yellow-500 p-8 text-premium-foreground">
        <div className="relative z-10">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/20 px-4 py-1.5 text-sm font-semibold backdrop-blur-sm">
            <Crown className="h-4 w-4" />
            Premium Color Token
          </div>
          <h1 className="mb-3 text-5xl font-bold tracking-tight">Premium Badge System</h1>
          <p className="max-w-2xl text-lg">
            New premium color token for highlighting paid features and upgrades.
            Works perfectly in both light and dark modes!
          </p>
        </div>
      </div>

      {/* Color Info */}
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Light Mode</CardTitle>
            <CardDescription>Premium color in light theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Color</span>
                <code className="rounded bg-muted px-2 py-1 text-xs">hsl(38 92% 50%)</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hex</span>
                <code className="rounded bg-muted px-2 py-1 text-xs">#F59E0B</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Usage</span>
                <span className="text-xs text-muted-foreground">Warm amber/gold</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Dark Mode</CardTitle>
            <CardDescription>Premium color in dark theme</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Color</span>
                <code className="rounded bg-muted px-2 py-1 text-xs">hsl(43 96% 56%)</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Hex</span>
                <code className="rounded bg-muted px-2 py-1 text-xs">#FCD34D</code>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Usage</span>
                <span className="text-xs text-muted-foreground">Brighter gold/yellow</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Button Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Premium Buttons</CardTitle>
          <CardDescription>Button component with premium variant</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Standard Sizes</h4>
            <div className="flex flex-wrap gap-3">
              <Button className="bg-premium text-premium-foreground hover:bg-premium/90" size="sm">
                <Crown className="mr-2 h-4 w-4" />
                Upgrade to Pro
              </Button>
              <Button className="bg-premium text-premium-foreground hover:bg-premium/90">
                <Sparkles className="mr-2 h-4 w-4" />
                Go Premium
              </Button>
              <Button className="bg-premium text-premium-foreground hover:bg-premium/90" size="lg">
                <Star className="mr-2 h-5 w-5" />
                Unlock Premium
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Outline Style</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="outline" className="border-premium text-premium hover:bg-premium hover:text-premium-foreground">
                <Crown className="mr-2 h-4 w-4" />
                Premium Feature
              </Button>
              <Button variant="outline" className="border-premium text-premium hover:bg-premium hover:text-premium-foreground">
                <Zap className="mr-2 h-4 w-4" />
                Upgrade Now
              </Button>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Ghost Style</h4>
            <div className="flex flex-wrap gap-3">
              <Button variant="ghost" className="text-premium hover:bg-premium/10 hover:text-premium">
                <Award className="mr-2 h-4 w-4" />
                Learn More
              </Button>
              <Button variant="ghost" className="text-premium hover:bg-premium/10 hover:text-premium">
                <TrendingUp className="mr-2 h-4 w-4" />
                See Benefits
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Badge Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Premium Badges & Labels</CardTitle>
          <CardDescription>Visual indicators for premium features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Badges</h4>
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-1 rounded-full bg-premium px-3 py-1 text-xs font-semibold text-premium-foreground">
                <Crown className="h-3 w-3" />
                PREMIUM
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-premium px-3 py-1 text-xs font-semibold text-premium-foreground">
                <Star className="h-3 w-3" />
                PRO
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-premium px-3 py-1 text-xs font-semibold text-premium-foreground">
                <Sparkles className="h-3 w-3" />
                UPGRADE
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-premium/20 px-3 py-1 text-xs font-semibold text-premium">
                <Crown className="h-3 w-3" />
                Exclusive
              </span>
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-muted-foreground">Pills</h4>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-md bg-premium px-2 py-0.5 text-xs font-medium text-premium-foreground">
                Premium Only
              </span>
              <span className="rounded-md bg-premium/10 px-2 py-0.5 text-xs font-medium text-premium">
                Paid Feature
              </span>
              <span className="rounded-md border border-premium px-2 py-0.5 text-xs font-medium text-premium">
                Upgrade Required
              </span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Usage Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Real-World Usage Examples</CardTitle>
          <CardDescription>How to use the premium color in your components</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Subscription Card Example */}
          <Card className="border-premium">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    Premium Plan
                    <span className="inline-flex items-center gap-1 rounded-full bg-premium px-2 py-0.5 text-xs font-semibold text-premium-foreground">
                      <Crown className="h-3 w-3" />
                      PRO
                    </span>
                  </CardTitle>
                  <CardDescription>Unlock all features and benefits</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="text-3xl font-bold">
                €49<span className="text-lg font-normal text-muted-foreground">/month</span>
              </div>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-premium" />
                  Unlimited sessions
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-premium" />
                  Priority support
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Check className="h-4 w-4 text-premium" />
                  Advanced analytics
                </li>
              </ul>
              <Button className="w-full bg-premium text-premium-foreground hover:bg-premium/90">
                <Crown className="mr-2 h-4 w-4" />
                Upgrade to Premium
              </Button>
            </CardContent>
          </Card>

          {/* Feature Lock Example */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-premium/10">
                  <Sparkles className="h-6 w-6 text-premium" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold">Advanced Analytics</h4>
                  <p className="text-sm text-muted-foreground">
                    Unlock detailed insights and reporting
                  </p>
                </div>
                <Button variant="outline" className="border-premium text-premium hover:bg-premium hover:text-premium-foreground">
                  Upgrade
                </Button>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>

      {/* Code Examples */}
      <Card>
        <CardHeader>
          <CardTitle>Code Usage</CardTitle>
          <CardDescription>How to implement the premium color in your code</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h4 className="mb-2 font-semibold">Premium Button</h4>
            <pre className="rounded-lg bg-slate-950 p-4 text-sm text-slate-50">
              <code>{`<Button className="bg-premium text-premium-foreground hover:bg-premium/90">
  <Crown className="mr-2 h-4 w-4" />
  Upgrade to Premium
</Button>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Premium Badge</h4>
            <pre className="rounded-lg bg-slate-950 p-4 text-sm text-slate-50">
              <code>{`<span className="inline-flex items-center gap-1 rounded-full 
      bg-premium px-3 py-1 text-xs font-semibold 
      text-premium-foreground">
  <Crown className="h-3 w-3" />
  PREMIUM
</span>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">Premium Border</h4>
            <pre className="rounded-lg bg-slate-950 p-4 text-sm text-slate-50">
              <code>{`<Card className="border-premium">
  {/* Premium content */}
</Card>`}</code>
            </pre>
          </div>

          <div>
            <h4 className="mb-2 font-semibold">CSS Variables</h4>
            <pre className="rounded-lg bg-slate-950 p-4 text-sm text-slate-50">
              <code>{`/* Light mode */
--premium: 38 92% 50%;              /* #F59E0B */
--premium-foreground: 0 0% 98%;    /* White text */

/* Dark mode */  
--premium: 43 96% 56%;              /* #FCD34D */
--premium-foreground: 20 14.3% 4.1%; /* Dark text */`}</code>
            </pre>
          </div>
        </CardContent>
      </Card>

      {/* Design Guidelines */}
      <Card className="bg-gradient-to-r from-premium/10 to-yellow-500/10">
        <CardContent className="p-8">
          <div className="space-y-4">
            <h3 className="flex items-center gap-2 text-2xl font-bold">
              <Sparkles className="h-6 w-6 text-premium" />
              Design Guidelines
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <Crown className="mt-0.5 h-4 w-4 flex-shrink-0 text-premium" />
                <span>
                  <strong>Use sparingly:</strong> Premium color should be reserved for truly premium
                  features and upgrade CTAs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Star className="mt-0.5 h-4 w-4 flex-shrink-0 text-premium" />
                <span>
                  <strong>Clear hierarchy:</strong> Premium elements should stand out from regular
                  content
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Zap className="mt-0.5 h-4 w-4 flex-shrink-0 text-premium" />
                <span>
                  <strong>Action-oriented:</strong> Use with upgrade buttons and paid feature locks
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Award className="mt-0.5 h-4 w-4 flex-shrink-0 text-premium" />
                <span>
                  <strong>Pairs well with:</strong> Crown, Star, Sparkles, and Zap icons from
                  Lucide
                </span>
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
