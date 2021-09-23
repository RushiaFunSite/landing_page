import React from 'react';
import Link from 'next/link';

type LinkLabelProps = {
  href: string;
  label: string;
};

const LinkLabel = (props: LinkLabelProps) => {
  return (
    <Link href={props.href}>
      <a className="text-base font-medium text-gray-500 hover:text-gray-900">{props.label}</a>
    </Link>
  );
};

export default LinkLabel;
