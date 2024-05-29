import imageUrlBuilder from "@sanity/image-url";
import { sanityClient } from "sanity:client";

interface Asset {
  _ref: string;
  _type: string;
}

export interface ImageRef {
  _type: string;
  asset: Asset;
}

const builder = imageUrlBuilder(sanityClient);

function imageHelper(source: ImageRef) {
  return builder.image(source);
}

export default imageHelper;