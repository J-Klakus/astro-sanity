import {defineType, defineField, defineArrayMember} from 'sanity'

export const imageCarousel = defineType({
  type: 'object',
  name: 'imageCarousel',
  title: 'Image carousel',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Image Carousel Component',
    }),
    defineField({
      type: 'array',
      name: 'images',
      of: [
        defineArrayMember({
          type: 'image',
          fields: [
            {
              type: 'string',
              name: 'caption',
            },
          ],
          options: {hotspot: true},
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
