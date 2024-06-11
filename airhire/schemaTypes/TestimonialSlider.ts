import {defineType, defineField, defineArrayMember} from 'sanity'

export const TestimonialSlider = defineType({
  type: 'object',
  name: 'TestimonialSlider',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      validation: (rule) => [rule.required()],
      description: 'Just used to identify the component in the studio',
      initialValue: 'Testimonial Slider Component',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
