import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
// import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'airhire',

  projectId: 'h2i1t4m1',
  dataset: 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Base')
          .items([
            S.listItem()
              .title('Footer')
              .child(S.document().schemaType('footer').documentId('footer')),
            S.listItem()
              .title('Navbar')
              .child(S.document().schemaType('navbar').documentId('navbar')),
            ...S.documentTypeListItems().filter(
              (listItem) => !['footer', 'navbar'].includes(listItem?.getId() ?? ''),
            ),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
