import {defineType, defineField, defineArrayMember} from 'sanity'

export const LogoBanner = defineType({
  type: 'object',
  name: 'LogoBanner',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Big Logo Banner Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
    defineField({
      type: 'Button',
      name: 'button',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
