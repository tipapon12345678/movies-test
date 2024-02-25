import type { Schema, Attribute } from '@strapi/strapi';

export interface EpEp extends Schema.Component {
  collectionName: 'components_ep_eps';
  info: {
    displayName: 'ep';
  };
  attributes: {
    Title: Attribute.String;
    Iframe: Attribute.String & Attribute.Required;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'ep.ep': EpEp;
    }
  }
}
