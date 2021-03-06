import React, { VFC } from 'react';
import Styles from './shopcard.module.scss';
import { VscLink } from 'react-icons/vsc';
import { Button } from '../../../components/atoms/buttons/Button';

type ShopCardProps = {
  shopImage: string;
  shopCategory: string;
  shopName: string;
  shopLinkText: string;
  onClick?: () => void;
};

const ShopCard: VFC<ShopCardProps> = (props) => {
  const image = (): string => {
    if (props.shopImage === 'booth') {
      return Styles.boothImage;
    } else {
      return Styles.holoStoreImage;
    }
  };
  return (
    <div className={Styles.CardContainer}>
      <div className={Styles.CardContainer__Frame}>
        <div className={Styles.CardContainer__Frame__Flex}>
          <div className={Styles.CardContainer__Frame__Flex__ImageContainer}>
            <div className={image()}></div>
          </div>
          <div className={Styles.CardContainer__Frame__Flex__DetailContainer}>
            <div className="flex flex-wrap ">
              <div className="flex-none w-full text-xs font-medium text-primaryFont">
                {props.shopCategory}
              </div>
              <h2 className="flex-auto text-lg font-medium">{props.shopName}</h2>
            </div>
            <p className="mt-3"></p>
            <div className="flex py-4 text-sm text-gray-500">
              <div className="inline-flex flex-1 items-center">
                <VscLink className="mr-3 w-5 h-5 text-primaryItem" />
                <p className="">{props.shopLinkText}</p>
              </div>
            </div>
            <div className="flex p-4 pb-2 border-t border-gray-200 "></div>
            <div className="flex space-x-3 text-sm font-medium">
              <Button primary={true} label="ショップへ" onClick={props.onClick} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
