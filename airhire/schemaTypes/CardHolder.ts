import {defineType, defineField, defineArrayMember} from 'sanity'

export const CardHolder = defineType({
  type: 'object',
  name: 'CardHolder',
  fields: [
    defineField({
      type: 'string',
      name: 'title',
      initialValue: 'Work more efficiently with Airhire',
    }),
    defineField({
      type: 'string',
      name: 'subTitle',
    }),
    defineField({
      type: 'string',
      name: 'header',
    }),
    defineField({
      type: 'Button',
      name: 'button',
    }),
    defineField({
      type: 'array',
      name: 'cards',
      title: 'Cards',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({
              type: 'string',
              name: 'name',
            }),
            defineField({
              type: 'string',
              name: 'description',
            }),
            defineField({
              type: 'string',
              name: 'icon',
              options: {
                list: ['browser', 'website', 'cv', 'email', 'checkBadge', 'clock', 'gear', 'stack'],
              },
            }),
            defineField({
              type: 'string',
              name: 'link',
            }),
          ],
        }),
      ],
    }),
  ],
})
