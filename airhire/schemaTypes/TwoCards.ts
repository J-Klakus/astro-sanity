import {defineType, defineField, defineArrayMember} from 'sanity'

export const TwoCards = defineType({
  type: 'object',
  name: 'TwoCards',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
    }),
  ],
})
