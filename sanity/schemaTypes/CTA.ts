import {defineType, defineField} from 'sanity'

export const CTA = defineType({
  type: 'object',
  name: 'CTA',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Call To Action Component',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'title',
    }),
    defineField({
      type: 'boolean',
      validation: (rule) => [rule.required()],
      initialValue: false,
      name: 'first',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'description',
    }),
    defineField({
      type: 'boolean',
      validation: (rule) => [rule.required()],
      initialValue: false,
      name: 'background',
    }),
    defineField({
      type: 'Button',
      validation: (rule) => [rule.required()],
      name: 'button1',
    }),
    defineField({
      type: 'Button',
      validation: (rule) => [rule.required()],
      name: 'button2',
    }),
    defineField({
      type: 'image',
      name: 'image',
      validation: (rule) => [rule.required()],
      options: {hotspot: true},
    }),
    defineField({
      type: 'text',
      validation: (rule) => [rule.required()],
      name: 'imageAlt',
    }),
    defineField({
      type: 'boolean',
      name: 'largeImage',
      validation: (rule) => [rule.required()],
      initialValue: false,
      title: 'Make the image larger?',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
