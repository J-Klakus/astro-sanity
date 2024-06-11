import {defineType, defineField, defineArrayMember} from 'sanity'

export const Brands = defineType({
  type: 'object',
  name: 'Brands',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Brand Component',
    }),
    defineField({
      type: 'string',
      validation: (rule) => [rule.required()],
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'text',
      validation: (rule) => [rule.required()],
      name: 'text',
      title: 'Text',
    }),
    defineField({
      type: 'array',
      name: 'images',
      title: 'Images',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'imageObject',
          validation: (rule) => [rule.required()],
          fields: [
            defineField({
              type: 'image',
              validation: (rule) => [rule.required()],
              name: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              type: 'string',
              validation: (rule) => [rule.required()],
              name: 'alt',
              title: 'Alt Text',
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
