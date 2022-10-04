import type { DialogProps } from '@blueprintjs/core';
import { Button, Dialog } from '@blueprintjs/core';
import { css } from '@emotion/react';
import { LoginForm } from '@redeye/client/components';
import { useStore } from '@redeye/client/store';
import { observer } from 'mobx-react-lite';
import type { FormEventHandler } from 'react';

type UserSettingsOverlayProps = DialogProps & {
	onSubmit?: FormEventHandler<HTMLFormElement>;
};

export const UserSettingsOverlay = observer<UserSettingsOverlayProps>(({ onSubmit, ...props }) => {
	const store = useStore();
	return (
		<Dialog title="User Settings" {...props}>
			<div
				css={css`
					padding: 1rem;
				`}
			>
				<p>Change user.name</p>
				<LoginForm submitText="Update" onSubmit={onSubmit} />
				<Button minimal text="Log out" onClick={() => store.auth.logOut()} />
			</div>
		</Dialog>
	);
});
