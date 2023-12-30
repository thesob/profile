import { z, defineCollection } from "astro:content";

const blogSchema = z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    badge: z.string().optional(),
    tags: z.array(z.string()).optional()
});

const projectSchema = z.object({
    title: z.string(),
    description: z.string(),
    visit_link_label: z.string(),
    visit_link: z.string().optional(),
    updatedDate: z.coerce.date(),
    badge: z.string().optional(),
    heroImage: z.string().optional(),
    tags: z.array(z.string()).optional()
});

export type BlogSchema = z.infer<typeof blogSchema>;
export type ProjectSchema = z.infer<typeof projectSchema>;

const blogCollection = defineCollection({ schema: blogSchema });
const projectCollection = defineCollection({ schema: projectSchema });

export const collections = {
    'blog': blogCollection,
    'project': projectCollection
}