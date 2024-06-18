import {defineType, defineField, defineArrayMember} from 'sanity'

export const Navbar = defineType({
  type: 'document',
  name: 'navbar',
  title: 'Navbar',
  fields: [
    defineField({
      type: 'string',
      name: 'componentTitle',
      title: 'Component Title',
      description: 'Just used to identify the component in the studio',
      initialValue: 'Navbar Component',
    }),
    defineField({
      name: 'buttonTitle',
      title: 'Button Title',
      validation: (rule) => [rule.required()],
      type: 'string',
    }),
    defineField({
      name: 'buttonLinkText',
      title: 'Button Link Text',
      validation: (rule) => [rule.required()],
      type: 'string',
    }),
    defineField({
      name: 'buttonLink',
      title: 'button Link',
      validation: (rule) => [rule.required()],
      type: 'text',
    }),
    defineField({
      name: 'menuItems',
      title: 'Menu Items',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'menuItem',
          fields: [
            defineField({
              name: 'title',
              title: 'Title',
              validation: (rule) => [rule.required()],
              type: 'string',
            }),
            defineField({
              name: 'link',
              title: 'Link',
              validation: (rule) => [rule.required()],
              type: 'text',
            }),
            defineField({
              name: 'values',
              title: 'Dropdown Items',
              type: 'array',
              of: [
                defineArrayMember({
                  type: 'object',
                  name: 'dropdownItem',
                  fields: [
                    defineField({
                      name: 'text',
                      title: 'Text',
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
  ],
})
