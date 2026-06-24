import Nav from '../../components/Nav'
import Footer from '../../components/Footer'
import Link from 'next/link'

const projects: Record<string, {
  title: string
  tagline: string
  year: string
  type: string
  tools: string[]
  summary: string
  sections: { num: string; heading: string; content: string }[]
  highlights?: { label: string; value: string }[]
  links: { label: string; url: string }[]
}> = {
  'mooring-tension': {
    title: 'Real-Time Mooring Tension Optimization System',
    tagline: 'A predictive safety tool integrating live weather and tidal data to recommend optimal mooring adjustments.',
    year: 'July 2025',
    type: 'Industry Hackathon (UWAYE x BHP) — 3rd Place',
    tools: ['Python', 'REST APIs', 'Dynamic Tension Modelling', 'Rapid Prototyping'],
    summary: 'Co-developed a Ship Mooring Safety & Efficiency System at the UWAYE x BHP Hackathon. A real-time predictive safety tool integrating live weather and tidal data to recommend optimal mooring hook adjustments dynamically.',
    sections: [
      {
        num: '01',
        heading: 'Problem Statement',
        content: 'Western Australia Iron Ore (WAIO) is one of the world\'s largest integrated iron ore operations. During ore loading at port facilities, vessels must remain safely moored. Traditional mooring setups rely on manual monitoring and crew experience. Wind, tides, and currents can alter line tensions throughout the loading process, creating potential safety hazards and operational inefficiencies.',
      },
      {
        num: '02',
        heading: 'Solution',
        content: 'We designed a dual-platform system: a Smart Watch Application for crew members on deck with real-time mooring status, individual hook tension indicators, safety alerts, and recommended adjustments — and an Operations Dashboard for port staff with fleet-wide monitoring, environmental condition tracking, and risk alerts. Data flow: Environmental APIs → Tension Model → Recommendation Engine → Watch App & Dashboard.',
      },
      {
        num: '03',
        heading: 'Process & Research',
        content: 'Developed within a limited hackathon timeframe requiring rapid prioritisation of features. Implemented a simplified physics-based tension model focused on core environmental factors (vessel type, cargo distribution, line characteristics, loading progression) to ensure delivery within constraints.',
      },
      {
        num: '04',
        heading: 'Conclusion',
        content: 'The prototype demonstrated how real-time environmental monitoring could improve operational safety, reduce manual calculations, support faster decision making, and increase confidence during loading operations. Future iterations include ML-based tension prediction, historical loading pattern analysis, IoT sensor integration, and automated anomaly detection.',
      },
    ],
    highlights: [
      { label: 'Achievement', value: '3rd Place' },
      { label: 'Build Time', value: '48 hrs' },
    ],
    links: [{ label: 'View Presentation', url: 'https://www.canva.com/design/DAG4mMiUfeI/GMyWOTB-BJMMdeQQpGUnsg/edit' }],
  },
  'workforce-analytics': {
    title: 'Workforce Data Analytics',
    tagline: 'Multidimensional analysis identifying key drivers of employee turnover at Palm Club, Vancouver.',
    year: '2026',
    type: 'Business Analytics Case Competition (BOLT UBC 2026) — Semifinalist',
    tools: ['Python', 'Pandas', 'Exploratory Data Analysis', 'Statistical Analysis', 'Data Visualization'],
    summary: 'Conducted a multidimensional data analysis on Palm Club, a Vancouver restaurant, as a UBC BOLT Case Competition project. Identified key drivers of employee turnover by integrating and analysing operational, workforce, and customer experience datasets.',
    sections: [
      {
        num: '01',
        heading: 'Problem Statement',
        content: 'The hospitality industry experiences some of the highest employee turnover rates across all sectors. Frequent staff departures increase recruitment and training costs, disrupt team cohesion, and negatively impact customer experience. Our team was tasked with analysing workforce and operational data from Palm Club, an upscale-casual restaurant established in 1988.',
      },
      {
        num: '02',
        heading: 'Solution',
        content: 'Designed a full analytical pipeline: integrated workforce, operational, and customer experience data, performed exploratory data analysis, identified turnover pattern drivers, and developed evidence-based business recommendations to improve retention.',
      },
      {
        num: '03',
        heading: 'Process & Research',
        content: 'Cleaned and integrated three distinct datasets. Performed EDA to identify correlations between scheduling patterns, shift lengths, customer ratings, and departure rates. Used statistical analysis to validate findings and quantify the significance of identified drivers.',
      },
      {
        num: '04',
        heading: 'Conclusion',
        content: 'Delivered actionable retention recommendations backed by data. The analysis surfaced clear patterns linking operational decisions to staff turnover that were previously invisible in siloed datasets.',
      },
    ],
    highlights: [
      { label: 'Achievement', value: 'Semifinalist' },
      { label: 'Datasets', value: '3+' },
    ],
    links: [{ label: 'View Slides', url: 'https://docs.google.com/presentation/d/1EE2nOqxNMVr4Qb71WUElAvxjzQBfFYvRhy-iMfN6pSA/edit' }],
  },
  'sillykitty': {
    title: 'SillyKitty: Interactive AI Desktop Companion',
    tagline: 'A pixel-art desktop pet with state-driven behaviour and a lightweight AI personality system.',
    year: '2026',
    type: 'Hackathon — SFU Surge SillyHacks',
    tools: ['Electron', 'HTML', 'CSS', 'JavaScript', 'Web Audio API', 'State Machine Architecture', 'LLM Integration'],
    summary: 'Built SillyKitty at the SFU Surge SillyHacks Hackathon: an interactive desktop pet application combining a pixel-art companion, state-driven behaviour engine, and lightweight AI personality system.',
    sections: [
      {
        num: '01',
        heading: 'Problem Statement',
        content: 'Most productivity tools are impersonal and transactional. We wanted to explore what it would look like to add genuine personality and emotional responsiveness to a desktop companion — something that felt alive and reacted meaningfully to user interactions.',
      },
      {
        num: '02',
        heading: 'Solution',
        content: 'Used Electron to build a cross-platform desktop app with a state machine managing the cat\'s behaviours (idle, happy, hungry, sleeping, playful). Integrated a lightweight AI personality layer that responds to user interactions with dynamic dialogue and reacts to time of day and user activity.',
      },
      {
        num: '03',
        heading: 'Process & Research',
        content: 'Designed the state machine architecture to handle smooth behavioural transitions. Implemented Web Audio API for sound feedback. Built the pixel-art animation system frame by frame. Integrated an LLM endpoint for personality responses within a constrained hackathon environment.',
      },
      {
        num: '04',
        heading: 'Conclusion',
        content: 'SillyKitty demonstrated how lightweight AI can be embedded into playful desktop experiences. The project showcased full-stack desktop development, state machine design, and AI integration in a 24-hour sprint.',
      },
    ],
    highlights: [
      { label: 'Build Time', value: '24 hrs' },
      { label: 'Platform', value: 'Desktop' },
    ],
    links: [{ label: 'View on Devpost', url: 'https://devpost.com/software/cat-fj3dx4' }],
  },
  'ru-okay': {
    title: 'R U Okay? — Mental Health Support Platform',
    tagline: 'A web platform making accessible, funded, government-integrated mental health care available to underserved communities.',
    year: '2026',
    type: 'Hackathon — UBC NwPlus cmd-f 2026 · Shortlisted by PCCA',
    tools: ['Lovable', 'GitHub', 'Full-Stack Web Development', 'AI Conversational Integration', 'PHQ-9 & GAD-7 Frameworks'],
    summary: 'Built R U Okay? as a solo project at cmd-f UBC NwPlus Hackathon 2026. A mental health support platform grounded in the belief that everyone deserves to be heard, designed to make accessible, funded, government-integrated care available to underserved communities.',
    sections: [
      {
        num: '01',
        heading: 'Problem Statement',
        content: '50% of the global population lacks full access to healthcare. 700,000 people die by suicide annually, linked to untreated depression and anxiety. 76–85% of people with severe mental disorders in middle-to-low income countries receive no treatment. Existing platforms like 7 Cups face barriers around licensing, insurance integration, and accessibility.',
      },
      {
        num: '02',
        heading: 'Solution',
        content: 'A web-based mental health platform anchored on three pillars: Accessible, Funded, and Integrated with government and insurance bodies. Incorporates an AI conversational layer for ethical initial support, PHQ-9 and GAD-7 assessment tools for standardised screening, and a roadmap for integration with government health bodies starting with the US and expanding globally.',
      },
      {
        num: '03',
        heading: 'Process & Research',
        content: 'Conducted a competitive analysis of 7 Cups, Headspace, Quartet Health, NeuroFlow, and OmniPractice to identify positioning gaps. Designed the platform around the R U OK? movement. Developed a working demo within the hackathon timeframe. Mapped regulatory landscape including HIPAA, PHQ-9, GAD-7, and privacy requirements.',
      },
      {
        num: '04',
        heading: 'Conclusion',
        content: 'Defined a four-stage product roadmap: AI-powered platform → Government health integration → US expansion → Worldwide adoption. Key limitations include ethical risks of AI in mental health, significant HIPAA compliance complexity, and sustaining professional oversight at scale.',
      },
    ],
    highlights: [
      { label: 'Recognition', value: 'PCCA' },
      { label: 'Built Solo', value: '24 hrs' },
    ],
    links: [],
  },
  'engineered-probiotics': {
    title: 'Engineered Probiotics — Antimicrobial Nanobodies',
    tagline: 'Supporting synthetic biology research to engineer yeast strains expressing antimicrobial nanobodies targeting bacterial pathogens.',
    year: '2026',
    type: 'Biochemistry Research — University of Alberta',
    tools: ['PCR', 'Gel Electrophoresis', 'Western Blotting', 'Spectrophotometry', 'Cell Culture', 'R'],
    summary: 'Contributed as a Research Assistant at the University of Alberta\'s Department of Biochemistry, supporting an ongoing synthetic biology project to engineer live therapeutic cells with proteins capable of detecting and neutralising bacterial pathogens in the human gut.',
    sections: [
      { num: '01', heading: 'Problem Statement', content: 'Antibiotic-resistant bacterial pathogens contribute to over 1.1 million deaths annually. Existing antibiotic treatments are cheap and effective but increasingly compromised by resistance. This creates demand for targeted, sustainable alternatives for antimicrobial treatments.' },
      { num: '02', heading: 'Solution', content: 'Using probiotic yeast strains (Saccharomyces boulardii), synthetic biology techniques are applied to express and secrete antimicrobial protein nanobodies. These engineered microbes are designed to specifically target the pathogen\'s binding subunit, offering a biological alternative to conventional antibiotics.' },
      { num: '03', heading: 'Process & Research', content: 'Worked alongside PhD researchers contributing to the construction of synthetic gene combinations encoding anti-microbial nanobodies through PCR amplification, plasmid assembly, and yeast transformation. Conducted cell culture, gel electrophoresis, and Western blotting to verify protein expression. Applied spectrophotometry for quantitative assessments and R for data wrangling and EDA.' },
      { num: '04', heading: 'Conclusion', content: 'This research is ongoing, with future work focusing on testing engineered yeast in cell-based assays to assess efficacy and potential applications. Findings were communicated at a departmental lab meeting through a research poster.' },
    ],
    links: [],
  },
  'emergency-service-analysis': {
    title: 'Emergency Service Complaints Analysis',
    tagline: 'Statistical modelling of patient complaint counts in emergency departments, achieving 97/100.',
    year: '2025',
    type: 'University Statistical Modelling Project — UWA · Grade: 97/100',
    tools: ['R', 'Statistical Modelling', 'Data Visualization', 'Poisson Regression', 'Zero-Inflated Models'],
    summary: 'A structured statistical analysis of patient complaints in the emergency department and the factors associated with them. Through a rigorous model evaluation process, identified the appropriate statistical technique to draw conclusions and provide reliable insights for a real-world healthcare problem.',
    sections: [
      { num: '01', heading: 'Problem Statement', content: 'Hospital emergency departments are complex, high-pressure settings where many variables influence the number of complaints. The goal was to determine how different factors influence complaint counts and whether meaningful interaction effects exist, while accounting for statistical challenges including overdispersion and zero-inflation.' },
      { num: '02', heading: 'Solution', content: 'Fitted and compared five statistical models: Poisson, Quasi-Poisson, Negative Binomial, Zero-Inflated Poisson (ZIP), and Zero-Inflated Negative Binomial (ZINB). Selected the best model based on AIC, log-likelihood, dispersion level, residual deviance, and coefficient significance.' },
      { num: '03', heading: 'Process & Research', content: 'Performed data exploration with histograms, scatterplots, boxplots, and rootograms to assess overdispersion and zero-inflation. Applied structured model selection methodology. Validated assumptions through diagnostic plots and statistical tests.' },
      { num: '04', heading: 'Conclusion', content: 'Highlighted the importance of selecting statistical methods that address real-world healthcare data challenges. Future work could explore hierarchical or Bayesian modelling to better account for the nested structure of healthcare environments.' },
    ],
    links: [],
  },
  'hrt-hypothesis': {
    title: 'HRT Time Window Hypothesis',
    tagline: 'Designing a rigorous study on optimal HRT timing in postmenopausal women using ANOVA and ANCOVA.',
    year: '2026',
    type: 'Case Competition — UBC SUS Research Exchange 2026',
    tools: ['ANOVA', 'ANCOVA', 'Experimental Design', 'Statistical Methodology', 'Research Poster Design'],
    summary: 'Designed and presented a research study on optimal HRT timing in postmenopausal women at the UBC SUS Research Exchange 2026, applying rigorous statistical methodology and a diversity-centred recruitment design to address gaps in existing clinical evidence.',
    sections: [
      { num: '01', heading: 'Problem Statement', content: 'Hormone Replacement Therapy remains one of the most debated interventions in women\'s health, with ongoing uncertainty surrounding how timing of treatment initiation influences outcomes in postmenopausal women. Many studies have historically underrepresented diverse socioeconomic populations, limiting applicability of findings.' },
      { num: '02', heading: 'Solution', content: 'Designed a study prioritising diversity, recruiting participants from all socioeconomic backgrounds through menopausal clinics and community liaisons. Focused on the "Window of Opportunity", examining how timing (0–5 years, 6–10 years, and beyond) and method of administration (oral vs. transdermal) influence outcomes.' },
      { num: '03', heading: 'Process & Research', content: 'Applied ANOVA and ANCOVA to rigorously analyse the data. Designed the experimental framework to address the diversity gap in existing HRT research. Presented findings through a research poster at the UBC SUS Research Exchange.' },
      { num: '04', heading: 'Conclusion', content: 'The study design highlighted key limitations and clinical significance of timing in HRT. Underscored the importance of inclusive research design and rigorous statistical methodology in women\'s health research.' },
    ],
    links: [],
  },
  'hope4homes': {
    title: 'Hope 4 Homes',
    tagline: 'A community-driven educational platform addressing the Australian housing crisis with ML-powered policy insights.',
    year: '2025',
    type: 'Hackathon — UWA CFC Hack for Homes 2025',
    tools: ['Web Development', 'Machine Learning (clustering)', 'Data Visualisation', 'Figma', 'UX Design'],
    summary: 'Developed Hope 4 Homes at UWA Coders for Causes 2025. A community-driven educational web platform addressing the Australian housing crisis, empowering individuals to navigate housing support and providing governments with data-driven, community-sourced insights to inform policy.',
    sections: [
      { num: '01', heading: 'Problem Statement', content: 'Australia\'s housing crisis continues to worsen, yet many individuals struggling with housing lack clarity on what support is available. Governments lack real-time, community-sourced data to understand the crisis at a granular level, creating a disconnection between top-down policy and community needs.' },
      { num: '02', heading: 'Solution', content: 'Built a dual-purpose platform: one layer educates individuals on housing support resources through a structured navigator, and a second aggregates anonymised community-reported data to generate ML-powered insights for policymakers. Inspired by Bijak Memilih, an Indonesian voter education campaign that reached 1.4 million young people.' },
      { num: '03', heading: 'Process & Research', content: 'Designed the UX in Figma, developed the web platform, and implemented a clustering ML pipeline to surface geographic patterns in community-reported data. Applied user-centred design principles to ensure accessibility for diverse users navigating housing stress.' },
      { num: '04', heading: 'Conclusion', content: 'The platform demonstrated how community-sourced data combined with ML can generate actionable policy insights. Limitations include user privacy concerns around sharing housing situations, and ML pipeline scaling requirements for larger datasets.' },
    ],
    links: [],
  },
  'road-safety': {
    title: 'Road Safety Graph Database Analysis',
    tagline: 'End-to-end data warehouse and graph database to analyse EU 2023 road fatalities and extract cross-country patterns.',
    year: '2025',
    type: 'University Graph Database Project — UWA',
    tools: ['Python', 'Neo4j (Cypher)', 'PostgreSQL', 'Tableau', 'ETL Pipeline Design'],
    summary: 'Designed and implemented an end-to-end data warehouse and graph database to analyse the EU 2023 road fatality dataset, extracting cross-country patterns and systemic risk factors to produce actionable policy recommendations using both relational and graph-based querying.',
    sections: [
      { num: '01', heading: 'Problem Statement', content: 'Australia\'s road fatality rate sits at 4.8 deaths per 100,000 people. Road safety data is often stored in flat, tabular formats that obscure relationships between contributing factors. Relational databases struggle to capture these interconnected patterns, limiting the depth of insight available to policymakers.' },
      { num: '02', heading: 'Solution', content: 'Transformed the EU 2023 road fatality dataset into a graph database (Neo4j), enabling relationship-based Cypher queries that reveal cross-country patterns invisible in tabular data. Complemented with a PostgreSQL data warehouse for aggregate analysis and Tableau dashboard for non-technical audiences.' },
      { num: '03', heading: 'Process & Research', content: 'Raw crash data → Data Cleaning & Transformation (Python) → ETL Pipeline → PostgreSQL Database → Graph Data Modelling (Countries, Crash Types, Road Categories) → Neo4j Graph Database → Cypher Query Analysis → Insight Generation → Tableau Dashboard → Policy Recommendations.' },
      { num: '04', heading: 'Conclusion', content: 'Future work would incorporate Australian-specific datasets for locally actionable insights and extend the graph model to crash-level granularity. Current limitation is the aggregated nature of the EU dataset, constraining pattern detection precision.' },
    ],
    links: [],
  },
  'ecommerce-ab-testing': {
    title: 'E-commerce Voucher Strategy Analysis',
    tagline: 'A rigorous A/B test evaluating voucher strategies on revenue and conversion rates for an e-commerce company.',
    year: '2025',
    type: 'Data Science Bootcamp Project',
    tools: ['Python', 'Pandas', 'A/B Testing', 'Statistical Hypothesis Testing', 'Confidence Intervals', 'Data Visualisation'],
    summary: 'Conducted a rigorous A/B test on voucher usage strategies for an e-commerce company, evaluating the statistical significance of different marketing approaches on revenue and conversion rates, and translating findings into concrete strategy recommendations.',
    sections: [
      { num: '01', heading: 'Problem Statement', content: 'The e-commerce company needed to determine which voucher strategy — fixed discount vs. percentage discount — produced superior revenue and conversion outcomes, and whether observed differences were statistically significant or driven by chance.' },
      { num: '02', heading: 'Solution', content: 'Designed and executed a full A/B testing pipeline: defined hypotheses, segmented control and treatment groups, ran statistical hypothesis tests, computed confidence intervals, and interpreted effect sizes to produce actionable strategy recommendations.' },
      { num: '03', heading: 'Process & Research', content: 'Applied Python and Pandas for data cleaning and manipulation. Ran t-tests and proportion z-tests for significance. Visualised distributions and confidence intervals. Validated assumptions (normality, equal variance) before drawing conclusions.' },
      { num: '04', heading: 'Conclusion', content: 'Delivered statistically validated recommendations on optimal voucher strategy. Demonstrated how rigorous hypothesis testing prevents costly business decisions driven by misleading averages or random variation.' },
    ],
    links: [],
  },
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const project = projects[slug]

  if (!project) {
    return (
      <main className="bg-background min-h-screen">
        <Nav />
        <div className="pt-[68px] px-10 py-20">
          <h1 className="font-worldstar text-4xl text-text mb-4">Project not found.</h1>
          <Link href="/" className="font-switzer text-sm text-primary hover:underline">← Back home</Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="bg-background min-h-screen">
      <Nav />

      <div className="pt-[68px]">

        {/* Hero image */}
        <div className="w-full bg-neutral/25" style={{ height: '60vh' }} />

        {/* Project info */}
        <div className="px-10 py-12 border-b border-neutral/20">
          <Link href="/#projects" className="font-switzer text-xs text-muted hover:text-primary transition-colors tracking-wide uppercase mb-6 block">
            ← Back to Homepage
          </Link>

          <p className="font-switzer text-xs text-primary uppercase tracking-widest mb-3">
            {project.type}
          </p>

          <h1 className="font-worldstar text-[clamp(32px,5vw,64px)] text-text leading-tight mb-4 max-w-3xl">
            {project.title}
          </h1>

          <p className="font-switzer text-base text-muted mb-8 max-w-2xl leading-relaxed">
            {project.tagline}
          </p>

          <div className="flex gap-12 items-start">
            <div>
              <p className="font-switzer text-xs text-muted uppercase tracking-widest mb-3">Tools</p>
              <div className="flex flex-wrap gap-2">
                {project.tools.map(t => (
                  <span key={t} className="font-switzer text-xs px-3 py-1 border border-neutral/50 text-muted rounded-full">{t}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="font-switzer text-xs text-muted uppercase tracking-widest mb-3">Timeline</p>
              <p className="font-switzer text-sm text-text">{project.year}</p>
            </div>
          </div>
        </div>

        {/* Summary box */}
        <div className="mx-10 my-10 bg-primary rounded-xl p-8">
          <p className="font-switzer text-sm text-background/80 leading-relaxed">
            {project.summary}
          </p>
        </div>

        {/* Numbered sections */}
        {project.sections.map((s) => (
          <div key={s.num}>
            {/* Section banner */}
            <div className="bg-primary px-10 py-5">
              <h2 className="font-worldstar text-2xl text-background text-center">
                {s.num} {s.heading}
              </h2>
            </div>
            {/* Content */}
            <div className="px-10 py-10 border-b border-neutral/20">
              <p className="font-switzer text-sm text-muted leading-relaxed max-w-3xl">
                {s.content}
              </p>
            </div>
          </div>
        ))}

        {/* Highlights */}
        {project.highlights && (
          <div className="px-10 py-12 grid grid-cols-2 gap-4 max-w-lg">
            {project.highlights.map((h) => (
              <div key={h.label} className="bg-text rounded-xl p-6">
                <p className="font-switzer text-xs text-background/50 uppercase tracking-widest mb-2">{h.label}</p>
                <p className="font-worldstar text-3xl text-background">{h.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Links */}
        {project.links.length > 0 && (
          <div className="px-10 pb-12 flex gap-4">
            {project.links.map(l => (
              <a
                key={l.label}
                href={l.url}
                target="_blank"
                rel="noreferrer"
                className="font-switzer text-sm px-6 py-3 bg-primary text-background rounded-button hover:opacity-90 transition-opacity"
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        )}

        <div className="px-10 pb-16">
          <Link href="/" className="font-switzer text-sm text-muted hover:text-primary transition-colors">
            ← Back to Homepage
          </Link>
        </div>

      </div>

      <Footer />
    </main>
  )
}