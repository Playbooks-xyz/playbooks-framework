import * as theme from '@playbooks/theme';
import * as types from '@playbooks/types';
import { Span } from 'src/html';

export const Badge = ({
	name = 'Badge',
	type = '',
	size = 'sm',
	tailwind,
	className,
	children,
	...props
}: types.BadgeProps) => {
	const base = theme.badge({ size });
	const computed = { ...base, ...props, tailwind, className, name };

	// Render
	switch (type) {
		case 'draft':
		case 'free':
			return <DraftBadge {...computed}>{children}</DraftBadge>;

		case 'info':
		case 'warning':
		case 'scheduled':
			return <WarningBadge {...computed}>{children}</WarningBadge>;

		case 'pending':
		case 'running':
		case 'seed':
		case 'testing':
			return <PendingBadge {...computed}>{children}</PendingBadge>;

		case 'active':
		case 'complete':
		case 'succeeded':
		case 'verified':
			return <SuccessBadge {...computed}>{children}</SuccessBadge>;

		case 'closed':
		case 'finished':
		case 'inactive':
		case 'paid':
		case 'won':
			return <FinishedBadge {...computed}>{children}</FinishedBadge>;

		case 'canceled':
		case 'denied':
		case 'disabled':
		case 'errored':
		case 'refunded':
		case 'stopped':
			return <ErrorBadge {...computed}>{children}</ErrorBadge>;

		default:
			return <DefaultBadge {...computed}>{children}</DefaultBadge>;
	}
};

export const DraftBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.draftBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const PendingBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.pendingBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const WarningBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.warningBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const SuccessBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.successBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const FinishedBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.finishedBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const ErrorBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.errorBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

export const DefaultBadge = ({ tailwind, className, children, ...props }: types.BadgeProps) => {
	const base = theme.outlineBadge();
	const computed = { ...base, ...props, tailwind, className };

	return <Span {...computed}>{children}</Span>;
};

// Docs:
// https://tailwindui.com/src/application-ui/elements/badges
