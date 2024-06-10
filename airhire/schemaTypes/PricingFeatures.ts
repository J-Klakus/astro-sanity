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
      initialValue: 'Pricing Features',
    }),
    defineField({
      type: 'string',
      name: 'subtitle',
      initialValue: 'Pricing Features',
    }),
    defineField({
      type: 'string',
      name: 'price',
      initialValue: 'Pricing Features',
    }),
    defineField({
      type: 'array',
      name: 'categories',
      title: 'Categories',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'category',
              title: 'Category',
            }),
            defineField({
              type: 'array',
              name: 'features',
              title: 'Features',
              of: [
                defineArrayMember({
                  type: 'string',
                  name: 'feature',
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
