import {defineType, defineField, defineArrayMember} from 'sanity'

export const PricingForm = defineType({
  type: 'object',
  name: 'PricingForm',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
