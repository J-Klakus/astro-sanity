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
      validation: (rule) => [rule.required()],
      initialValue: 'AI-driven ATS & CRM developed for recruitment agencies',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'text',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
