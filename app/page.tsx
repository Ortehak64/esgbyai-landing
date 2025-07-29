<<<<<<< HEAD

export default function HomePage() {
  return (
    <main className="p-10">
      <img src="/esgbyai_logo_dark_bg.png" alt="ESGbyAI Logo" className="w-48 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Welcome to ESGbyAI</h1>
      <p className="mb-6">AI-powered ESG reporting tools for businesses striving to meet tomorrow’s standards today.</p>
      <ul className="space-y-2">
        <li>Automated ESG data collection</li>
        <li>Real-time analytics dashboards</li>
        <li>AI-assisted report generation</li>
        <li>Sustainability KPI tracking</li>
        <li>Regulatory compliance checks</li>
        <li>Benchmarking & peer analysis</li>
        <li>Audit-ready documentation</li>
        <li>Carbon footprint calculations</li>
        <li>Risk & materiality assessments</li>
        <li>Integrated stakeholder dashboards</li>
      </ul>
    </main>
  );
}
    
=======
export default function Home() {
  return (
    <div className="max-w-3xl mx-auto text-center">
      <h1 className="text-4xl font-bold mb-4">Welcome to ESGbyAI</h1>
      <p className="mb-8 text-gray-300">
        AI-powered ESG reporting tools for businesses striving to meet tomorrow’s standards today.
      </p>
      <ul className="text-left space-y-2" id="features">
        {['Automated ESG data collection',
          'Real-time analytics dashboards',
          'AI-assisted report generation',
          'Sustainability KPI tracking',
          'Regulatory compliance checks',
          'Benchmarking & peer analysis',
          'Audit-ready documentation',
          'Carbon footprint calculations',
          'Risk & materiality assessments',
          'Integrated stakeholder dashboards'].map((feature, idx) => (
            <li key={idx} className="flex items-center gap-2">
              <span className="text-green-400">✓</span> {feature}
            </li>
        ))}
      </ul>
    </div>
  );
}
>>>>>>> b42dcdbd97e20d9c4725c6be9343eef8ad9f72b8
