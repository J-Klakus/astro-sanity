import {defineType, defineField, defineArrayMember} from 'sanity'

export const SignInForm = defineType({
  type: 'object',
  name: 'SignInForm',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Sign In Form Component',
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
