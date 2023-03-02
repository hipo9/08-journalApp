import { IconButton, Typography } from '@mui/material';
import { JournalLayout } from '../layout/JournalLayout';
import { NoteView, NothingSelectedView } from '../views';
import { AddOutlined } from '@mui/icons-material';

export const JournalPage = () => {
	return (
		<JournalLayout>
			{/*<Typography>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis odio maiores quisquam provident quasi praesentium inventore sed veniam eos similique, molestias aspernatur odit eum sit porro optio nisi pariatur quis?
      </Typography>*/}
			{/*<NothingSelectedView />*/}
			<NoteView />

			<IconButton
				size='large'
				sx={{
					color: 'white',
					backgroundColor: 'error.main',
					':hover': { backgroundColor: 'error.main', opacity: 0.9 },
					position: 'fixed',
					right: 50,
					bottom:50
				}}
			>
				<AddOutlined sx={ {fontSize: 30} } />	
			</IconButton>
		</JournalLayout>
	);
};
