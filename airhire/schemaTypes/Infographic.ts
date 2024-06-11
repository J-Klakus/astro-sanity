import {defineType, defineField, defineArrayMember} from 'sanity'

export const Infographic = defineType({
  type: 'object',
  name: 'Infographic',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'InfoGraphic Component',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'title',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'header',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'text',
    }),
    defineField({
      type: 'image',
      validation: (rule) => [rule.required()],
      name: 'image',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'imageAlt',
    }),
    defineField({
      type: 'Button',
      validation: (rule) => [rule.required()],
      name: 'button',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
