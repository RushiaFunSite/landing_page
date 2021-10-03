import { useEffect, useState } from 'react';
import axios from 'axios';

type headerItemType = {
  headerLabel: string;
  href: string;
};

type serviceItemType = {
  serviceName: string;
  description: string;
  href: string;
  isRunning: boolean;
};

type menuAction = {
  actionName: string;
  href: string;
};

type responseHeaderItems = {
  headerData: {
    headerItems: headerItemType[];
    services: [
      {
        serviceLabel: string;
        serviceItems: serviceItemType[];
      },
    ];
    menuActions: menuAction[];
  };
};

const useFetchHeaderItem = () => {
  const [data, setData] = useState<responseHeaderItems>();
  const json = '/header.json';

  useEffect(() => {
    async function fetchHeaderItem() {
      const res = await axios(json);
      setData(res.data);
    }
    fetchHeaderItem();
  }, []);

  return { data };
};

export default useFetchHeaderItem;
