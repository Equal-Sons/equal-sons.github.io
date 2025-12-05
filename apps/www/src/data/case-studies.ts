export interface ICaseStudy {
	id: number;
	slug: string;
	title: string;
	client: string;
	pillar: "build" | "lead" | "share";
	serviceTags: string[]; // service slugs
	shortDescription: string;
	challenge: string;
	solution: string;
	results?: string;
	testimonial?: {
		quote: string;
		author: string;
		title: string;
	};
	images: {
		hero: string;
		gallery?: string[];
	};
	featured: boolean;
}

export const caseStudies: ICaseStudy[] = [
	// BUILD PILLAR CASE STUDIES
	// {
	// 	id: 1,
	// 	slug: "saas-platform-redesign",
	// 	title: "Enterprise SaaS Platform Redesign",
	// 	client: "TechCorp Solutions",
	// 	pillar: "build",
	// 	serviceTags: ["web-development", "systems-integration"],
	// 	shortDescription:
	// 		"Complete platform redesign that improved user engagement by 45% and reduced support tickets by 30%.",
	// 	challenge:
	// 		"TechCorp's SaaS platform had grown organically over 5 years, resulting in an inconsistent user experience, technical debt, and increasing customer churn. The outdated architecture made it difficult to add new features, and users complained about the complexity of common workflows. With competitors gaining market share, TechCorp needed a modern platform that could scale with their ambitions.",
	// 	solution:
	// 		"We partnered with TechCorp's product team to redesign their platform from the ground up. Starting with user research and journey mapping, we identified the core workflows that mattered most to users. We then built a new React-based frontend with a modern design system, integrated it with their existing backend APIs, and implemented a phased rollout strategy that minimized disruption. Throughout the 6-month project, we worked alongside their team, transferring knowledge and ensuring they could maintain and extend the new platform.",
	// 	results:
	// 		"The redesigned platform launched on schedule and exceeded expectations. User engagement increased by 45% in the first quarter, support ticket volume dropped by 30%, and customer satisfaction scores reached all-time highs. Most importantly, TechCorp's team now has a solid foundation for future growth with a modern codebase and design system they can build on confidently.",
	// 	testimonial: {
	// 		quote: "Equal Sons didn't just rebuild our platform—they taught us how to think about product development differently. The result speaks for itself, but the partnership made all the difference.",
	// 		author: "Sarah Chen",
	// 		title: "VP of Product, TechCorp Solutions",
	// 	},
	// 	images: {
	// 		hero: "/img/case-studies/saas-platform-hero.jpg",
	// 		gallery: [
	// 			"/img/case-studies/saas-platform-1.jpg",
	// 			"/img/case-studies/saas-platform-2.jpg",
	// 			"/img/case-studies/saas-platform-3.jpg",
	// 		],
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 2,
	// 	slug: "enterprise-workflow-app",
	// 	title: "Custom Workflow Automation Platform",
	// 	client: "GlobalManufacturing Inc.",
	// 	pillar: "build",
	// 	serviceTags: ["app-development", "systems-integration"],
	// 	shortDescription:
	// 		"Internal application that automated manual processes and saved 200+ hours of work per week.",
	// 	challenge:
	// 		"GlobalManufacturing's operations team was drowning in manual work. Their process for managing supplier relationships, tracking orders, and coordinating logistics involved dozens of spreadsheets, email chains, and phone calls. As the company grew, the manual process became unsustainable, leading to errors, delays, and frustrated team members. They needed a custom solution that fit their unique workflows—off-the-shelf software couldn't handle the complexity.",
	// 	solution:
	// 		"We built a custom web application that centralized their entire operations workflow. The system integrated with their ERP, automated status updates, provided real-time visibility into orders, and streamlined communication with suppliers. We developed custom business logic to handle their unique requirements and built mobile-friendly interfaces so team members could work from anywhere. Throughout development, we involved the operations team heavily, ensuring the tool fit how they actually work.",
	// 	results:
	// 		"The application eliminated over 200 hours of manual work per week, reduced errors by 85%, and improved supplier relationships through better communication. The operations team went from dreading their daily workflow to having time to focus on strategic improvements. The platform has become essential to GlobalManufacturing's operations and continues to expand to new use cases.",
	// 	testimonial: {
	// 		quote: "This tool transformed how we work. What used to take all day now takes minutes. Equal Sons built exactly what we needed—not what they thought we needed.",
	// 		author: "Michael Rodriguez",
	// 		title: "Director of Operations, GlobalManufacturing Inc.",
	// 	},
	// 	images: {
	// 		hero: "/img/case-studies/workflow-app-hero.jpg",
	// 		gallery: ["/img/case-studies/workflow-app-1.jpg", "/img/case-studies/workflow-app-2.jpg"],
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 3,
	// 	slug: "startup-mvp-launch",
	// 	title: "FinTech Startup MVP Launch",
	// 	client: "PayFlow (Stealth Startup)",
	// 	pillar: "build",
	// 	serviceTags: ["mvp-creation", "app-development"],
	// 	shortDescription:
	// 		"Rapid MVP development that secured $2M in seed funding and onboarded first 100 customers.",
	// 	challenge:
	// 		"A fintech founding team had a vision for simplifying business payments but needed to validate their concept quickly. They had limited runway and needed an MVP that was professional enough to attract customers and investors, but focused enough to build in weeks, not months. The stakes were high—they needed to prove market demand before their funding ran out.",
	// 	solution:
	// 		"We worked intensively with the founders to identify their core value proposition and build only what mattered for validation. In 8 weeks, we delivered a functional MVP with user onboarding, payment processing integration, and a clean dashboard for managing transactions. We prioritized speed without sacrificing quality, using proven frameworks and focusing on the user experience. We also set up analytics to measure user behavior and inform future development.",
	// 	results:
	// 		"The MVP launched successfully and generated immediate interest. Within 90 days, PayFlow onboarded their first 100 customers, processed over $500K in transactions, and secured $2M in seed funding. The investors specifically mentioned the quality of the product as a key factor in their decision. The founders now have capital to scale what's working, built on a solid technical foundation.",
	// 	testimonial: {
	// 		quote: "Equal Sons helped us go from idea to funded company in 3 months. They understood exactly what we needed to prove and built it fast without cutting corners that mattered.",
	// 		author: "Jordan Kim",
	// 		title: "Co-Founder & CEO, PayFlow",
	// 	},
	// 	images: {
	// 		hero: "/img/case-studies/mvp-launch-hero.jpg",
	// 		gallery: ["/img/case-studies/mvp-launch-1.jpg", "/img/case-studies/mvp-launch-2.jpg"],
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 4,
	// 	slug: "crm-integration-automation",
	// 	title: "CRM Integration & Marketing Automation",
	// 	client: "GrowthAgency",
	// 	pillar: "build",
	// 	serviceTags: ["systems-integration"],
	// 	shortDescription:
	// 		"Seamless integration between marketing tools that eliminated manual work and improved lead response time by 60%.",
	// 	challenge:
	// 		"GrowthAgency's marketing and sales teams were using different tools that didn't talk to each other. Leads from their website, LinkedIn, and events were manually entered into their CRM, often with delays and errors. The sales team couldn't respond quickly to hot leads, and marketing couldn't track which campaigns were actually driving revenue. The manual data entry was taking 10+ hours per week and losing them deals.",
	// 	solution:
	// 		"We built custom integrations connecting their marketing automation platform, website forms, CRM, and communication tools. Leads now flow automatically from any source into the CRM with proper tagging and routing. We set up automated workflows that notify sales reps immediately when high-value leads take key actions. We also built dashboards that give marketing visibility into which campaigns drive closed deals, not just leads.",
	// 	results:
	// 		"The integration eliminated all manual data entry, improved lead response time by 60%, and gave the team confidence in their data. Marketing can now optimize based on revenue attribution, and sales can focus on selling instead of data entry. The agency has grown 40% year-over-year with the same team size—the automation made it possible.",
	// 	images: {
	// 		hero: "/img/case-studies/crm-integration-hero.jpg",
	// 	},
	// 	featured: false,
	// },
	// // LEAD PILLAR CASE STUDIES
	// {
	// 	id: 5,
	// 	slug: "enterprise-tech-roadmap",
	// 	title: "Enterprise Technology Roadmap & Modernization",
	// 	client: "LegacyCorp Financial Services",
	// 	pillar: "lead",
	// 	serviceTags: ["technology-strategy"],
	// 	shortDescription:
	// 		"3-year technology roadmap that aligned leadership and guided $5M+ in technology investments.",
	// 	challenge:
	// 		"LegacyCorp's technology had fallen behind competitors. Their core systems were 15+ years old, making it expensive to add features and difficult to attract engineering talent. Leadership knew they needed to modernize, but disagreed on priorities and approach. Some wanted to rebuild everything from scratch, others preferred incremental updates. Without a clear strategy, they risked wasting millions on the wrong approach.",
	// 	solution:
	// 		"We conducted a comprehensive technology assessment, interviewing leadership, engineers, and customers to understand the landscape. We evaluated their current systems, identified critical gaps, and developed a phased modernization roadmap that balanced risk and value. The strategy prioritized customer-facing improvements while systematically addressing technical debt. We facilitated leadership alignment sessions that built consensus on the approach and secured commitment to a 3-year plan.",
	// 	results:
	// 		"LegacyCorp now has a clear technology roadmap that guides over $5M in annual technology investment. The first phase delivered measurable improvements in customer experience within 6 months. Engineering morale improved dramatically with modern tools and clear direction. Most importantly, leadership is aligned on technology strategy for the first time in years, making decisions with confidence.",
	// 	testimonial: {
	// 		quote: "Equal Sons gave us the clarity we desperately needed. For the first time, our leadership team agrees on technology direction, and our engineers have a plan they believe in.",
	// 		author: "David Park",
	// 		title: "CTO, LegacyCorp Financial Services",
	// 	},
	// 	images: {
	// 		hero: "/img/case-studies/tech-roadmap-hero.jpg",
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 6,
	// 	slug: "saas-gtm-strategy",
	// 	title: "SaaS Go-to-Market Strategy & Launch",
	// 	client: "DataInsights Platform",
	// 	pillar: "lead",
	// 	serviceTags: ["marketing-strategy", "product-positioning"],
	// 	shortDescription:
	// 		"Complete GTM strategy that drove 150% growth in qualified leads and 40% conversion rate improvement.",
	// 	challenge:
	// 		"DataInsights had built a powerful analytics platform but struggled to gain traction. Their marketing efforts weren't generating qualified leads, and their sales team couldn't clearly articulate the value proposition. They were positioned as 'analytics for everyone' but resonated with no one. With runway dwindling, they needed a clear go-to-market strategy that would drive pipeline quickly.",
	// 	solution:
	// 		"We started with customer research to understand who actually valued their platform and why. We repositioned DataInsights around a specific niche—enterprise sales teams—and rebuilt their messaging to speak directly to that audience's pain points. We then developed a multi-channel GTM strategy focused on content marketing, targeted outreach, and strategic partnerships. We helped them launch with new website messaging, sales collateral, and a 90-day campaign plan.",
	// 	results:
	// 		"The focused positioning immediately resonated with the target market. Qualified lead volume increased by 150% within 60 days. More importantly, lead-to-customer conversion improved by 40% because sales conversations aligned with what prospects actually needed. DataInsights secured their next funding round and has since become the go-to platform for enterprise sales analytics.",
	// 	testimonial: {
	// 		quote: "We were trying to be everything to everyone and reaching no one. Equal Sons helped us find our focus and gave us the strategy to win our market.",
	// 		author: "Emily Thompson",
	// 		title: "CEO, DataInsights Platform",
	// 	},
	// 	images: {
	// 		hero: "/img/case-studies/gtm-strategy-hero.jpg",
	// 		gallery: ["/img/case-studies/gtm-strategy-1.jpg"],
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 7,
	// 	slug: "product-repositioning",
	// 	title: "Product Repositioning for Market Expansion",
	// 	client: "CloudSecure",
	// 	pillar: "lead",
	// 	serviceTags: ["product-positioning", "marketing-strategy"],
	// 	shortDescription:
	// 		"Strategic repositioning that opened new market segments and doubled average deal size.",
	// 	challenge:
	// 		"CloudSecure had successfully sold to small businesses for 3 years but hit a growth ceiling. They wanted to move upmarket to enterprise customers but their positioning, pricing, and messaging screamed 'small business tool.' Enterprise prospects didn't take them seriously. They needed to reposition without alienating their existing customer base or requiring major product changes.",
	// 	solution:
	// 		"We developed a dual-positioning strategy that maintained their SMB foundation while opening enterprise doors. We identified enterprise-specific use cases their product already solved, created new messaging tracks for different audiences, and restructured their pricing and packaging to support larger deals. We also coached their sales team on enterprise selling and helped them create enterprise-grade sales materials.",
	// 	results:
	// 		"CloudSecure successfully moved upmarket without losing SMB momentum. Average deal size doubled within 6 months, and they closed their first seven-figure contract. The enterprise positioning gave them credibility with larger prospects while the refined SMB messaging actually improved conversion in that segment too. Revenue grew 3x year-over-year with the expanded market reach.",
	// 	images: {
	// 		hero: "/img/case-studies/repositioning-hero.jpg",
	// 	},
	// 	featured: false,
	// },
	// {
	// 	id: 8,
	// 	slug: "leadership-strategic-planning",
	// 	title: "Annual Strategic Planning & Team Alignment",
	// 	client: "InnovateHealth",
	// 	pillar: "lead",
	// 	serviceTags: ["business-alignment", "technology-strategy"],
	// 	shortDescription:
	// 		"Facilitated strategic planning that aligned leadership, clarified priorities, and improved execution velocity.",
	// 	challenge:
	// 		"InnovateHealth's leadership team was working hard but not aligned. Each executive had different priorities, leading to competing initiatives, resource conflicts, and execution confusion. Their annual planning process produced a 50-page document that no one followed. They needed to break the cycle and create a focused strategy the entire team could execute against.",
	// 	solution:
	// 		"We facilitated a 2-day strategic planning offsite that got the leadership team aligned on vision, priorities, and execution plan. Using structured exercises and decision frameworks, we helped them identify their top 3 strategic priorities for the year and define clear success metrics. We then worked with each functional leader to translate the strategy into quarterly OKRs and action plans. The result was a concise strategy document focused on what matters most.",
	// 	results:
	// 		"For the first time in years, InnovateHealth's leadership team agreed on priorities and could clearly articulate the strategy to their teams. Execution velocity improved dramatically as competing initiatives were deprioritized or cancelled. The company achieved all three strategic priorities by year-end and has since made the facilitated planning process an annual tradition.",
	// 	images: {
	// 		hero: "/img/case-studies/strategic-planning-hero.jpg",
	// 	},
	// 	featured: false,
	// },
	// // SHARE PILLAR CASE STUDIES
	// {
	// 	id: 9,
	// 	slug: "team-conflict-resolution",
	// 	title: "Cross-Functional Team Alignment & Conflict Resolution",
	// 	client: "FastGrowth Startup",
	// 	pillar: "share",
	// 	serviceTags: ["facilitation-mediation", "team-alignment"],
	// 	shortDescription:
	// 		"Mediation and facilitation that resolved product-engineering tension and restored team velocity.",
	// 	challenge:
	// 		"FastGrowth's product and engineering teams were at war. Product felt engineering was too slow and inflexible. Engineering felt product kept changing requirements and didn't respect technical complexity. Standups were tense, collaboration had broken down, and velocity was suffering. The CEO knew that if the teams couldn't work together, the company couldn't succeed.",
	// 	solution:
	// 		"We conducted confidential one-on-one interviews with team members to understand the underlying issues. We then facilitated a structured mediation session where both sides could air grievances in a productive way. We helped them establish new working agreements around how requirements are defined, how changes are handled, and how they'll communicate ongoing. We also coached the product and engineering leaders on how to rebuild trust and maintain the new norms.",
	// 	results:
	// 		"The teams went from avoiding each other to actively collaborating. Sprint velocity increased by 35% as the dysfunction cleared. More importantly, team members reported feeling heard and respected for the first time in months. The working agreements they established have held for over a year, and the relationship between product and engineering is now a competitive advantage for FastGrowth.",
	// 	testimonial: {
	// 		quote: "The tension was killing our culture and our product. Equal Sons created space for real conversation and helped us find a path forward. We're finally working as one team.",
	// 		author: "Alex Rivera",
	// 		title: "CEO, FastGrowth Startup",
	// 	},
	// 	images: {
	// 		hero: "/img/case-studies/conflict-resolution-hero.jpg",
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 10,
	// 	slug: "conference-keynote-series",
	// 	title: "Technology Leadership Keynote Series",
	// 	client: "TechLeaders Conference",
	// 	pillar: "share",
	// 	serviceTags: ["public-speaking"],
	// 	shortDescription:
	// 		"Keynote series on product strategy that received top ratings and drove event attendance.",
	// 	challenge:
	// 		"TechLeaders Conference needed keynote speakers who could deliver real value to their audience of CTOs and engineering leaders, not just corporate pitches. They wanted speakers who had been in the trenches, understood the challenges their audience faced, and could share actionable insights. They'd been burned by speakers who looked good on paper but delivered generic content.",
	// 	solution:
	// 		"We developed a custom keynote on 'Strategic Technology Decisions: When to Build, Buy, or Partner' based on real experiences helping companies navigate these critical choices. The talk included specific frameworks attendees could use, war stories that illustrated the principles, and honest reflections on what works and what doesn't. We engaged the audience throughout with interactive elements and made ourselves available for Q&A after the session.",
	// 	results:
	// 		"The keynote received the highest ratings of any session at the conference. Attendees specifically mentioned the actionable frameworks and authentic storytelling in their feedback. The conference organizers brought us back for two subsequent events and recommended us to other conference organizers. More importantly, several attendees reached out to discuss applying the concepts to their specific situations.",
	// 	images: {
	// 		hero: "/img/case-studies/keynote-series-hero.jpg",
	// 		gallery: ["/img/case-studies/keynote-series-1.jpg"],
	// 	},
	// 	featured: true,
	// },
	// {
	// 	id: 11,
	// 	slug: "leadership-workshop-series",
	// 	title: "Engineering Leadership Workshop Series",
	// 	client: "ScaleUp Tech",
	// 	pillar: "share",
	// 	serviceTags: ["workshops-training", "team-alignment"],
	// 	shortDescription:
	// 		"Custom workshop series that elevated engineering managers into strategic leaders.",
	// 	challenge:
	// 		"ScaleUp Tech had promoted several senior engineers into management roles as the company grew. These new managers were technically excellent but struggled with the people side of leadership—giving feedback, coaching, delegating, and thinking strategically. The company needed to invest in developing these managers quickly, but generic leadership training didn't address the specific challenges of engineering leadership.",
	// 	solution:
	// 		"We designed a 6-session workshop series tailored to engineering managers. Each session focused on a critical leadership skill (feedback, coaching, delegation, strategy) with a mix of teaching, discussion, and practice. We used real scenarios from their organization, incorporated peer learning, and gave managers homework to apply concepts between sessions. We also offered 1-on-1 coaching for managers who wanted additional support.",
	// 	results:
	// 		"The workshop series transformed ScaleUp's engineering management capability. Managers reported feeling more confident in their roles and had concrete tools for handling common challenges. Their teams noticed the improvement—employee engagement scores for engineering increased significantly. Several managers specifically credited the workshops with breakthroughs in their leadership approach. ScaleUp has now made the program part of their standard management onboarding.",
	// 	images: {
	// 		hero: "/img/case-studies/workshop-series-hero.jpg",
	// 	},
	// 	featured: false,
	// },
	// {
	// 	id: 12,
	// 	slug: "remote-team-communication",
	// 	title: "Remote Team Communication Framework",
	// 	client: "DistributedCo",
	// 	pillar: "share",
	// 	serviceTags: ["team-alignment", "facilitation-mediation"],
	// 	shortDescription:
	// 		"Communication framework that eliminated meeting overload and improved async collaboration.",
	// 	challenge:
	// 		"DistributedCo went fully remote during the pandemic and never established effective communication practices. They defaulted to endless Zoom meetings that left everyone exhausted and still unclear on priorities. Async communication was chaotic—information lived in Slack threads, Google Docs, and email with no clear system. The team was working harder than ever but felt less aligned.",
	// 	solution:
	// 		"We designed a comprehensive communication framework tailored to their remote context. This included meeting cadences (which meetings to have and which to replace with async), decision-making protocols (how decisions get made and communicated), and information architecture (where different types of information live). We facilitated workshops to introduce the framework, helped them implement it gradually, and refined based on feedback.",
	// 	results:
	// 		"Meeting time decreased by 40% while team alignment improved dramatically. The communication framework gave everyone clarity on how to share information, make decisions, and stay connected without constant meetings. Team satisfaction scores increased significantly, and several team members mentioned the framework as a key reason they stayed through a competitive hiring market. DistributedCo now shares their communication practices as a recruiting advantage.",
	// 	images: {
	// 		hero: "/img/case-studies/remote-communication-hero.jpg",
	// 	},
	// 	featured: false,
	// },
];

// Helper functions
export const getCaseStudiesByPillar = (
	pillar: "build" | "lead" | "share",
): ICaseStudy[] => {
	return caseStudies.filter((study) => study.pillar === pillar);
};

export const getCaseStudyBySlug = (slug: string): ICaseStudy | undefined => {
	return caseStudies.find((study) => study.slug === slug);
};

export const getFeaturedCaseStudies = (): ICaseStudy[] => {
	return caseStudies.filter((study) => study.featured);
};

export const getCaseStudiesByService = (serviceSlug: string): ICaseStudy[] => {
	return caseStudies.filter((study) => study.serviceTags.includes(serviceSlug));
};

export const getRelatedCaseStudies = (
	currentStudy: ICaseStudy,
): ICaseStudy[] => {
	// Find case studies with overlapping service tags or same pillar
	return caseStudies
		.filter((study) => {
			if (study.id === currentStudy.id) return false;
			// Check if there are overlapping service tags
			const hasOverlap = study.serviceTags.some((tag) =>
				currentStudy.serviceTags.includes(tag),
			);
			return hasOverlap || study.pillar === currentStudy.pillar;
		})
		.slice(0, 3);
};
