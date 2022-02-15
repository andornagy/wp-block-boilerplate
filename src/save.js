import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p {...useBlockProps.save()}>
			{__('Boilderplate – hello from the saved content!', 'boilderplate')}
		</p>
	);
}
