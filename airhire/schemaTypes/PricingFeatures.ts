import {defineType, defineField, defineArrayMember} from 'sanity'

export const PricingFeatures = defineType({
  type: 'object',
  name: 'PricingFeatures',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
