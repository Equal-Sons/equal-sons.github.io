export interface IService {
	id: number;
	slug: string;
	pillar: "build" | "lead" | "share";
	pillarName: string;
	title: string;
	tagline: string;
	briefDescription: string;
	detailedDescription: string;
	keyFeatures: string[];
	process: {
		step: number;
		title: string;
		description: string;
	}[];
	benefits: string[];
	relatedCaseStudies: string[]; // slugs
	imageSrc?: string;
}

export const PILLAR_INFO = {
	build: {
		name: "BUILD",
		tagline: "You have the idea. We have the expertise.",
		description:
			"Ideas need infrastructure. We design and develop the digital products that bring your vision to life. From responsive websites to full-scale applications to the integrations that connect your systems. Whether you're validating a concept with an MVP or scaling what's already working, we build with intention, craft, and an eye toward what comes next.",
		services: ["web-development", "app-development", "mvp-creation", "systems-integration"],
	},
	lead: {
		name: "LEAD",
		tagline: "Knowing where you're going changes how you get there.",
		description:
			"Direction matters as much as motion. We partner with leadership teams to define the path forward. We align technology decisions with business objectives, craft go-to-market strategies that resonate, and position your offerings to own their rightful place in the market. Strategic clarity that cuts through noise and creates real momentum.",
		services: [
			"technology-strategy",
			"marketing-strategy",
			"product-positioning",
			"business-alignment",
		],
	},
	share: {
		name: "SHARE",
		tagline: "What you know is valuable. How you share it sets you apart.",
		description:
			"Great work deserves a great voice. We facilitate the conversations that align teams, mediate the decisions that move projects forward, and take the stage to share insights that matter. From boardrooms to conferences, we help you find the words, and the confidence, to lead out loud.",
		services: [
			"facilitation-mediation",
			"public-speaking",
			"workshops-training",
			"team-alignment",
		],
	},
};

