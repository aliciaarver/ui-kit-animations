import {
	type ComponentPropsWithoutRef,
	type ElementType,
	type ForwardedRef,
	forwardRef,
	type JSX,
	type ReactNode,
} from "react";

import styles from "./index.module.scss";

export type Variant =
	| "title"
	| "subtitle"
	| "body"
	| "caption"
	| "label"
	| "link"
	| "code"
	| "button";

const tagMap: Record<Variant, keyof JSX.IntrinsicElements> = {
	title: "h1",
	subtitle: "h2",
	body: "p",
	caption: "span",
	label: "label",
	link: "a",
	code: "code",
	button: "button",
};

export interface BaseTypographyProps {
	variant?: Variant;
	className?: string;
	children?: ReactNode;
}

export type TypographyProps<E extends ElementType = "p"> = {
	as?: E;
} & BaseTypographyProps &
	Omit<ComponentPropsWithoutRef<E>, keyof BaseTypographyProps>;

export const Typography = forwardRef(
	<E extends ElementType = "p">(
		{
			variant = "body",
			children,
			className = "",
			as,
			...props
		}: TypographyProps<E>,
		ref: ForwardedRef<Element>,
	) => {
		const Tag = as || tagMap[variant];

		return (
			<Tag ref={ref} className={`${styles[variant]} ${className}`} {...props}>
				{children}
			</Tag>
		);
	},
);
