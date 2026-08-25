import bbgbBooksImage from "../assets/images/work/bbgbbooks.png?responsive";
import buddyImage from "../assets/images/work/buddy.png?responsive";
import coffitivityFinancesImage from "../assets/images/work/coffitivity-finances.png?responsive";
import coffitivityNewCafesImage from "../assets/images/work/coffitivity-new-cafes.png?responsive";
import coffitivityNewImage from "../assets/images/work/coffitivity-new.png?responsive";
import coffitivityOldImage from "../assets/images/work/coffitivity-old.png?responsive";
import hicPortalImage from "../assets/images/work/hicportal.png?responsive";
import painless1099AccountImage from "../assets/images/work/painless1099-account.png?responsive";
import painless1099Image from "../assets/images/work/painless1099.png?responsive";
import roundlyxImage from "../assets/images/work/roundlyx.png?responsive";
import somethingVintageImage from "../assets/images/work/something-vintage.png?responsive";
import type { ResponsiveImageSource } from "../components/responsive-image";

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
		hero: ResponsiveImageSource;
		gallery?: ResponsiveImageSource[];
	};
	featured: boolean;
}

export const caseStudies: ICaseStudy[] = [
	// BUILD PILLAR CASE STUDIES
	{
		id: 1,
		slug: "buddy-technology-api-consolidation",
		title: "API Consolidation & Platform Modernization",
		client: "Buddy Technology",
		pillar: "build",
		serviceTags: ["app-development", "web-development"],
		shortDescription:
			"Unified two generations of legacy API services into a single, modular platform — reducing backend footprint by 50% and enabling faster feature development.",
		challenge:
			"Buddy Technology had evolved through multiple pivots, leaving them with two concurrent versions of their core API services. Each version reflected different business models and technical decisions, creating confusion for developers, duplicated logic, and mounting maintenance overhead. As they prepared for their next phase of growth, they needed a unified foundation and not another layer on top of legacy complexity.",
		solution:
			"We embedded with Buddy's team over four months to consolidate their platform. The work started with understanding their business evolution across previous versions and defining what the unified system needed to support going forward. We redesigned their core services using Clean Architecture, wrapping routes, business logic, and integrations into dedicated modules. This made the system testable, composable, and ready for future changes. Teams could swap services, A/B test features, or extend functionality without untangling legacy dependencies. We then executed an incremental migration from both legacy versions, preserving data integrity while unifying their stack (Express, TypeScript, MongoDB, DynamoDB, S3, ECS, and Lambda) across major versions.",
		results:
			"Buddy launched with a single, stable API platform that reduced their backend footprint by over 50%. The modular architecture eliminated the cognitive overhead of maintaining multiple systems and positioned their team to build faster. New features that once required navigating version differences could now be developed against a consistent, well-documented codebase. The foundation was set for their next chapter.",
		testimonial: {
			quote:
				"Writing code is the easy part. Architecting, documenting, executing, and testing is the real work of development and Justin from Equal Sons excels at it!",
			author: "David Vogeleer",
			title: "CTO, Buddy Technology",
		},
		images: {
			hero: buddyImage,
			gallery: [buddyImage],
		},
		featured: true,
	},
	{
		id: 2,
		slug: "coffitivity-infrastructure-modernization",
		title: "Infrastructure Modernization for Global Scale",
		client: "Coffitivity",
		pillar: "build",
		serviceTags: ["app-development", "web-development"],
		shortDescription:
			"Rebuilt a decade-old productivity platform on modern edge infrastructure — cutting costs by 50% and reducing latency up to 80% for international users.",
		challenge:
			"Coffitivity has served over 50,000 unique visitors monthly since launching in 2013, but its infrastructure hadn't evolved with its audience. The platform ran on the same stack since 2015: a single DigitalOcean box running Node v8, serving both frontend and backend from Express. It worked, but just barely. With 57% of traffic coming from outside the US, international users faced sluggish load times. And the aging foundation made it nearly impossible to build new features. Every change risked breaking something. Coffitivity didn't need a patch; it needed a new foundation.",
		solution:
			"Over six months, we redesigned Coffitivity's architecture from the ground up. The backend moved to Cloudflare Workers with KV store for edge caching, distributing the service globally and allowing it to scale with demand rather than sit idle on a fixed server. Reduced bandwidth transfer costs to $0 by leveraging Cloudflare's R2 free egress pricing. The frontend was rebuilt in React 19 and deployed via Cloudflare Pages for fast, reliable delivery worldwide. The goal wasn't just modernization, it was creating infrastructure that could support growth worldwide without breaking the bank.",
		results:
			"The rebuilt platform cut hosting costs by 50% while dramatically improving performance. International users, the majority of Coffitivity's audience, saw latency reductions of up to 80% in select markets. More importantly, Coffitivity now has a foundation built for what's next: new features, better experiences, and sustainable growth.",
		testimonial: {
			quote:
				"Coffitivity is an Equal Sons venture. We rebuilt our own platform using the same approach we bring to every client: modernize the foundation so you can focus on growth, not maintenance.",
			author: "Justin Kauszler",
			title: "Co-Founder, Coffitivity & Managing Partner, Equal Sons",
		},
		images: {
			hero: coffitivityNewImage,
			gallery: [
				coffitivityNewImage,
				coffitivityNewCafesImage,
				coffitivityOldImage,
			],
		},
		featured: true,
	},
	{
		id: 3,
		slug: "coffitivity-product-repositioning",
		title: "Product Repositioning & Business Turnaround",
		client: "Coffitivity",
		pillar: "lead",
		serviceTags: ["product-positioning", "marketing-strategy"],
		shortDescription:
			"Transformed a beloved but unprofitable productivity platform from near-shutdown to sustainable growth—increasing revenue by over 3,200% in one year through customer research, strategic repositioning, and principled product decisions.",
		challenge:
			"Coffitivity had been running at a loss for years. Despite a loyal user base and a product people genuinely loved, annual revenue had dwindled to under $600. The service was on the verge of shutdown. Either close it down or subsidize it indefinitely. Neither option was sustainable. The product wasn't broken, but the business model was. Coffitivity needed more than a fix; it needed a new vision.",
		solution:
			"We started where every turnaround should start: listening. Through extensive customer interviews and discovery, we learned what users valued, where they struggled, and what they'd pay for. From those insights, we built a roadmap, and not just features, but of a new business strategy. We sourced new content, reimagined how users would consume the product, and restructured the service offerings entirely. Along the way, we made a critical decision: we removed ad-based interruptions designed to push users toward paid subscriptions. It was generating friction, not revenue, and it ran counter to Coffitivity's core mission of helping people focus. Instead, we introduced a daily time limit for free users and created flexible plans for those who wanted simplicity over extras. Every change was informed by real feedback, tested incrementally, and measured against what actually moved the needle.",
		results:
			"Within twelve months, Coffitivity went from under $600 in annual revenue to over $18,000 a 3,200% increase. More importantly, the business is now sustainable and positioned for continued growth, tracking toward at least another 300% increase in the coming year. The turnaround wasn't a single big bet. It was the result of listening, iterating, and making principled decisions (even when that meant removing features instead of adding them). Coffitivity now has a clear path forward, built on a model that aligns with its mission and its users.",
		testimonial: {
			quote:
				"The best product decisions come from listening, not guessing. We rebuilt Coffitivity's business the same way we approach every client engagement: start with real conversations, make principled choices, and iterate until it works.",
			author: "Justin Kauszler",
			title: "Co-Founder, Coffitivity & Managing Partner, Equal Sons",
		},
		images: {
			hero: coffitivityNewImage,
			gallery: [coffitivityFinancesImage],
		},
		featured: false,
	},
	{
		id: 4,
		slug: "hic-innovation-management",
		title: "Innovation Management Platform for Healthcare",
		client: "VCU Health - Health Innovation Consortium",
		pillar: "build",
		serviceTags: ["mvp-creation", "technology-strategy"],
		shortDescription:
			"Designed and built a custom platform to capture, evaluate, and fund staff-driven innovation across a major health system — replacing costly off-the-shelf tools and streamlining the path from idea to investment.",
		challenge:
			"The Health Innovation Consortium (HIC) at VCU Health had an ambitious mandate: identify promising innovations from staff across the health system, evaluate their feasibility, and decide where to invest support. But there was no clear process for capturing ideas at scale, routing them to the right reviewers, or aggregating feedback into actionable decisions. Off-the-shelf tools didn't fit the workflow, and licensing costs added up fast. HIC needed a system built for how they actually worked.",
		solution:
			"We embedded with the HIC team over twelve months to design both the process and the platform. First, we mapped out the full innovation lifecycle: from initial idea capture through advisor review to investment decision. Then we evaluated existing tools against those requirements and determined that building custom was the right call. Equal Sons designed and developed an application that allowed faculty and staff to submit concepts, routed submissions to identified industry advisors for review, and aggregated those evaluations into a clear picture for investment committees. The result was a streamlined system that matched how HIC needed to operate, not how a vendor thought they should.",
		results:
			"The platform saved HIC thousands in licensing fees while enabling them to manage innovation funding at scale. Staff had a clear path to submit ideas, advisors had a structured review process, and leadership had the aggregated insights needed to make investment decisions. Supported companies of HIC went on to raise more than $2.35M in funding. The program was later discontinued when COVID-19 shifted the health system's priorities, but the work demonstrated what's possible when process design and custom tooling come together to solve a real operational challenge.",
		images: {
			hero: hicPortalImage,
		},
		featured: false,
	},
	{
		id: 8,
		slug: "svr-workflow-automation",
		title: "Workflow Automation & Cost Reduction for Event Rentals",
		client: "Something Vintage Rentals",
		pillar: "build",
		serviceTags: ["web-development", "systems-integration"],
		shortDescription:
			"Replaced a costly third-party automation stack with a custom API — cutting workflow costs by 90% while maintaining the efficiency gains that had already reduced a near-full-time role to 15% of one person's workload.",
		challenge:
			"Something Vintage Rentals runs on an inventory management system that handles invoices and customer records, but stops short of the operational details that actually make deliveries and will-calls happen. Collecting delivery information, coordinating with customers, gathering signatures, and creating pull orders used to consume nearly a full-time employee's workload: endless emails, spreadsheets, and manual tracking. We'd previously solved this with a Zapier-based automation chain connecting Jotform, Google Sheets, Sendgrid, and PDF generators. It worked beautifully, reducing that role to less than 15% of one person's time. But as SVR's order volume grew, so did their Zapier bill, eventually exceeding $3,500 per year just to maintain the workflow.",
		solution:
			"We came back in to cut the dependency. The goal was simple: keep the efficiency gains, eliminate the cost. We built a custom API that took over the bulk of the work Zapier had been handling: form processing, customer communication, document generation, and order tracking. Zapier remained as the interface with their inventory management system, but everything downstream now ran through our lightweight, purpose-built tool. The whole project took three months across both phases.",
		results:
			"SVR's workflow costs dropped from $3,500 per year to $25 per month, a 90% reduction. The operational efficiency stayed intact: what once required nearly a full-time employee still runs at a fraction of that. And now they have a system that scales with their business without scaling their software bill alongside it.",
		images: {
			hero: somethingVintageImage,
			gallery: [somethingVintageImage],
		},
		featured: false,
	},
	{
		id: 5,
		slug: "roundlyx-mvp",
		title: "Simulated Crypto Trading MVP",
		client: "RoundlyX",
		pillar: "build",
		serviceTags: ["mvp-creation", "app-development"],
		shortDescription:
			"Built a lean MVP API for a simulated crypto trading platform in three months — giving founders the validation they needed before committing to a larger investment.",
		challenge:
			"RoundlyX (then Coin Savage) had a concept for a simulated crypto trading platform where users could practice buying and selling without real money on the line. They'd built out their website and marketing pages, but needed help with the core engine: the business logic that would track markets, simulate trades, and rank users on a leaderboard. They didn't need a full production system, they needed something fast and functional to test whether the idea had legs.",
		solution:
			"We came in to build exactly that. Over three months, we developed an MVP API using Ruby on Rails, PostgreSQL, and Redis. The system integrated with CoinMarketCap's API to track real-time market data, processed simulated buy and sell orders from users, and maintained a live leaderboard based on portfolio performance. The focus was speed and validation, not perfection. The engagement worked so well that I joined as both a contractor and equity partner, invested in the outcome, not just the hours.",
		results:
			"The MVP did exactly what it was supposed to do: give the founders a working product to test their thesis quickly and cheaply. They learned what they needed to learn, and ultimately pivoted, but that's the point. An MVP isn't about building forever; it's about finding out fast whether you're on the right track. RoundlyX saved significant time and capital by validating before over-investing, and the lean approach gave them room to evolve.",
		testimonial: {
			quote:
				"As a founder, finding someone I could trust with our technical foundation was key. Justin at Equal Sons delivered exactly what we needed for our MVP and proved he was invested in our vision. Having him come on as both a contractor and equity partner made perfect sense.",
			author: "Drew Elliott",
			title: "Founder, RoundlyX",
		},
		images: {
			hero: roundlyxImage,
			gallery: [roundlyxImage],
		},
		featured: false,
	},
	{
		id: 6,
		slug: "painless1099-banking-platform",
		title: "Fintech Banking Platform for Independent Contractors",
		client: "Painless1099",
		pillar: "lead",
		serviceTags: ["technology-strategy", "product-positioning"],
		shortDescription:
			"Led product strategy for a fintech platform that helped independent contractors automatically save for taxes — raising $500K in funding, opening 1,200+ accounts, and processing $10M in assets quarterly.",
		challenge:
			"Independent contractors face a unique financial burden: unlike traditional employees, no one withholds taxes for them. Every paycheck arrives whole, and it's on them to set aside the right amount or face a painful bill at tax time. Painless1099 set out to solve this with a bold mission: create a banking product that automatically saved tax money in real time, making the process seamless and invisible. The challenge was finding the right partners and positioning to bring that vision to market.",
		solution:
			"We led product strategy over eighteen months to turn the concept into a working business. The first critical step was finding the right banking infrastructure partner. After evaluating options, we partnered with Q2, a bank API provider that gave us the rails to build on. From there, we designed a service that monitored users' income as it arrived and automatically moved a percentage into tax savings: no manual transfers, no guesswork. The product positioning centered on eliminating the anxiety of tax season for contractors, turning a dreaded annual event into a non-issue.",
		results:
			"Painless1099 raised $500K from 43North, opened over 1,200 bank accounts, and processed $10M in held assets each quarter. Contractors finally had a tool that worked the way their finances actually did. The business ultimately closed when operating costs outpaced revenue, but the product proved the concept: seamless, automated tax savings resonated with an underserved market. The lessons from building and scaling a fintech product from zero inform how we approach product strategy today.",
		testimonial: {
			quote:
				"Painless1099 was an Equal Sons venture. We took it from concept to $500K raised and thousands of users—and learned firsthand what it takes to build, scale, and make hard calls when the numbers don't work.",
			author: "Justin Kauszler",
			title: "Co-Founder, Painless1099 & Managing Partner, Equal Sons",
		},
		images: {
			hero: painless1099Image,
			gallery: [painless1099Image, painless1099AccountImage],
		},
		featured: true,
	},
	{
		id: 7,
		slug: "bbgb-books-migration",
		title: "Seamless Site Migration for Design Partners",
		client: "Boon",
		pillar: "build",
		serviceTags: ["web-development"],
		shortDescription:
			"Handled the technical last mile for a designer's client project — migrating data and DNS in a single day with zero downtime or data loss.",
		challenge:
			"Designers often get 99% of the way to launch. The visuals are polished, the site is built, the client is ready, but that final technical step sits just outside their expertise. For Boon, a designer working with BBGB Books, that last mile was DNS migration. The new site was ready, but switching over without downtime or data loss required a level of infrastructure confidence she didn't need to have. That's where we came in.",
		solution:
			"This was a quick, focused engagement. Exactly the kind of work we do regularly for creative partners. We migrated the existing site data, handled the DNS cutover, and ensured continuity of business throughout. No learning curve for the designer, no risk to the client, no interruption to customers. One day, start to finish.",
		results:
			"BBGB Books launched on their new site with zero downtime and no data loss. Boon delivered a complete project to her client without needing to become a DNS expert. This kind of last-mile partnership is something we do often. Designers and agencies bring us in when they need technical confidence without the overhead of hiring or learning. It's a small engagement, but it's exactly the kind of support that makes creative work sustainable.",
		images: {
			hero: bbgbBooksImage,
			gallery: [bbgbBooksImage],
		},
		featured: false,
	},
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
