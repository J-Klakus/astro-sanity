import {defineType, defineField, defineArrayMember} from 'sanity'

export const Slider = defineType({
  type: 'object',
  name: 'Slider',
  title: 'Image carousel',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Slider Component',
    }),
    defineField({
      type: 'array',
      name: 'items',
      validation: (rule) => [rule.required()],
      title: 'Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'id',
              validation: (rule) => [rule.required()],
              options: {
                list: [
                  'opportunities',
                  'companies',
                  'candidates',
                  'reports',
                  'shortlist',
                  'jobs',
                  'settings',
                  'leads',
                  'contacts',
                  'notes',
                  'task',
                  'meetings',
                ],
              },
            }),
            defineField({
              type: 'string',
              validation: (rule) => [rule.required()],
              name: 'description',
            }),
            defineField({
              type: 'image',
              validation: (rule) => [rule.required()],
              name: 'image',
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
