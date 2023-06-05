import { BlockDirectionEnum, BlockTypeEnum, CallToActionVariantEnum, Ratio, TypeName } from '@root/common/types';
import { MARKDOWN_CONTENT } from './markdown-content';

export const EVENT_PAGE_CONTENT = [
  {
    id: '1',
    block: [
      {
        id: 'hero',
        type: BlockTypeEnum.HERO,
        label: 'Upcoming Event',
        title: 'IPFS þing',
        date: 'April 15th - 19th, 2023',
        location: 'Brussels, Belgium',
        description:
          'IPFS þing is a week-long gathering for the IPFS implementors community. Everything from talks, workshops, discussion circles, hacking time, and more — all focused on advancing IPFS implementations.',
        background: {
          src: '/media/background.jpeg',
        },
        cta: [
          {
            type: CallToActionVariantEnum.BLACK,
            target: '_blank',
            text: 'Submit a Talk or a Track ',
            link: '/ticket',
          },
          {
            type: CallToActionVariantEnum.BLACK,
            target: '_blank',
            text: 'Get Tickets Now!',
            link: '/ticket',
          },
        ],
      },
    ],
  },
  {
    id: '2',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: TypeName.MEDIA_VIDEO,
          src: '/media/ipfs-thing-2023.mp4',
          ariaLabel: 'IPFS Thing 2023',
          ratio: Ratio.TWENTY_ONE_BY_NINE,
        },
      },
    ],
  },
  {
    id: '2',
    title: 'About',
    direction: 'row',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.TICKET_CARD,
        price: '$350',
        name: 'Student',
        description: 'Apply for the student rate. You must be able to present a valid university email address, university ID, or other official documentation.',
        img: {
          src: 'https://images.megapixl.com/2987/29878522.jpg',
        },
        cta: {
          type: CallToActionVariantEnum.BORDER,
          target: '_blank',
          buttonColor: 'white',
          textColor: 'white',
          text: 'Receive My Student Promo Code',
          link: '/ticket',
        },
      },
      {
        id: 'media',
        type: BlockTypeEnum.TICKET_CARD,
        price: '$650',
        name: 'General Ticket',
        description: 'You are welcome to support the event at this General Ticket price if you are able and would like to leave your Early Bird ticket for another.',
        img: {
          src: 'https://images.megapixl.com/2987/29878522.jpg',
        },
        cta: {
          type: CallToActionVariantEnum.BORDER,
          buttonColor: 'white',
          textColor: 'white',
          target: '_blank',
          text: 'General Ticket',
          link: '/ticket',
        },
      },
      {
        id: 'media',
        type: BlockTypeEnum.TICKET_CARD,
        price: '$650',
        name: 'Supporters Ticket',
        description: 'You are welcome to support the event at this General Ticket price if you are able and would like to leave your Early Bird ticket for another.',
        img: {
          src: 'https://images.megapixl.com/2987/29878522.jpg',
        },
        cta: {
          type: CallToActionVariantEnum.BORDER,
          buttonColor: 'white',
          textColor: 'white',
          target: '_blank',
          text: 'General Ticket',
          link: '/ticket',
        },
      },
    ],
  },
  {
    id: '2',
    title: 'FAQs',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'What is IPFS Thing?',
        collapsedText: MARKDOWN_CONTENT,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Who should attend IPFS þing?',
        collapsedText: MARKDOWN_CONTENT,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Who should attend IPFS þing?',
        collapsedText: MARKDOWN_CONTENT,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'How does the track system work?',
        collapsedText: MARKDOWN_CONTENT,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'How do I participate in IPFS Thing?',
        collapsedText: MARKDOWN_CONTENT,
      },
      {
        id: 'media',
        type: BlockTypeEnum.COLLAPSABLE,
        title: 'Is there a cost to participate?',
        collapsedText: MARKDOWN_CONTENT,
      },
    ],
  },
  {
    id: '2',
    title: 'About',
    block: [
      {
        id: 'media',
        type: BlockTypeEnum.MEDIA,
        media: {
          type: TypeName.MEDIA_IMAGE,
          src: '/media/compute-camp.png',
          ariaLabel: 'IPFS Thing 2023',
          ratio: Ratio.TWENTY_ONE_BY_NINE,
        },
      },
    ],
  },
];