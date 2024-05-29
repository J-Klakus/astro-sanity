import {defineType, defineField, defineArrayMember} from 'sanity'

export const Bento = defineType({
  type: 'object',
  name: 'Bento',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
