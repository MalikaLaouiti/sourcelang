import Hero from "./_components/hero"
import Features from "./_components/features"
import Example from "./_components/example"
import BottomDocs from "./_components/bottom-docs"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <Features />
      
      {/* Code Example Section */}
      <Example />
  
      {/* CTA Section */}
      <BottomDocs />
    </div>
  )
}
