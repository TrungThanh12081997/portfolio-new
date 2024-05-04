export type ElementTypes<T> = {
  type: string;
  data?: T
};

// type ActionTypes = {
//   text?: string;
//   url: string;
//   target: string;
// };

// export type SocialsTypes = {
//   icon: ElementTypes<string>,
//   link: ElementTypes<ActionTypes>
// };

export type SystemData = {
  ok?:string
};
//   header: {
//     locale: string,
//     elements: {
//       logo: ElementTypes<string>,
//       menu: ElementTypes<any>,
//       socials: ElementTypes<any>
//     }
//   },
//   footer: {
//     locale: string,
//     elements: {
//       logo: ElementTypes<string>,
//       menu: ElementTypes<any>,
//       menuCopyright: ElementTypes<any>,
//       address: ElementTypes<string>,
//       labelEmail: ElementTypes<string>,
//       email: ElementTypes<string>,
//       labelPhone: ElementTypes<string>,
//       phone: ElementTypes<string>,
//       socials: ElementTypes<SocialsTypes[]>,
//       copyright: ElementTypes<any>,
//       memberTitle: ElementTypes<any>,
//       members: ElementTypes<any>
//     }
//   },
//   seo: {
//     title?: string,
//     description?: string,
//     keyword?: string
//   },
//   og: OGData,
//   locales: LocalesResponse,
//   googleRecaptchaSiteKey?: string,
//   customerSSOClientId?: any
// };

// export type ParamsType = {
//   limit?: number;
//   keyword?: string;
//   page?: number;
//   locale?: string;
// };

// export type HeaderTypesCurrent = {
//   logo?: string;
//   logo2?: string;
//   social?: InfoIconTypes[];
// };

// export type FooterTypesCurrent = {
//   logo?: string;
//   copyright?: string;
//   contact?: {
//     logo?: string;
//     logo2?: string;
//     name?: string;
//     desc?: string;
//     copyright?: string;
//   }
//   placeholder?: {
//     name?: string
//     phone?: string
//     email?: string
//     contact?: string
//   }
//   social?: InfoIconTypes[];
//   logoMain?: {
//     logo?: string;
//     link?: {
//       text?: string;
//       url?: string;
//       target?: string;
//     };
//   }
//   sticky?: {
//     text?: string
//     url?: string
//     target?: string
//   }
// };
