import {defineType, defineField, defineArrayMember} from 'sanity'

export const PricingFeatures = defineType({
  type: 'object',
  name: 'PricingFeatures',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Pricing Features Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => [rule.required()],
      initialValue: 'Pricing Features',
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      validation: (rule) => [rule.required()],
      initialValue: 'Pricing Features',
    }),
    defineField({
      type: 'string',
      name: 'price',
      validation: (rule) => [rule.required()],
      initialValue: 'Pricing Features',
    }),
    defineField({
      type: 'array',
      name: 'categories',
      title: 'Categories',
      validation: (rule) => [rule.required()],
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'category',
              validation: (rule) => [rule.required()],
              title: 'Category',
            }),
            defineField({
              type: 'array',
              name: 'features',
              validation: (rule) => [rule.required()],
              title: 'Features',
              of: [
                defineArrayMember({
                  type: 'string',
                  name: 'feature',
                  validation: (rule) => [rule.required()],
                  title: 'Feature',
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
