import {defineType, defineField, defineArrayMember} from 'sanity'

export const HeroVideo = defineType({
  type: 'object',
  name: 'HeroVideo',
  fields: [
    defineField({
      type: "string",
      name: "title",
    }),
  ],
})
