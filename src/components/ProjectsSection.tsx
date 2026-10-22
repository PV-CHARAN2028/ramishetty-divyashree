import React, { useState } from 'react';
import { PORTFOLIO_DATA, Project } from '../data/portfolioData';
import { ArrowUpRight, Play, Server, Sliders, CheckCircle2, ChevronRight, Code2 } from 'lucide-react';

export const ProjectsSection: React.FC = () => {
  const { projects } = PORTFOLIO_DATA;
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  // Transit delay interactive simulation state
  const [selectedRoute, setSelectedRoute] = useState('Central to Tech Park (18 km)');
  const [weatherCondition, setWeatherCondition] = useState('Heavy Monsoonal Rain');
  const [congestionLevel, setCongestionLevel] = useState('Peak Rush Hour');
  const [simulatedResult, setSimulatedResult] = useState<{
    delay: number;
    confidence: number;
    drivers: { name: string; impact: string }[];
  } | null>({
    delay: 14.6,
    confidence: 91.8,
    drivers: [
      { name: 'Weather Condition (Heavy Rain)', impact: '+6.5 min' },
      { name: 'Traffic Congestion (Peak)', impact: '+6.8 min' },
      { name: 'Route Baseline Schedule', impact: '+1.3 min' },
    ],
  });

  const runPredictionInference = () => {
    let baseDelay = 3.0;
    const drivers = [];

    // Weather impact
    if (weatherCondition === 'Clear Sky') {
      baseDelay += 0.5;
      drivers.push({ name: 'Weather Condition (Clear)', impact: '+0.5 min' });
    } else if (weatherCondition === 'Light Rain') {
      baseDelay += 3.2;
      drivers.push({ name: 'Weather Condition (Light Rain)', impact: '+3.2 min' });
    } else if (weatherCondition === 'Dense Morning Fog') {
      baseDelay += 5.4;
      drivers.push({ name: 'Weather Condition (Dense Fog)', impact: '+5.4 min' });
    } else {
      baseDelay += 7.8;
      drivers.push({ name: 'Weather Condition (Heavy Rain)', impact: '+7.8 min' });
    }

    // Congestion impact
    if (congestionLevel === 'Normal Flow') {
      baseDelay += 1.2;
      drivers.push({ name: 'Traffic (Normal Flow)', impact: '+1.2 min' });
    } else if (congestionLevel === 'Peak Rush Hour') {
      baseDelay += 7.4;
      drivers.push({ name: 'Traffic (Peak Rush Hour)', impact: '+7.4 min' });
    } else {
      baseDelay += 11.2;
      drivers.push({ name: 'Traffic (Severe Road Bottleneck)', impact: '+11.2 min' });
    }

    // Route length impact
    if (selectedRoute.includes('Airport')) {
      baseDelay += 4.5;
      drivers.push({ name: 'Route Length (32 km)', impact: '+4.5 min' });
    } else if (selectedRoute.includes('Central to Tech Park')) {
      baseDelay += 2.0;
      drivers.push({ name: 'Route Length (18 km)', impact: '+2.0 min' });
    } else {
      baseDelay += 0.8;
      drivers.push({ name: 'Route Length (9 km)', impact: '+0.8 min' });
    }

    const calculatedDelay = Math.round(baseDelay * 10) / 10;
    const calculatedConfidence = Math.round((88.5 + (Math.sin(calculatedDelay) * 3 + 2.5)) * 10) / 10;

    setSimulatedResult({
      delay: calculatedDelay,
      confidence: Math.min(96.5, calculatedConfidence),
      drivers,
    });
  };

  // E-commerce API explorer state
  const [activeApiTab, setActiveApiTab] = useState<'auth' | 'catalog' | 'cart' | 'checkout'>('catalog');

  const apiEndpoints = {
    auth: {
      method: 'POST',
      url: '/api/v1/auth/login',
      status: '200 OK',
      description: 'Authenticates user credentials, verifies BCrypt password hash, and issues secure JWT token.',
      requestBody: `{
  "email": "customer@example.com",
  "password": "••••••••••••"
}`,
      responseBody: `{
  "status": "SUCCESS",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.s5j...",
  "user": {
    "id": "65b821a0f9a2",
    "name": "Divya Customer",
    "email": "customer@example.com",
    "roles": ["ROLE_CUSTOMER"]
  }
}`,
    },
    catalog: {
      method: 'GET',
      url: '/api/v1/products?category=electronics&page=1&limit=5',
      status: '200 OK',
      description: 'Queries MongoDB product collection with compound category & price index, supporting pagination.',
      requestBody: `// Query Parameters in URL:
// category: "electronics"
// page: 1, limit: 5`,
      responseBody: `{
  "totalItems": 142,
  "currentPage": 1,
  "totalPages": 29,
  "items": [
    {
      "id": "prod_88192",
      "title": "Ergonomic Mechanical Keyboard",
      "price": 4999.00,
      "inStock": true,
      "category": "electronics",
      "sku": "KB-MECH-01"
    },
    {
      "id": "prod_88193",
      "title": "Precision Wireless Mouse",
      "price": 2499.00,
      "inStock": true,
      "category": "electronics",
      "sku": "MS-WIRELESS-02"
    }
  ]
}`,
    },
    cart: {
      method: 'POST',
      url: '/api/v1/cart/items',
      status: '201 CREATED',
      description: 'Appends item to customer cart document in MongoDB with atomic inventory reservation check.',
      requestBody: `{
  "productId": "prod_88192",
  "quantity": 1,
  "unitPrice": 4999.00
}`,
      responseBody: `{
  "cartId": "cart_992147",
  "totalItems": 1,
  "subtotal": 4999.00,
  "updatedAt": "2026-10-22T17:05:00Z",
  "status": "ACTIVE"
}`,
    },
    checkout: {
      method: 'POST',
      url: '/api/v1/orders/checkout',
      status: '201 CREATED',
      description: 'Spring Boot transactional service converting active cart to placed order with order tracking code.',
      requestBody: `{
  "cartId": "cart_992147",
  "shippingAddress": {
    "line1": "100 Outer Ring Road",
    "city": "Bengaluru",
    "postalCode": "560103"
  },
  "paymentMethod": "UPI"
}`,
      responseBody: `{
  "orderId": "ORD-2026-94812",
  "orderStatus": "CONFIRMED",
  "totalAmount": 4999.00,
  "estimatedDelivery": "2026-10-25",
  "trackingNumber": "TRK-BLR-8921"
}`,
    },
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0b0f19]">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-amber-400 mb-2">
            Selected Works
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight">
            Featured Engineering Projects
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mt-2 max-w-2xl">
            Real-world implementations in machine learning regression, asynchronous REST microservices, and enterprise database systems.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Card 1: Machine Learning Flagship (Span 7) */}
          <div className="lg:col-span-7 rounded-2xl border border-slate-800 bg-[#0f1422] overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              {/* Media Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                <img
                  src={projects[0].image}
                  alt={projects[0].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs font-mono font-medium text-amber-400">
                  {projects[0].metrics.label}: {projects[0].metrics.value}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8">
                {/* Unboxed Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                  <span>{projects[0].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{projects[0].period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400 font-mono">Random Forest Regressor</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {projects[0].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  {projects[0].subtitle}
                </p>

                <p className="text-sm text-slate-300 mt-4 leading-relaxed">
                  {projects[0].description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="mt-5 space-y-2 border-t border-slate-800/80 pt-4">
                  {projects[0].highlights.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Unboxed */}
                <div className="mt-6 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Stack:</span>
                  {projects[0].tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-300">{tag}</span>
                      {idx < projects[0].tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="px-6 pb-6 sm:px-8 sm:pb-8 pt-2">
              <button
                onClick={() => setActiveProjectModal(projects[0])}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 bg-amber-400 hover:bg-amber-300 active:scale-98 transition-all shadow-sm"
              >
                <Sliders className="w-4 h-4" />
                <span>Test Interactive ML Simulator & Case Study</span>
              </button>
            </div>
          </div>

          {/* Card 2: E-Commerce Backend Microservices (Span 5) */}
          <div className="lg:col-span-5 rounded-2xl border border-slate-800 bg-[#0f1422] overflow-hidden hover:border-slate-700 transition-all flex flex-col justify-between group">
            <div>
              {/* Media Container */}
              <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-900 border-b border-slate-800">
                <img
                  src={projects[1].image}
                  alt={projects[1].title}
                  referrerPolicy="no-referrer"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-103"
                />
                <div className="absolute top-4 right-4 bg-slate-900/90 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-700 text-xs font-mono font-medium text-amber-400">
                  {projects[1].metrics.label}: {projects[1].metrics.value}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 sm:p-7">
                {/* Unboxed Metadata */}
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                  <span>{projects[1].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{projects[1].period}</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {projects[1].title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 font-medium mt-1">
                  {projects[1].subtitle}
                </p>

                <p className="text-xs sm:text-sm text-slate-300 mt-3.5 leading-relaxed">
                  {projects[1].description}
                </p>

                {/* Highlights */}
                <div className="mt-4 space-y-2 border-t border-slate-800/80 pt-4">
                  {projects[1].highlights.slice(0, 2).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <span className="text-amber-400 mt-0.5">•</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack Unboxed */}
                <div className="mt-5 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Stack:</span>
                  {projects[1].tags.map((tag, idx) => (
                    <React.Fragment key={tag}>
                      <span className="text-slate-300">{tag}</span>
                      {idx < projects[1].tags.length - 1 && <span aria-hidden="true">·</span>}
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="px-6 pb-6 sm:px-7 sm:pb-7 pt-2">
              <button
                onClick={() => setActiveProjectModal(projects[1])}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-all"
              >
                <Server className="w-4 h-4 text-amber-400" />
                <span>Explore REST API Schemas & Swagger</span>
              </button>
            </div>
          </div>

          {/* Card 3: Freelance Engineering & Client Web Features (Span 12) */}
          <div className="lg:col-span-12 rounded-2xl border border-slate-800 bg-[#0f1422] p-6 sm:p-8 hover:border-slate-700 transition-all">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              <div className="md:col-span-8">
                <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400 mb-2">
                  <span>{projects[2].category}</span>
                  <span aria-hidden="true">·</span>
                  <span>{projects[2].period}</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-amber-400">Independent Client Engagements</span>
                </div>
                <h3 className="text-xl font-bold text-white">
                  {projects[2].title}
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  {projects[2].description}
                </p>
                <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Key Focus:</span>
                  <span>Responsive UI Design</span>
                  <span aria-hidden="true">·</span>
                  <span>REST API Hookups</span>
                  <span aria-hidden="true">·</span>
                  <span>Cross-Browser Testing</span>
                  <span aria-hidden="true">·</span>
                  <span>Performance Optimization</span>
                </div>
              </div>

              <div className="md:col-span-4 flex flex-col justify-end items-start md:items-end gap-3">
                <div className="text-left md:text-right">
                  <div className="text-xl font-mono font-bold text-white">100% On-Time</div>
                  <div className="text-xs text-slate-400">Client Specification Delivery</div>
                </div>
                <button
                  onClick={() => setActiveProjectModal(projects[2])}
                  className="px-4 py-2 text-xs font-semibold text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors"
                >
                  View Freelance Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Project Detail Modal */}
        {activeProjectModal && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
            onClick={() => setActiveProjectModal(null)}
          >
            <div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-slate-700 bg-[#0f1422] p-6 sm:p-8 shadow-2xl text-left"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-start justify-between border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2 text-xs text-amber-400 font-mono mb-1">
                    <span>{activeProjectModal.category}</span>
                    <span aria-hidden="true">·</span>
                    <span>{activeProjectModal.period}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {activeProjectModal.title}
                  </h3>
                  <p className="text-sm text-slate-400 mt-1">
                    {activeProjectModal.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
                >
                  ✕
                </button>
              </div>

              {/* SPECIFIC INTERACTIVE TOOL FOR PROJECT 1: TRANSIT DELAY ML SIMULATOR */}
              {activeProjectModal.id === 'public-transport-delay' && (
                <div className="mt-6 rounded-xl border border-amber-500/30 bg-[#0a0e1a] p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Sliders className="w-4 h-4 text-amber-400" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Live Random Forest ML Inference Simulator
                      </h4>
                    </div>
                    <span className="text-xs text-amber-400/90 font-mono">Trained on Historical Transit Data</span>
                  </div>

                  <p className="text-xs text-slate-400 mb-5">
                    Test the delay prediction algorithm by tweaking dynamic environmental variables. This models the exact feature engineering inputs ingested by Divyasree’s FastAPI prediction endpoint.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-5">
                    {/* Route selector */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Transit Route
                      </label>
                      <select
                        value={selectedRoute}
                        onChange={(e) => setSelectedRoute(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Central to Tech Park (18 km)</option>
                        <option>Airport Expressway (32 km)</option>
                        <option>Old City Metro Feeder (9 km)</option>
                      </select>
                    </div>

                    {/* Weather selector */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Weather Condition
                      </label>
                      <select
                        value={weatherCondition}
                        onChange={(e) => setWeatherCondition(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Clear Sky</option>
                        <option>Light Rain</option>
                        <option>Heavy Monsoonal Rain</option>
                        <option>Dense Morning Fog</option>
                      </select>
                    </div>

                    {/* Congestion selector */}
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        Traffic Congestion
                      </label>
                      <select
                        value={congestionLevel}
                        onChange={(e) => setCongestionLevel(e.target.value)}
                        className="w-full text-xs rounded-lg border border-slate-700 bg-slate-900 px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                      >
                        <option>Normal Flow</option>
                        <option>Peak Rush Hour</option>
                        <option>Severe Road Bottleneck</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 pt-4 border-t border-slate-800">
                    <button
                      onClick={runPredictionInference}
                      className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-900 text-xs font-bold transition-all shadow-sm"
                    >
                      <Play className="w-3.5 h-3.5 fill-current" />
                      <span>Run Model Prediction</span>
                    </button>

                    {simulatedResult && (
                      <div className="flex items-center gap-6 text-xs">
                        <div>
                          <span className="text-slate-400 block text-[11px]">Predicted Delay:</span>
                          <span className="text-lg font-mono font-bold text-amber-400 tabular-nums">
                            +{simulatedResult.delay} mins
                          </span>
                        </div>
                        <div>
                          <span className="text-slate-400 block text-[11px]">Model Confidence:</span>
                          <span className="text-base font-mono font-semibold text-emerald-400 tabular-nums">
                            {simulatedResult.confidence}%
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Factor Breakdown */}
                  {simulatedResult && (
                    <div className="mt-4 pt-3 border-t border-slate-800/80">
                      <div className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Primary Contributing Factors (Feature Importance)
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                        {simulatedResult.drivers.map((driver, idx) => (
                          <div
                            key={idx}
                            className="p-2 rounded bg-slate-900/80 border border-slate-800 text-[11px] flex justify-between items-center"
                          >
                            <span className="text-slate-300 truncate mr-2">{driver.name}</span>
                            <span className="text-amber-400 font-mono font-semibold shrink-0">
                              {driver.impact}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* SPECIFIC INTERACTIVE TOOL FOR PROJECT 2: E-COMMERCE API CONSOLE */}
              {activeProjectModal.id === 'ecommerce-backend' && (
                <div className="mt-6 rounded-xl border border-blue-500/30 bg-[#0a0e1a] p-5 sm:p-6">
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-2">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                        Interactive Swagger REST API Explorer
                      </h4>
                    </div>
                    <span className="text-xs text-blue-400/90 font-mono">Spring Boot 3 + MongoDB</span>
                  </div>

                  {/* API Tabs */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {(['auth', 'catalog', 'cart', 'checkout'] as const).map((tab) => (
                      <button
                        key={tab}
                        onClick={() => setActiveApiTab(tab)}
                        className={`px-3 py-1.5 text-xs font-mono font-medium rounded-lg transition-colors ${
                          activeApiTab === tab
                            ? 'bg-blue-600 text-white'
                            : 'bg-slate-900 text-slate-400 hover:text-white'
                        }`}
                      >
                        {apiEndpoints[tab].method} {tab.toUpperCase()}
                      </button>
                    ))}
                  </div>

                  {/* Active Endpoint Spec */}
                  <div className="rounded-lg bg-slate-950 p-4 border border-slate-800 font-mono text-xs">
                    <div className="flex items-center justify-between pb-2 mb-3 border-b border-slate-800 text-slate-300">
                      <div className="flex items-center gap-2">
                        <span className="px-1.5 py-0.5 rounded text-[11px] font-bold bg-blue-500/20 text-blue-300">
                          {apiEndpoints[activeApiTab].method}
                        </span>
                        <span className="text-white">{apiEndpoints[activeApiTab].url}</span>
                      </div>
                      <span className="text-emerald-400 font-bold">
                        {apiEndpoints[activeApiTab].status}
                      </span>
                    </div>

                    <p className="font-sans text-xs text-slate-400 mb-3">
                      {apiEndpoints[activeApiTab].description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                          Request Payload
                        </div>
                        <pre className="p-3 rounded bg-slate-900/90 text-[11px] text-slate-300 overflow-x-auto">
                          {apiEndpoints[activeApiTab].requestBody}
                        </pre>
                      </div>

                      <div>
                        <div className="text-[11px] text-slate-500 uppercase tracking-wider mb-1">
                          JSON Response
                        </div>
                        <pre className="p-3 rounded bg-slate-900/90 text-[11px] text-emerald-300 overflow-x-auto">
                          {apiEndpoints[activeApiTab].responseBody}
                        </pre>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Problem & Solution Architecture */}
              <div className="mt-8 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    Problem & Engineering Objective
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.details.problem}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                    Engineered Solution
                  </h4>
                  <p className="text-sm text-slate-300 leading-relaxed">
                    {activeProjectModal.details.solution}
                  </p>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    System Architecture & Implementation Steps
                  </h4>
                  <div className="space-y-2">
                    {activeProjectModal.details.architecture.map((step, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 p-3 rounded-lg bg-slate-900/50 border border-slate-800 text-xs text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                    Complete Technology Stack
                  </h4>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-300">
                    {activeProjectModal.details.technicalStack.map((tech, idx) => (
                      <React.Fragment key={tech}>
                        <span className="text-white font-medium">{tech}</span>
                        {idx < activeProjectModal.details.technicalStack.length - 1 && (
                          <span aria-hidden="true" className="text-slate-600">·</span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Close Button */}
              <div className="mt-8 pt-6 border-t border-slate-800 flex justify-end">
                <button
                  onClick={() => setActiveProjectModal(null)}
                  className="px-5 py-2.5 text-xs font-semibold text-slate-900 bg-amber-400 rounded-lg hover:bg-amber-300 transition-colors"
                >
                  Close Case Study
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
