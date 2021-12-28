import React from 'react';
import FrameComponent from './frame_component';
import Organisms, { BannerMain } from 'Organisms';

import frameMap from './mapper';

const createPageList = () => {}

const Frame: React.FC<any> = (props) => {

	const pageList = [
		frameMap.mainBanner,
	];
	
	return <FrameComponent pageList={pageList} {...props} />
};

export default Frame;