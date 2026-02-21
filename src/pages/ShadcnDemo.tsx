import { Button } from "@/components/ui/button"
import { Check, Download, Mail, Plus, Trash2 } from "lucide-react"

export default function ShadcnDemo() {
  return (
    <>
      <h1 className="page-title">shadcn/ui Demo</h1>

      <div className="space-y-8">
        {/* Introduction */}
        <div className="bg-white border border-border-color rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">🎉 shadcn/ui is Installed!</h2>
          <p className="text-text-secondary mb-4">
            shadcn/ui is now set up and ready to use. Below are some examples of
            components you can use in your application.
          </p>
          <div className="flex gap-2 flex-wrap">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-blue/10 text-accent-blue font-medium">
              ✓ Tailwind CSS
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-accent-green/10 text-accent-green font-medium">
              ✓ shadcn/ui
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-purple-100 text-purple-700 font-medium">
              ✓ Radix UI
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-orange-100 text-orange-700 font-medium">
              ✓ Lucide Icons
            </span>
          </div>
        </div>

        {/* Button Examples */}
        <div className="bg-white border border-border-color rounded-lg p-8">
          <h3 className="text-xl font-bold mb-6">Button Component</h3>

          <div className="space-y-6">
            {/* Default Buttons */}
            <div>
              <h4 className="text-sm font-semibold text-text-secondary mb-3">
                Default Buttons
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button>Default</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="destructive">Destructive</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="link">Link</Button>
              </div>
            </div>

            {/* Sizes */}
            <div>
              <h4 className="text-sm font-semibold text-text-secondary mb-3">Sizes</h4>
              <div className="flex flex-wrap items-center gap-3">
                <Button size="sm">Small</Button>
                <Button size="default">Default</Button>
                <Button size="lg">Large</Button>
                <Button size="icon">
                  <Plus />
                </Button>
              </div>
            </div>

            {/* With Icons */}
            <div>
              <h4 className="text-sm font-semibold text-text-secondary mb-3">
                With Icons
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button>
                  <Mail />
                  Send Email
                </Button>
                <Button variant="secondary">
                  <Download />
                  Download
                </Button>
                <Button variant="outline">
                  <Plus />
                  Add Item
                </Button>
                <Button variant="destructive">
                  <Trash2 />
                  Delete
                </Button>
                <Button variant="default">
                  <Check />
                  Confirm
                </Button>
              </div>
            </div>

            {/* Disabled */}
            <div>
              <h4 className="text-sm font-semibold text-text-secondary mb-3">
                Disabled State
              </h4>
              <div className="flex flex-wrap gap-3">
                <Button disabled>Disabled</Button>
                <Button variant="secondary" disabled>
                  Disabled Secondary
                </Button>
                <Button variant="outline" disabled>
                  Disabled Outline
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* How to Use */}
        <div className="bg-white border border-border-color rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">How to Use</h3>
          <div className="space-y-4">
            <div>
              <h4 className="font-semibold mb-2">Import the component:</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`import { Button } from "@/components/ui/button"`}</code>
              </pre>
            </div>

            <div>
              <h4 className="font-semibold mb-2">Use it in your JSX:</h4>
              <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto">
                <code>{`<Button variant="default">Click me</Button>
<Button variant="outline">Outline Button</Button>
<Button size="lg">Large Button</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>

        {/* Add More Components */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">🚀 Add More Components</h3>
          <p className="text-text-secondary mb-4">
            You can add more shadcn/ui components using npm scripts or by copying from
            the documentation:
          </p>

          <div className="bg-white rounded-lg p-4 mb-4">
            <h4 className="font-semibold mb-2">Popular components to add:</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <span className="text-accent-blue">•</span>
                <span>
                  <strong>Card:</strong> For displaying content in a container
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue">•</span>
                <span>
                  <strong>Input:</strong> Form input fields
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue">•</span>
                <span>
                  <strong>Dialog:</strong> Modal dialogs
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue">•</span>
                <span>
                  <strong>Dropdown Menu:</strong> Dropdown menus
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-accent-blue">•</span>
                <span>
                  <strong>Tabs:</strong> Tabbed interfaces
                </span>
              </li>
            </ul>
          </div>

          <div className="bg-gray-900 text-gray-100 p-4 rounded-lg">
            <p className="text-sm text-gray-400 mb-2">
              Visit the shadcn/ui documentation to add more:
            </p>
            <code className="text-green-400">https://ui.shadcn.com/docs/components</code>
          </div>
        </div>

        {/* Resources */}
        <div className="bg-white border border-border-color rounded-lg p-8">
          <h3 className="text-xl font-bold mb-4">📚 Resources</h3>
          <ul className="space-y-3">
            <li>
              <a
                href="https://ui.shadcn.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline font-medium"
              >
                shadcn/ui Documentation →
              </a>
            </li>
            <li>
              <a
                href="https://www.radix-ui.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline font-medium"
              >
                Radix UI Documentation →
              </a>
            </li>
            <li>
              <a
                href="https://lucide.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline font-medium"
              >
                Lucide Icons →
              </a>
            </li>
            <li>
              <a
                href="https://tailwindcss.com/docs"
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent-blue hover:underline font-medium"
              >
                Tailwind CSS Documentation →
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
