import {defineType, defineField, defineArrayMember} from 'sanity'

export const SiteSettings = defineType({
  type: 'document',
  name: 'siteSettings',
  title: 'Site Settings',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      description:
        'Backup title The title of the page, displayed in the browser tab and used for SEO.',
    }),
    defineField({
      type: 'string',
      name: 'description',
      description: 'Backup description of the page, used for SEO purposes if not set per page.',
    }),
    defineField({
      type: 'string',
      name: 'tagline',
      description: 'Site tagline, displayed in the header and used for SEO.',
    }),
  ],
})
