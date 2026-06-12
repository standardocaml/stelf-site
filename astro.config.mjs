// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';
import rehypeSlug from 'rehype-slug';  
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax';  
import { unified } from '@astrojs/markdown-remark';
// https://astro.build/config
export default defineConfig({
	markdown: {
    processor: unified({
		remarkPlugins: [remarkMath],
      rehypePlugins: [rehypeSlug, rehypeMathjax],
    }), 
  },
	integrations: [
		starlight({
			title: 'STELF',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [{ autogenerate: { directory: 'guides' } }] },
					
				
				{
					label: 'Reference',
					items: [{ autogenerate: { directory: 'reference' } }],
				},
			],
		}),
		mdx()
	], 
});
 