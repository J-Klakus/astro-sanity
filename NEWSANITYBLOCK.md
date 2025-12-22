# NEWSANITYBLOCK: How to Create New Sanity Types

## Overview

This guide explains how to create new content types for the Sanity schema in the `sanity/schemaTypes` directory. Follow these steps to add new types that can be used in the content studio.

## Step 1: Create the Type File

Create a new TypeScript file in `sanity/schemaTypes/` with a descriptive name (e.g., `MyNewType.ts`).

### Basic Structure

```typescript
import {defineType, defineField, defineArrayMember} from 'sanity'

export const MyNewType = defineType({
  type: 'object', // or 'document' for standalone types
  name: 'myNewType',
  title: 'My New Type',
  fields: [
    // Define your fields here
  ],
  preview: {
    select: {
      // Define preview options
    },
  },
})
```

## Step 2: Define Fields

Based on your component's props, define the corresponding fields:

### Common Field Types

- **String**: `defineField({ type: 'string', name: 'title' })`
- **Text**: `defineField({ type: 'text', name: 'description' })`
- **Boolean**: `defineField({ type: 'boolean', name: 'isEnabled' })`
- **Image**: `defineField({ type: 'image', name: 'image' })`
- **Array**: `defineField({ type: 'array', name: 'items', of: [...] })`

### Example from ImageText Component

```typescript
export const ImageText = defineType({
  type: 'object',
  name: 'ImageText',
  fields: [
    defineField({
      type: 'string',
      name: 'tagline',
      validation: (rule) => [rule.required()],
      initialValue: 'features',
    }),
    defineField({
      type: 'string',
      name: 'title',
      validation: (rule) => [rule.required()],
    }),
    defineField({
      type: 'boolean',
      name: 'first',
      validation: (rule) => [rule.required()],
      initialValue: false,
    }),
    defineField({
      type: 'string',
      name: 'description',
      validation: (rule) => [rule.required()],
    }),
    defineField({
      type: 'image',
      name: 'image',
      validation: (rule) => [rule.required()],
      options: {hotspot: true},
    }),
  ],
})
```

## Step 3: Add to Index.ts

Import your new type and add it to the `schemaTypes` array in `sanity/schemaTypes/index.ts`:

```typescript
import {MyNewType} from './MyNewType'

export const schemaTypes = [
  // existing types...
  MyNewType,
]
```

## Step 4: Create the Astro Component

Create the corresponding Astro component in `src/components/` that matches your schema:

```astro
---
interface MyNewTypeProps {
  title: string;
  description: string;
  // other props
}

const { title, description } = Astro.props as MyNewTypeProps;
---

<!-- Your component template -->
<section>
  <h2>{title}</h2>
  <p>{description}</p>
</section>
```

## Best Practices

1. **Naming Convention**: Use PascalCase for component names and camelCase for field names
2. **Validation**: Always add validation rules for required fields
3. **Initial Values**: Provide sensible initial values where appropriate
4. **Preview**: Configure the preview to show meaningful information
5. **Options**: Use `options` to provide dropdowns, lists, or other UI enhancements
6. **Documentation**: Add descriptions to help content editors understand fields

## Example: Creating a Testimonial Type

### Step 1: Create Testimonial.ts

```typescript
import {defineType, defineField} from 'sanity'

export const testimonial = defineType({
  type: 'object',
  name: 'testimonial',
  title: 'Testimonial',
  fields: [
    defineField({
      type: 'string',
      name: 'author',
      title: 'Author Name',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'string',
      name: 'role',
      title: 'Author Role',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'text',
      name: 'content',
      title: 'Testimonial Content',
      validation: (rule) => rule.required(),
    }),
    defineField({
      type: 'image',
      name: 'image',
      title: 'Author Image',
      options: {hotspot: true},
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'author',
      subtitle: 'role',
      media: 'image',
    },
  },
})
```

### Step 2: Add to index.ts

```typescript
import {testimonial} from './testimonial'

export const schemaTypes = [
  // existing types...
  testimonial,
]
```

### Step 3: Create Testimonial.astro

```astro
---
interface TestimonialProps {
  author: string;
  role: string;
  content: string;
  image: any;
}

const { author, role, content, image } = Astro.props as TestimonialProps;
---

<div class="testimonial">
  <blockquote>{content}</blockquote>
  <div class="author">
    <img src={image.src} alt={author} />
    <div>
      <h4>{author}</h4>
      <p>{role}</p>
    </div>
  </div>
</div>
```

## Troubleshooting

- **Type not appearing in Studio**: Ensure you've added the import and included it in the `schemaTypes` array
- **Validation errors**: Check that all required fields have proper validation
- **Preview issues**: Verify the `preview.select` configuration matches your field names

## Advanced Features

### Arrays of Objects

```typescript
defineField({
  type: 'array',
  name: 'items',
  of: [
    defineArrayMember({
      type: 'mySubType',
    }),
  ],
})
```

### Rich Text

```typescript
defineField({
  type: 'array',
  name: 'content',
  of: [
    defineArrayMember({
      type: 'block',
    }),
    defineArrayMember({
      type: 'image',
      fields: [{name: 'caption', type: 'string'}],
    }),
  ],
})
```

Follow these guidelines to create consistent and maintainable Sanity types for your project!
