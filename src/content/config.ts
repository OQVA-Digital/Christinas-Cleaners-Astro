import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		prompt: z.string(),
		// Transform string to Date object
		pubDate: z
			.string()
			.or(z.date())
			.transform((val) => new Date(val)),
		updatedDate: z
			.string()
			.optional()
			.transform((str) => (str ? new Date(str) : undefined)),
		heroImage: z.string().optional(),
	}),
});


const testimonialsCollection = defineCollection({
    type: 'content', // v2.5.0 and later
    schema: z.object({
        avatar: z.string(),
        name: z.string(),
        location: z.string().optional(),
        paragraph01: z.string().optional(),
        paragraph02: z.string().optional(),
        paragraph03: z.string().optional(),
    }),
});

export const collections = { 
	'blog': blog,
	'testimonials': testimonialsCollection
};
