import {defineType, defineField, defineArrayMember} from 'sanity'

export const SignUpForm = defineType({
  type: 'object',
  name: 'SignUpForm',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