export const services: IService[] = [
	// BUILD PILLAR
	{
		id: 1,
		slug: "web-development",
		pillar: "build",
		pillarName: "BUILD",
		title: "Web Development",
		tagline: "Custom websites built for performance and scale",
		briefDescription:
			"Responsive, performant websites that represent your brand and drive business results.",
		detailedDescription:
			"We build custom websites that combine beautiful design with robust functionality. From marketing sites to complex web applications, we create digital experiences that perform across all devices and scale with your business. Our approach prioritizes user experience, performance, and maintainability—ensuring your website is an asset, not a burden.",
		keyFeatures: [
			"Responsive design optimized for all devices",
			"Performance-first architecture",
			"Modern frameworks (React, Next.js, Astro)",
			"SEO and accessibility built-in",
			"Content management systems",
			"E-commerce capabilities",
			"API integrations",
			"Analytics and tracking setup",
		],
		process: [
			{
				step: 1,
				title: "Discovery & Planning",
				description:
					"We start by understanding your business goals, target audience, and technical requirements. We map out the site architecture, features, and technical approach.",
			},
			{
				step: 2,
				title: "Design & Prototyping",
				description:
					"We create wireframes and design mockups that reflect your brand and prioritize user experience. You'll see exactly what we're building before we write a single line of code.",
			},
			{
				step: 3,
				title: "Development & Testing",
				description:
					"We build your site using modern, maintainable code. Throughout development, we test across browsers and devices to ensure everything works perfectly.",
			},
			{
				step: 4,
				title: "Launch & Support",
				description:
					"We handle deployment, monitoring, and provide ongoing support to keep your site running smoothly. We're here for the long term.",
			},
		],
		benefits: [
			"Built for scale from day one",
			"Technology decisions driven by business goals",
			"Hands-on partnership through launch and beyond",
			"Fast, secure, and maintainable code",
		],
		relatedCaseStudies: ["saas-platform-redesign"],
	},
	{
		id: 2,
		slug: "app-development",
		pillar: "build",
		pillarName: "BUILD",
		title: "App Development",
		tagline: "Full-scale applications that scale with your business",
		briefDescription:
			"Custom web and mobile applications built to solve complex business challenges.",
		detailedDescription:
			"We develop custom applications that transform how your business operates. Whether you need a customer-facing mobile app, an internal tool to streamline operations, or a complex enterprise system, we build software that's robust, scalable, and maintainable. We work in modern frameworks and prioritize clean architecture that makes future changes easy.",
		keyFeatures: [
			"Web and mobile application development",
			"Cross-platform solutions (React Native, Progressive Web Apps)",
			"Real-time data synchronization",
			"User authentication and authorization",
			"Cloud infrastructure setup (AWS, Azure, GCP)",
			"Database design and optimization",
			"Third-party API integrations",
			"Automated testing and CI/CD pipelines",
		],
		process: [
			{
				step: 1,
				title: "Requirements Analysis",
				description:
					"We dive deep into your business processes and user needs to define the application's features, workflows, and technical requirements.",
			},
			{
				step: 2,
				title: "Architecture Design",
				description:
					"We design a scalable system architecture that can grow with your business. This includes database design, API structure, and infrastructure planning.",
			},
			{
				step: 3,
				title: "Iterative Development",
				description:
					"We build in sprints, delivering working features regularly so you can see progress and provide feedback. This keeps the project on track and aligned with your vision.",
			},
			{
				step: 4,
				title: "Deployment & Scaling",
				description:
					"We deploy your application to production, set up monitoring and alerts, and work with you to scale as usage grows.",
			},
		],
		benefits: [
			"Custom development tailored to your exact needs",
			"Built for performance and reliability",
			"Clear communication throughout the project",
			"Long-term partnership mindset",
		],
		relatedCaseStudies: ["enterprise-workflow-app"],
	},
	{
		id: 3,
		slug: "mvp-creation",
		pillar: "build",
		pillarName: "BUILD",
		title: "MVP Creation",
		tagline: "Validate your idea with a focused, functional product",
		briefDescription:
			"Get to market quickly with a minimum viable product that tests your core assumptions.",
		detailedDescription:
			"You have an idea, and you need to validate it quickly. We help you build a focused MVP that tests your core hypothesis without over-engineering or wasting time on features you don't need yet. We prioritize speed to market while maintaining quality and building on a foundation that can scale when you're ready.",
		keyFeatures: [
			"Rapid prototyping and development",
			"Focus on core features that validate your hypothesis",
			"User feedback loops built-in",
			"Scalable architecture for future growth",
			"Cost-effective development approach",
			"Market-ready design and UX",
			"Analytics to measure success",
			"Clear roadmap for post-MVP iterations",
		],
		process: [
			{
				step: 1,
				title: "Concept Validation",
				description:
					"We work with you to identify your core value proposition and the minimum features needed to test it. We challenge assumptions and help you focus on what matters.",
			},
			{
				step: 2,
				title: "Rapid Development",
				description:
					"We build your MVP quickly using proven frameworks and patterns. You'll see progress weekly as we deliver working features.",
			},
			{
				step: 3,
				title: "User Testing",
				description:
					"We help you get your MVP in front of real users quickly, gather feedback, and iterate based on what you learn.",
			},
			{
				step: 4,
				title: "Scale or Pivot",
				description:
					"Based on user feedback and market response, we help you decide what to build next—whether that's scaling what works or pivoting to a new approach.",
			},
		],
		benefits: [
			"Get to market in weeks, not months",
			"Validate assumptions before major investment",
			"Built to scale when you're ready",
			"Partnership through the uncertainty",
		],
		relatedCaseStudies: ["startup-mvp-launch"],
	},
	{
		id: 4,
		slug: "systems-integration",
		pillar: "build",
		pillarName: "BUILD",
		title: "Systems Integration",
		tagline: "Connect your tools and automate your workflows",
		briefDescription:
			"Make your systems work together seamlessly with custom integrations and automation.",
		detailedDescription:
			"Your business uses dozens of tools, and they don't always play nicely together. We build custom integrations that connect your systems, automate repetitive tasks, and ensure data flows where it needs to go. From CRM integrations to custom APIs to workflow automation, we make your technology stack work for you.",
		keyFeatures: [
			"API development and integration",
			"CRM and marketing automation connections",
			"Payment gateway integration",
			"Data synchronization between systems",
			"Workflow automation (Zapier, Make, custom)",
			"Legacy system modernization",
			"Webhook setup and management",
			"Real-time data pipelines",
		],
		process: [
			{
				step: 1,
				title: "Systems Audit",
				description:
					"We map out your current tools, identify integration opportunities, and find workflows that can be automated.",
			},
			{
				step: 2,
				title: "Integration Design",
				description:
					"We design the data flows and connections between systems, ensuring reliability and proper error handling.",
			},
			{
				step: 3,
				title: "Development & Testing",
				description:
					"We build the integrations and test thoroughly to ensure data integrity and system stability.",
			},
			{
				step: 4,
				title: "Monitoring & Maintenance",
				description:
					"We set up monitoring to catch issues early and provide ongoing support as your systems evolve.",
			},
		],
		benefits: [
			"Eliminate manual data entry",
			"Reduce errors and improve data accuracy",
			"Save time with workflow automation",
			"Get better insights from connected data",
		],
		relatedCaseStudies: ["crm-integration-automation"],
	},

	// LEAD PILLAR
	{
		id: 5,
		slug: "technology-strategy",
		pillar: "lead",
		pillarName: "LEAD",
		title: "Technology Strategy",
		tagline: "Align your technology decisions with business goals",
		briefDescription:
			"Strategic technology leadership that connects technical decisions to business outcomes.",
		detailedDescription:
			"Technology should drive business value, not just solve technical problems. We partner with leadership teams to define technology strategies that align with business objectives. Whether you're a startup choosing your tech stack or an established company modernizing legacy systems, we provide the strategic guidance to make confident decisions.",
		keyFeatures: [
			"Technology roadmap development",
			"Architecture review and recommendations",
			"Build vs. buy analysis",
			"Tech stack selection and evaluation",
			"Legacy system modernization planning",
			"Vendor selection and evaluation",
			"Technical due diligence for acquisitions",
			"Fractional CTO services",
		],
		process: [
			{
				step: 1,
				title: "Business Alignment",
				description:
					"We start by understanding your business goals, growth plans, and challenges. Technology strategy must serve business strategy.",
			},
			{
				step: 2,
				title: "Current State Assessment",
				description:
					"We assess your current technology landscape, identifying strengths, gaps, and opportunities for improvement.",
			},
			{
				step: 3,
				title: "Strategy Development",
				description:
					"We develop a clear technology roadmap with priorities, timelines, and resource requirements. You'll know what to build, when, and why.",
			},
			{
				step: 4,
				title: "Execution Partnership",
				description:
					"We don't just deliver a deck and disappear. We partner with you through execution, providing ongoing guidance and course correction.",
			},
		],
		benefits: [
			"Strategy that connects to execution",
			"Leadership partnership, not outside advice",
			"Clarity over complexity",
			"Confident decision-making",
		],
		relatedCaseStudies: ["enterprise-tech-roadmap"],
	},
	{
		id: 6,
		slug: "marketing-strategy",
		pillar: "lead",
		pillarName: "LEAD",
		title: "Marketing Strategy",
		tagline: "Go-to-market strategies that resonate and drive results",
		briefDescription:
			"Strategic marketing planning that connects your offering to your ideal customers.",
		detailedDescription:
			"Great products need great marketing. We work with leadership teams to craft go-to-market strategies that resonate with your target audience and drive measurable business results. From positioning to messaging to channel strategy, we help you cut through the noise and create real momentum.",
		keyFeatures: [
			"Go-to-market strategy development",
			"Customer research and persona development",
			"Competitive analysis and differentiation",
			"Messaging framework and content strategy",
			"Channel strategy and optimization",
			"Marketing operations and tech stack",
			"Campaign planning and execution guidance",
			"Performance measurement and optimization",
		],
		process: [
			{
				step: 1,
				title: "Market Research",
				description:
					"We research your market, customers, and competitors to understand the landscape and identify opportunities.",
			},
			{
				step: 2,
				title: "Strategic Planning",
				description:
					"We develop your positioning, messaging, and channel strategy. You'll have a clear plan for reaching and converting your ideal customers.",
			},
			{
				step: 3,
				title: "Execution Framework",
				description:
					"We create the frameworks, templates, and processes your team needs to execute the strategy consistently.",
			},
			{
				step: 4,
				title: "Ongoing Optimization",
				description:
					"We work with you to measure results, learn from the data, and continuously improve your marketing effectiveness.",
			},
		],
		benefits: [
			"Strategy that drives action",
			"Clear differentiation in the market",
			"Messaging that resonates",
			"Measurable business impact",
		],
		relatedCaseStudies: ["saas-gtm-strategy"],
	},
	{
		id: 7,
		slug: "product-positioning",
		pillar: "lead",
		pillarName: "LEAD",
		title: "Product & Service Positioning",
		tagline: "Position your offerings to own their rightful place in the market",
		briefDescription:
			"Strategic positioning that differentiates your products and clarifies your value.",
		detailedDescription:
			"Positioning is the foundation of effective marketing. We help you define how your product or service fits in the market, who it's for, and why it matters. Clear positioning makes everything else easier—from marketing messaging to sales conversations to product decisions.",
		keyFeatures: [
			"Positioning strategy development",
			"Value proposition refinement",
			"Competitive differentiation",
			"Audience segmentation and targeting",
			"Messaging architecture",
			"Product naming and branding",
			"Launch positioning and strategy",
			"Repositioning for market shifts",
		],
		process: [
			{
				step: 1,
				title: "Market Analysis",
				description:
					"We analyze your market, competitors, and customer needs to understand the positioning landscape.",
			},
			{
				step: 2,
				title: "Differentiation Workshop",
				description:
					"We work with your team to identify what truly sets you apart and articulate your unique value.",
			},
			{
				step: 3,
				title: "Positioning Framework",
				description:
					"We create a clear positioning statement and messaging framework that guides all customer communication.",
			},
			{
				step: 4,
				title: "Implementation",
				description:
					"We help you roll out the new positioning across your website, sales materials, and marketing campaigns.",
			},
		],
		benefits: [
			"Positioning that differentiates and resonates",
			"Clarity that aligns your team",
			"Foundation for effective marketing",
			"Confidence in customer conversations",
		],
		relatedCaseStudies: ["product-repositioning"],
	},
	{
		id: 8,
		slug: "business-alignment",
		pillar: "lead",
		pillarName: "LEAD",
		title: "Strategic Business Alignment",
		tagline: "Align teams, clarify direction, and drive execution",
		briefDescription:
			"Strategic facilitation that aligns leadership teams and drives organizational clarity.",
		detailedDescription:
			"Strategy only works when everyone's aligned. We facilitate strategic planning sessions, leadership offsites, and alignment workshops that get teams on the same page. We help you clarify direction, prioritize initiatives, and create the clarity needed for confident execution.",
		keyFeatures: [
			"Strategic planning facilitation",
			"Leadership team alignment",
			"OKR and goal-setting workshops",
			"Prioritization frameworks",
			"Vision and mission development",
			"Change management support",
			"Cross-functional alignment",
			"Quarterly business reviews",
		],
		process: [
			{
				step: 1,
				title: "Pre-Session Interviews",
				description:
					"We talk with key stakeholders to understand the landscape, identify misalignments, and prepare an effective session agenda.",
			},
			{
				step: 2,
				title: "Facilitated Session",
				description:
					"We lead structured discussions that surface issues, build consensus, and create clarity. We keep things moving and productive.",
			},
			{
				step: 3,
				title: "Action Planning",
				description:
					"We translate decisions into clear action items with owners and deadlines. No ambiguity about what happens next.",
			},
			{
				step: 4,
				title: "Follow-Up & Accountability",
				description:
					"We check in to ensure commitments are being kept and provide support as issues arise.",
			},
		],
		benefits: [
			"Facilitation that moves teams forward",
			"Clarity that drives action",
			"Alignment across leadership",
			"Momentum that lasts",
		],
		relatedCaseStudies: ["leadership-strategic-planning"],
	},

	// SHARE PILLAR
	{
		id: 9,
		slug: "facilitation-mediation",
		pillar: "share",
		pillarName: "SHARE",
		title: "Facilitation & Mediation",
		tagline: "Navigate complexity and drive decisions that move work forward",
		briefDescription:
			"Professional facilitation that aligns teams and mediates the decisions that matter.",
		detailedDescription:
			"Some conversations require a neutral party who can guide discussion, surface issues, and drive toward decisions. We facilitate team meetings, mediate conflicts, and lead strategic discussions that move work forward. Whether you're navigating a difficult decision, aligning stakeholders, or breaking through a stalemate, we create the structure and clarity needed for progress.",
		keyFeatures: [
			"Meeting facilitation and design",
			"Conflict resolution and mediation",
			"Stakeholder alignment workshops",
			"Decision-making frameworks",
			"Retrospectives and team health checks",
			"Project kickoff facilitation",
			"Cross-functional collaboration sessions",
			"Virtual and in-person facilitation",
		],
		process: [
			{
				step: 1,
				title: "Session Design",
				description:
					"We work with you to understand the situation, objectives, and participants. We design a session structure that will achieve your goals.",
			},
			{
				step: 2,
				title: "Facilitation",
				description:
					"We lead the session with structure and flexibility, ensuring everyone's heard and the group moves toward clear decisions.",
			},
			{
				step: 3,
				title: "Documentation",
				description:
					"We capture decisions, action items, and key takeaways in a clear format that keeps everyone accountable.",
			},
			{
				step: 4,
				title: "Follow-Up",
				description:
					"We check in after the session to ensure commitments are being kept and provide additional support if needed.",
			},
		],
		benefits: [
			"Communication that drives action",
			"Neutral party that builds trust",
			"Structure that creates clarity",
			"Decisions that stick",
		],
		relatedCaseStudies: ["team-conflict-resolution"],
	},
	{
		id: 10,
		slug: "public-speaking",
		pillar: "share",
		pillarName: "SHARE",
		title: "Public Speaking & Keynotes",
		tagline: "Take the stage with confidence and deliver messages that resonate",
		briefDescription:
			"Engaging keynotes and presentations that educate, inspire, and drive action.",
		detailedDescription:
			"Great ideas deserve a great voice. We deliver keynotes, conference talks, and presentations that connect with audiences and drive real impact. Whether you need a speaker for your company event, conference, or leadership offsite, we bring insights on product development, technology strategy, and leadership that audiences remember and act on.",
		keyFeatures: [
			"Conference keynotes and talks",
			"Corporate event speaking",
			"Leadership and management topics",
			"Technology and product development insights",
			"Entrepreneurship and startup experiences",
			"Custom content tailored to your audience",
			"Interactive and engaging presentation style",
			"Virtual and in-person delivery",
		],
		process: [
			{
				step: 1,
				title: "Audience Research",
				description:
					"We learn about your audience, event, and objectives to craft a talk that resonates and delivers value.",
			},
			{
				step: 2,
				title: "Content Development",
				description:
					"We develop custom content with clear takeaways, compelling stories, and actionable insights tailored to your needs.",
			},
			{
				step: 3,
				title: "Delivery",
				description:
					"We bring energy, authenticity, and professionalism to the stage. Our goal is to educate and inspire, not just fill time.",
			},
			{
				step: 4,
				title: "Follow-Up",
				description:
					"We provide slides, resources, and can offer follow-up Q&A or consultation for attendees who want to go deeper.",
			},
		],
		benefits: [
			"Speaking that connects and inspires",
			"Content tailored to your audience",
			"Professional delivery with personality",
			"Insights that create real value",
		],
		relatedCaseStudies: ["conference-keynote-series"],
	},
	{
		id: 11,
		slug: "workshops-training",
		pillar: "share",
		pillarName: "SHARE",
		title: "Workshops & Training",
		tagline: "Build capabilities that last through hands-on workshops",
		briefDescription:
			"Interactive workshops that transfer real skills and build team capabilities.",
		detailedDescription:
			"Learning happens through doing. We design and deliver workshops that build team capabilities in areas like product strategy, technology leadership, and effective communication. Our workshops are highly interactive, tailored to your context, and focused on transferring skills that last beyond the session.",
		keyFeatures: [
			"Custom workshop design",
			"Product management and strategy",
			"Technology leadership and decision-making",
			"Effective communication and facilitation",
			"Team collaboration and alignment",
			"Design thinking and innovation",
			"Hands-on exercises and real scenarios",
			"Post-workshop resources and support",
		],
		process: [
			{
				step: 1,
				title: "Needs Assessment",
				description:
					"We understand your team's current capabilities, learning goals, and challenges to design an effective workshop.",
			},
			{
				step: 2,
				title: "Workshop Design",
				description:
					"We create a custom workshop with the right mix of teaching, exercises, and discussion tailored to your team.",
			},
			{
				step: 3,
				title: "Delivery",
				description:
					"We facilitate an engaging, interactive session that builds real skills through practice and feedback.",
			},
			{
				step: 4,
				title: "Reinforcement",
				description:
					"We provide resources, templates, and follow-up support to help your team apply what they learned.",
			},
		],
		benefits: [
			"Training that transfers real capability",
			"Hands-on learning, not just lectures",
			"Custom content for your context",
			"Skills that last beyond the workshop",
		],
		relatedCaseStudies: ["leadership-workshop-series"],
	},
	{
		id: 12,
		slug: "team-alignment",
		pillar: "share",
		pillarName: "SHARE",
		title: "Team Alignment & Communication",
		tagline: "Build communication practices that keep teams aligned and moving",
		briefDescription:
			"Communication frameworks that create clarity and drive consistent execution.",
		detailedDescription:
			"Great teams communicate well. We help you establish communication practices, alignment rituals, and decision-making frameworks that keep teams on the same page. From team charters to meeting cadences to status updates, we build the communication infrastructure that drives consistent execution.",
		keyFeatures: [
			"Team charter and working agreements",
			"Communication framework design",
			"Meeting design and optimization",
			"Status reporting and transparency systems",
			"Async communication practices",
			"Decision-making frameworks",
			"Team retrospectives and improvement",
			"Onboarding and team integration",
		],
		process: [
			{
				step: 1,
				title: "Communication Audit",
				description:
					"We assess how your team currently communicates, identifying gaps and opportunities for improvement.",
			},
			{
				step: 2,
				title: "Framework Design",
				description:
					"We design communication practices tailored to your team's size, context, and challenges.",
			},
			{
				step: 3,
				title: "Implementation",
				description:
					"We help you roll out new practices, facilitating initial sessions and adjusting based on feedback.",
			},
			{
				step: 4,
				title: "Iteration",
				description:
					"We check in regularly to refine practices, address issues, and ensure the frameworks are working.",
			},
		],
		benefits: [
			"Clarity that drives execution",
			"Alignment without excessive meetings",
			"Communication that scales with growth",
			"Practices that stick",
		],
		relatedCaseStudies: ["remote-team-communication"],
	},
];

// Helper functions for filtering services
export const getServicesByPillar = (pillar: "build" | "lead" | "share"): IService[] => {
	return services.filter((service) => service.pillar === pillar);
};

export const getServiceBySlug = (slug: string): IService | undefined => {
	return services.find((service) => service.slug === slug);
};

export const getRelatedServices = (currentService: IService): IService[] => {
	return services
		.filter((service) => service.pillar === currentService.pillar && service.id !== currentService.id)
		.slice(0, 3);
};
