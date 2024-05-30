import {defineType, defineField, defineArrayMember} from 'sanity'

export const TestimonialSlider = defineType({
  type: 'object',
  name: 'TestimonialSlider',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
