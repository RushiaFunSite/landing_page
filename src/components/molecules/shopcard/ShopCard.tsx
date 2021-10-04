/* eslint-disable @next/next/no-img-element */
import { VFC } from 'react';
import Styles from './shopcard.module.scss';
import { VscLink } from 'react-icons/vsc';

type ShopCardProps = {
  shopImage: string;
  shopCategory: string;
  shopName: string;
  shopLinkText: string;
  onClick?: () => void;
};

const ShopCard: VFC<ShopCardProps> = (props) => {
  return (
    <div className={Styles.CardContainer}>
      <div className={Styles.CardContainer__Frame}>
        <div className={Styles.CardContainer__Frame__Flex}>
          <div className={Styles.CardContainer__Frame__Flex__ImageContainer}>
            <img
              src={props.shopImage}
              alt={props.shopName}
              className="w-full object-scale-down lg:object-cover lg:h-48 rounded-2xl"
            />
          </div>
          <div className={Styles.CardContainer__Frame__Flex__DetailContainer}>
            <div className="flex flex-wrap ">
              <div className="w-full flex-none text-xs text-blue-700 font-medium ">
                {props.shopCategory}
              </div>
              <h2 className="flex-auto text-lg font-medium">{props.shopName}</h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4  text-sm text-gray-500">
              <div className="flex-1 inline-flex items-center">
                <VscLink className="h-5 w-5 mr-3 text-gray-400" />
                <p className="">{props.shopLinkText}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <button
                className="mb-2 md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                type="button"
                aria-label="like"
                onClick={props.onClick}
              >
                ショップへ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
