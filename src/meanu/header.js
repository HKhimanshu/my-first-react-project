import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import style from './header.module.css';
import {
  faBagShopping,
  faMagnifyingGlass,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faUser } from '@fortawesome/free-regular-svg-icons';
import ProfleMenu from '../welcome/welcome';
import SumMenu from '../menhover/SumMenu';
function Header() {
  const menu = [
    //
    //
    // Sweatshirts
    // Sweaters
    // Jackets
    // Blazers & Coats
    // Suits
    // Rain Jackets

    {
      title: 'MEN',
      slug: '/men',
      subMenu: [
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
      ],
    },
    {
      title: 'WOMEN',
      slug: '/women',
      subMenu: [
        [
          {
            title: 'Indian & Fusion Wear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
      ],
    },
    {
      title: 'KIDS',
      slug: '/kids',
      subMenu: [
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
      ],
    },
    {
      title: 'Home & LIVING',
      slug: '/home',
      subMenu: [
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
      ],
    },
    {
      title: 'beauty',
      slug: '/beauty',
      subMenu: [
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Indian & Festive Wear',
            slug: '/men/topwear',
            items: [
              { title: 'Kurtas & Kurta Sets', slug: '/men/t-shirt' },
              { title: 'Sherwanis', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
        ],
        [
          {
            title: 'Topwear',
            slug: '/men/topwear',
            items: [
              { title: 'T-Shirts', slug: '/men/t-shirt' },
              { title: 'Casual Shirts', slug: '/men/casual-shirts' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
              { title: 'Formal Shirts', slug: '/men/t-shirt' },
            ],
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
          {
            title: 'Plus Size',
            slug: '/men/plus-size',
          },
        ],
      ],
    },
  ];
  return (
    <div className={style.maincontener}>
      <div className={style.hero}>
        <div>
          <img
            src='https://navbharattimes.indiatimes.com/photo/msid-80602014,imgsize-22742/pic.jpg'
            className={style.logo}
          ></img>
        </div>
        <ul className={style.himanshu}>
          {menu.map((r) => (
            <li className={style.word}>
              <div className={style.men}>
                <p>{r.title}</p>
                <div className={style.hedd}>
                  <SumMenu subMenu={r.subMenu} />
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className={style.search}>
          <div className={style.for}>
            <FontAwesomeIcon icon={faMagnifyingGlass} className={style.glass} />
          </div>
          <div>
            <input
              placeholder='Search for products, brands and more'
              className={style.place}
            ></input>
          </div>
        </div>
        <div className={style.user}>
          <div className={style.profile}>
            <FontAwesomeIcon icon={faUser} className={style.icc} />
            <p className={style.pro}>Profile</p>
            <div className={style.profile_menu}>
              <ProfleMenu />
            </div>
          </div>
          <div className={style.wish}>
            <FontAwesomeIcon icon={faHeart} className={style.icc} />
            <p className={style.pro}>Wishlist</p>
          </div>
          <div className={style.wish}>
            <FontAwesomeIcon icon={faBagShopping} className={style.icc} />
            <p className={style.pro}> Bag</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
