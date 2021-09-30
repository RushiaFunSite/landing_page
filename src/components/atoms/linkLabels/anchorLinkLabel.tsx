import React from 'react';
import Link from 'next/link';

type AnchorLinkLabelProps = {
  href: string;
  label: string;
};

const AnchorLinkLabel = (props: AnchorLinkLabelProps) => {
  return (
    <Link href={props.href}>
      <a className="text-green-500 hover:text-green-300">{props.label}</a>
    </Link>
  );
};

export default AnchorLinkLabel;
