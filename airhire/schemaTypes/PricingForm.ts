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
      validation: (rule) => [rule.required()],
      title: 'Title',
    }),
    defineField({
      type: 'text',
      name: 'text',
      title: 'text',
    }),
    defineField({
      type: 'text',
      name: 'text2',
      title: 'text2',
    }),
    defineField({
      type: 'text',
      name: 'formTitle',
      title: 'Form Title',
    }),
    defineField({
      type: 'array',
      name: 'list',
      title: 'List',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'ListItem',
          fields: [
            defineField({
              type: 'text',
              name: 'title',
              title: 'Title',
            }),
            defineField({
              type: 'text',
              name: 'text',
              title: 'Text',
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
