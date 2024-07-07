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
      validation: (rule) => [rule.required()],
      initialValue: 'Features',
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => [rule.required()],
      initialValue: 'Meet our powerhouse features ',
    }),
    defineField({
      type: 'array',
      name: 'items',
      validation: (rule) => [rule.required()],
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
              type: 'image',
              name: 'image',
              title: 'Image',
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
