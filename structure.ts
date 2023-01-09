import Iframe from 'sanity-plugin-iframe-pane'
import { DefaultDocumentNodeResolver } from 'sanity/desk'

export const getDefaultDocumentNode: DefaultDocumentNodeResolver = (Structure,{schemaType}) => { 
  if (schemaType === 'post') {
    return Structure.document().views([
      Structure.view.form(),

      Structure.view
        .component(Iframe)
        .options({
        //Request accepts an async function 
        // or a string
        url: `${process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000"}/api/preview`,
        defaultSize: `desktop`,
        reload: {
          button: true
        },
        attributes: {},
        })
        .title("Preview")
    ])
  }
}