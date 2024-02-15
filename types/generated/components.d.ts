import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorAuthor extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'author';
    description: '';
  };
  attributes: {
    author: Attribute.Relation<
      'author.author',
      'oneToOne',
      'api::author.author'
    >;
    header: Attribute.String;
  };
}

export interface HeaderHeader extends Schema.Component {
  collectionName: 'components_header_headers';
  info: {
    displayName: 'header';
    icon: 'bold';
  };
  attributes: {
    header: Attribute.String;
  };
}

export interface ImageImage extends Schema.Component {
  collectionName: 'components_image_images';
  info: {
    displayName: 'image';
    icon: 'landscape';
  };
  attributes: {
    image: Attribute.Media;
  };
}

export interface ImagesImages extends Schema.Component {
  collectionName: 'components_images_images';
  info: {
    displayName: 'images';
    icon: 'landscape';
    description: '';
  };
  attributes: {
    images: Attribute.Media;
    header: Attribute.String;
    sign: Attribute.String;
  };
}

export interface ListList extends Schema.Component {
  collectionName: 'components_list_lists';
  info: {
    displayName: 'list';
    icon: 'bulletList';
  };
  attributes: {
    list: Attribute.Text;
    header: Attribute.String;
  };
}

export interface NumerateNumerate extends Schema.Component {
  collectionName: 'components_numerate_numerates';
  info: {
    displayName: 'numerate';
    icon: 'bulletList';
  };
  attributes: {
    numerate: Attribute.Text;
    header: Attribute.String;
  };
}

export interface QuoteQuote extends Schema.Component {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'quote';
    icon: 'quote';
  };
  attributes: {
    quote: Attribute.Text;
    header: Attribute.String;
    authors: Attribute.Relation<
      'quote.quote',
      'oneToMany',
      'api::author.author'
    >;
  };
}

export interface SignSign extends Schema.Component {
  collectionName: 'components_sign_signs';
  info: {
    displayName: 'sign';
    icon: 'underline';
    description: '';
  };
  attributes: {
    sign: Attribute.String;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
    icon: 'strikeThrough';
  };
  attributes: {
    text: Attribute.Text;
    header: Attribute.String;
  };
}

export interface VideoVideoItem extends Schema.Component {
  collectionName: 'components_video_video_items';
  info: {
    displayName: 'videoItem';
    icon: 'slideshow';
  };
  attributes: {
    url: Attribute.String;
  };
}

export interface VideoVideo extends Schema.Component {
  collectionName: 'components_video_videos';
  info: {
    displayName: 'video';
    icon: 'slideshow';
  };
  attributes: {
    url: Attribute.String;
    header: Attribute.String;
    sign: Attribute.String;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'author.author': AuthorAuthor;
      'header.header': HeaderHeader;
      'image.image': ImageImage;
      'images.images': ImagesImages;
      'list.list': ListList;
      'numerate.numerate': NumerateNumerate;
      'quote.quote': QuoteQuote;
      'sign.sign': SignSign;
      'text.text': TextText;
      'video.video-item': VideoVideoItem;
      'video.video': VideoVideo;
    }
  }
}
