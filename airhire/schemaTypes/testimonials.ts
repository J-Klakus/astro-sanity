import {defineType, defineField} from 'sanity'

export const testimonials = defineType({
  type: 'document',
  name: 'testimonials',
  fields: [
    defineField({
      type: 'string',
      name: 'author',
    }),
    defineField({
      type: 'string',
      name: 'position',
    }),
    defineField({
      type: 'string',
      name: 'testimonial',
    }),
    defineField({
      type: 'image',
      name: 'image',
    }),
  ],
})
