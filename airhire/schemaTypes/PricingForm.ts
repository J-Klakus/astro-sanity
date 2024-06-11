import {defineType, defineField, defineArrayMember} from 'sanity'

export const PricingForm = defineType({
  type: 'object',
  name: 'PricingForm',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Pricing Form Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
