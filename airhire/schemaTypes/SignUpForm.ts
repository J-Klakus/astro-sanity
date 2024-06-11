import {defineType, defineField, defineArrayMember} from 'sanity'

export const SignUpForm = defineType({
  type: 'object',
  name: 'SignUpForm',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Sign Up Form Component',
    }),
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
