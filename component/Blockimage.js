import { urlFor } from '../sanity';
import Image from 'next/image';

const BlockImage = ({node}) => {
  const imageUrl = urlFor(node.mainImage).url();
  const assetUrl = urlFor(node.asset).url();
  console.log(imageUrl, "hehellooo");
  console.log(assetUrl, "hehelloooo");

  return (
    <figure>
      <Image
        src={imageUrl}
        alt={node.asset.alt || 'fallback description'} // Correct alt field access
        width={500} // you should adjust this
        height={500} // and this to fit your needs
      />
      <figcaption>{node.caption}</figcaption> // If you have caption in your schema
    </figure>
  );
};

export default BlockImage;
