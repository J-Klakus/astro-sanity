import {defineType, defineField, defineArrayMember} from 'sanity'

export const HeroVideo = defineType({
  type: 'object',
  name: 'HeroVideo',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'HeroVideo Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'AI-driven ATS & CRM developed for recruitment agencies',
    }),
    defineField({
      type: 'string',
      name: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
