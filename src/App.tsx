import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Subscriptions from './pages/Subscriptions'
import Payments from './pages/Payments'
import StyleGuide from './pages/StyleGuide'
import ShadcnDemo from './pages/ShadcnDemo'
import PremiumDemo from './pages/PremiumDemo'
import AIRadar from './pages/AIRadar'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Subscriptions />} />
        <Route path="subscriptions" element={<Subscriptions />} />
        <Route path="payments" element={<Payments />} />
        <Route path="ai-radar" element={<AIRadar />} />
        <Route path="styleguide" element={<StyleGuide />} />
        <Route path="shadcn-demo" element={<ShadcnDemo />} />
        <Route path="premium-demo" element={<PremiumDemo />} />
      </Route>
    </Routes>
  )
}

export default App
