import {defineType, defineField, defineArrayMember} from 'sanity'

export const Features = defineType({
  type: 'object',
  name: 'Features',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Features Accordion Component',
    }),
    defineField({
      type: 'string',
      name: 'header',
      initialValue: 'Features',
    }),
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'Meet our powerhouse features ',
    }),
    defineField({
      type: 'array',
      name: 'items',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'FeatureItem',
          fields: [
            defineField({
              type: 'string',
              name: 'icon',
              title: 'Icon',
            }),
            defineField({
              type: 'string',
              name: 'title',
              title: 'Title',
            }),
            defineField({
              type: 'array',
              name: 'list',
              title: 'List',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'ListItem',
                  fields: [
                    defineField({
                      type: 'text',
                      name: 'text',
                      title: 'Text',
                    }),
                  ],
                }),
              ],
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
