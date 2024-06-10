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
      title: 'Items',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'id',
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
              name: 'description',
            }),
            defineField({
              type: 'image',
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
