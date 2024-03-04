import type { Schema, Attribute } from '@strapi/strapi';

export interface AuthorAuthor extends Schema.Component {
  collectionName: 'components_author_authors';
  info: {
    displayName: 'author';
    description: '';
  };
  attributes: {
    authors: Attribute.Relation<
      'author.author',
      'oneToMany',
      'api::author.author'
    >;
    header: Attribute.String;
  };
}

export interface ClientsClients extends Schema.Component {
  collectionName: 'components_clients_clients';
  info: {
    displayName: 'Clients';
    icon: 'emotionHappy';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    clients: Attribute.Media;
  };
}

export interface CollectionCompetencies extends Schema.Component {
  collectionName: 'components_competencies_competencies';
  info: {
    displayName: 'Collection';
    icon: 'dashboard';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
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

export interface PeoplePeople extends Schema.Component {
  collectionName: 'components_people_people';
  info: {
    displayName: 'People';
    icon: 'alien';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface QuoteQuote extends Schema.Component {
  collectionName: 'components_quote_quotes';
  info: {
    displayName: 'quote';
    icon: 'quote';
    description: '';
  };
  attributes: {
    quote: Attribute.Text;
    header: Attribute.String;
    author: Attribute.Relation<'quote.quote', 'oneToOne', 'api::author.author'>;
  };
}

export interface ReviewsApproach extends Schema.Component {
  collectionName: 'components_approach_approaches';
  info: {
    displayName: 'Reviews';
    icon: 'thumbUp';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    image: Attribute.Media;
    description: Attribute.Text;
    name: Attribute.String;
    position: Attribute.Text;
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

export interface TableReviews extends Schema.Component {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'Table';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.Text;
    number: Attribute.BigInteger;
  };
}

export interface TextText extends Schema.Component {
  collectionName: 'components_text_texts';
  info: {
    displayName: 'text';
    icon: 'strikeThrough';
    description: '';
  };
  attributes: {
    text: Attribute.Text;
    header: Attribute.String;
    images: Attribute.Media;
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
      'clients.clients': ClientsClients;
      'collection.competencies': CollectionCompetencies;
      'header.header': HeaderHeader;
      'image.image': ImageImage;
      'images.images': ImagesImages;
      'list.list': ListList;
      'numerate.numerate': NumerateNumerate;
      'people.people': PeoplePeople;
      'quote.quote': QuoteQuote;
      'reviews.approach': ReviewsApproach;
      'sign.sign': SignSign;
      'table.reviews': TableReviews;
      'text.text': TextText;
      'video.video-item': VideoVideoItem;
      'video.video': VideoVideo;
    }
  }
}
