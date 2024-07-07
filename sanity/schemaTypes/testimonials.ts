import {defineType, defineField} from 'sanity'

export const testimonials = defineType({
  type: 'document',
  name: 'testimonials',
  fields: [
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'author',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'position',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'testimonial',
    }),
    defineField({
      type: 'image',
      validation: (rule) => [rule.required()],
      name: 'image',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
