import {defineType, defineField, defineArrayMember} from 'sanity'

export const Footer = defineType({
  type: 'document',
  name: 'footer',
  title: 'Footer',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Footer Accordion Component',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'pointTitle',
      title: 'Point Title',
      validation: (rule) => [rule.required()],
      type: 'text',
    }),
    defineField({
      name: 'points',
      title: 'Points',
      validation: (rule) => [rule.required()],
      type: 'array',
      of: [
        defineField({
          name: 'point',
          title: 'Point',
          validation: (rule) => [rule.required()],
          type: 'text',
        }),
      ],
    }),
    defineField({
      name: 'sections',
      title: 'Sections',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'footerLinkSection',
          fields: [
            defineField({
              name: 'section',
              title: 'Section',
              validation: (rule) => [rule.required()],
              type: 'string',
            }),
            defineField({
              name: 'items',
              title: 'Items',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'footerLinkItem',
                  fields: [
                    defineField({
                      name: 'name',
                      title: 'Name',
                      validation: (rule) => [rule.required()],
                      type: 'string',
                    }),
                    defineField({
                      name: 'link',
                      title: 'Link',
                      validation: (rule) => [rule.required()],
                      type: 'text',
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'socialLink',
          fields: [
            defineField({
              name: 'platform',
              title: 'Platform',
              validation: (rule) => [rule.required()],
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              validation: (rule) => [rule.required()],
              type: 'url',
            }),
            defineField({
              name: 'icon',
              title: 'Icon',
              validation: (rule) => [rule.required()],
              options: {
                list: ['linkedin', 'dribble', 'facebook', 'github', 'twitter'],
              },
              type: 'string',
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'componentTitle',
    },
  },
})
