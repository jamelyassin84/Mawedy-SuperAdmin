import {
	trigger,
	transition,
	style,
	animate,
	query,
	stagger,
} from '@angular/animations'

export const listAnimation = trigger('listAnimation', [
	transition('* <=> *', [
		query(
			':enter',
			[
				style({
					transform: 'translateY(50%)',
				}),
				stagger(
					'160ms',
					animate(
						'150ms ease-out',
						style({
							transform: 'translateX(-150%)',
						}),
					),
				),
			],
			{ optional: true },
		),
		query(
			':leave',
			animate('200ms', style({ transform: 'translateX(-150%)' })),
			{
				optional: true,
			},
		),
	]),
])
