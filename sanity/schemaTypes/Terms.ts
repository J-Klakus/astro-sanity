import {defineType, defineField, defineArrayMember} from 'sanity'

export const Terms = defineType({
  type: 'object',
  name: 'Terms',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      validation: (rule) => [rule.required()],
      description: 'Just used to identify the component in the studio',
      initialValue: 'Terms and Conditions Component',
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
