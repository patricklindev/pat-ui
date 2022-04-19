import React from 'react';
import Text from './Text';

export default {
  title: 'Text',
  component: Text,
};

const bgStyle: React.CSSProperties = {
	backgroundColor: '#e4e4e4',
	display: 'inline-block', // Shrink wrap
	padding: '4px 0'
};

const rowStyle: React.CSSProperties = {
	padding: '4px 8px'
}

export const DefaultText = () => (
	<div style={bgStyle}>
		<div style={rowStyle}>
			<Text />
		</div>
		<div style={rowStyle}>
			<Text placeholder="Placeholder" />
		</div>
		<div style={rowStyle}>
			<Text value="Filled" />
		</div>
	</div>
);

export const ErrorText = () => (
	<div style={bgStyle}>
		<div style={rowStyle}>
			<Text error={true} />
		</div>
		<div style={rowStyle}>
			<Text error={true} placeholder="Placeholder" />
		</div>
		<div style={rowStyle}>
			<Text error={true} value="Filled" />
		</div>
	</div>
);