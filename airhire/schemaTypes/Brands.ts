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
      name: 'title',
      title: 'Title',
    }),
    defineField({
      type: 'text',
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
          fields: [
            defineField({
              type: 'image',
              name: 'image',
              title: 'Image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              type: 'string',
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
