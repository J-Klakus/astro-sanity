import {defineType, defineField} from 'sanity'

export const Bento = defineType({
  type: 'object',
  name: 'Bento',
  title: 'Bento',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Bento Box Component',
    }),
    defineField({
      type: 'object',
      name: 'boxes',
      title: 'Boxes',
      fields: [
        defineField({
          type: 'object',
          name: 'topLeft',
          title: 'Top Left Box',
          fields: [
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
            }),
            defineField({
              type: 'string',
              name: 'text',
              title: 'Text',
            }),
            defineField({
              type: 'string',
              options: {
                list: ['purple', 'white'],
              },
              name: 'pillColor',
              title: 'Pill Color',
            }),
            defineField({
              type: 'string',
              name: 'pillText',
              title: 'Pill Text',
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Image',
            }),
            defineField({
              type: 'string',
              name: 'link',
              title: 'Link',
            }),
          ],
        }),
        defineField({
          type: 'object',
          name: 'topRight',
          title: 'Top Right Box',
          fields: [
            defineField({
              type: 'string',
              options: {
                list: ['purple', 'white'],
              },
              name: 'pillColor',
              title: 'Pill Color',
            }),
            defineField({
              type: 'string',
              name: 'pillText',
              title: 'Pill Text',
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Image',
            }),
            defineField({
              type: 'string',
              name: 'link',
              title: 'Link',
            }),
          ],
        }),
        defineField({
          type: 'object',
          name: 'bottomLeft',
          title: 'Bottom Left Box',
          fields: [
            defineField({
              type: 'string',
              options: {
                list: ['purple', 'white'],
              },
              name: 'pillColor',
              title: 'Pill Color',
            }),
            defineField({
              type: 'string',
              name: 'pillText',
              title: 'Pill Text',
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Image',
            }),
            defineField({
              type: 'string',
              name: 'link',
              title: 'Link',
            }),
          ],
        }),
        defineField({
          type: 'object',
          name: 'bottomRight',
          title: 'Bottom Right Box',
          fields: [
            defineField({
              type: 'string',
              options: {
                list: ['purple', 'white'],
              },
              name: 'pillColor',
              title: 'Pill Color',
            }),
            defineField({
              type: 'string',
              name: 'pillText',
              title: 'Pill Text',
            }),
            defineField({
              type: 'image',
              name: 'image',
              title: 'Image',
            }),
            defineField({
              type: 'string',
              name: 'link',
              title: 'Link',
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
