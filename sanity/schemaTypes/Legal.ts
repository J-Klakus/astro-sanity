import {defineType, defineField, defineArrayMember} from 'sanity'

export const Legal = defineType({
  type: 'object',
  name: 'Legal',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      validation: (rule) => [rule.required()],
      description: 'Just used to identify the component in the studio',
      initialValue: 'Legal Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => [rule.required()],
      initialValue: 'Terms and Conditions',
    }),
    defineField({
      name: 'body',
      title: 'Body',
      validation: (rule) => [rule.required()],
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
