import clsx, { ClassValue } from 'clsx';
import { PropsWithChildren, forwardRef, MouseEventHandler } from 'react';
import Link, { LinkProps } from 'next/link';

export type AnchorProps = PropsWithChildren<{
  href?: LinkProps['href'];
  as?: LinkProps['as'];
  scroll?: LinkProps['scroll'];
  shallow?: LinkProps['shallow'];
  passHref?: LinkProps['passHref'];
  role?: string;
  rel?: string;
  target?: string;
  className?: ClassValue;
  tabIndex?: number;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
  download?: boolean;
  ariaDisabled?: 'true' | 'false';
  ariaLabel?: string;
}>;

const Anchor = forwardRef<HTMLAnchorElement, AnchorProps>(
  (
    {
      children,
      href,
      as,
      scroll,
      shallow,
      passHref,
      className,
      ariaDisabled,
      ariaLabel,
      ...props
    },
    ref,
  ) => {
    const anchor = (
      <a
        ref={ref}
        className={clsx(className)}
        aria-disabled={ariaDisabled}
        aria-label={ariaLabel}
        {...props}
      >
        {children}
      </a>
    );

    if (href) {
      return (
        <Link
          href={href}
          as={as}
          scroll={scroll}
          shallow={shallow}
          passHref={passHref}
        >
          {anchor}
        </Link>
      );
    }

    return anchor;
  },
);

export default Anchor;
