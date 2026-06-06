import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const posts = defineCollection({
	schema: z.object({
		title: z.string(),
		date: z.coerce.date(),
		excerpt: z.string(),
		category: z.string().default('Ensayo'),
		url: z.string().optional(),
	}),
});

const projects = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		url: z.string().optional(),
		image: z.string().optional(),
		imageSize: z.enum(['tall', 'short', 'wide']).optional(),
		placeholder: z.string().optional(),
		section: z.string(),
		sectionColor: z.string(),
		subsection: z.string(),
		tags: z.array(z.string()).default([]),
		order: z.number().default(99),
	}),
});

const hobbies = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string().optional(),
		image: z.string().optional(),
		imageSize: z.enum(['tall', 'short', 'wide']).optional(),
		placeholder: z.string().optional(),
		section: z.string(),
		sectionColor: z.string(),
		subsection: z.string().optional(),
		stage: z.string().optional(),
		order: z.number().default(99),
	}),
});

const talks = defineCollection({
	schema: z.object({
		title: z.string(),
		desc: z.string(),
		venue: z.string(),
		year: z.string(),
		image: z.string().optional(),
		placeholder: z.string().optional(),
		url: z.string().optional(),
		order: z.number().default(99),
	}),
});

export const collections = { blog, posts, projects, hobbies, talks };
