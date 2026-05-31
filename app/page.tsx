export default function Home() {
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Local SEO Tool
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Track Local SEO &amp; Google Business Performance
        </h1>
        <p className="text-lg md:text-xl text-[#8b949e] max-w-2xl mx-auto mb-10">
          Monitor keyword rankings, Google Business Profile views, and outrank competitors — all from one dashboard built for local businesses and agencies.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-10 py-4 rounded-lg transition-colors duration-200"
        >
          Start Tracking — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No contracts. Cancel anytime.</p>

        {/* Feature pills */}
        <div className="flex flex-wrap justify-center gap-3 mt-12">
          {["Local Rank Tracking", "Google Business Insights", "Competitor Analysis", "Automated Reports", "Multi-location Support"].map((f) => (
            <span key={f} className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full">{f}</span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center shadow-lg shadow-[#58a6ff]/10">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</p>
          <div className="flex items-end justify-center gap-1 mb-4">
            <span className="text-5xl font-bold text-white">$19</span>
            <span className="text-[#8b949e] mb-2">/month</span>
          </div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Up to 5 business locations",
              "100 tracked keywords",
              "Google Business Profile analytics",
              "Competitor rank comparison",
              "Weekly automated email reports",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                {item}
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors duration-200"
          >
            Get Started Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">How does local rank tracking work?</h3>
            <p className="text-[#8b949e] text-sm">We check your business&apos;s position in Google local search results for your target keywords daily, so you always know where you stand against competitors in your area.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Do I need a Google Business Profile?</h3>
            <p className="text-[#8b949e] text-sm">Yes — a verified Google Business Profile is required to track GBP-specific metrics like views, calls, and direction requests. Keyword rank tracking works without one.</p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Can I track multiple locations or clients?</h3>
            <p className="text-[#8b949e] text-sm">Absolutely. The Pro plan supports up to 5 locations, making it perfect for agencies managing multiple local business clients from a single dashboard.</p>
          </div>
        </div>
      </section>

      <footer className="text-center py-8 text-[#8b949e] text-sm border-t border-[#21262d]">
        &copy; {new Date().getFullYear()} Local SEO Tracker. All rights reserved.
      </footer>
    </main>
  );
}
