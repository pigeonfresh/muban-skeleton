import type { Story } from '@muban/storybook/dist/client/preview/types-6-0';
import { VideoTest } from './VideoTest';
import { videoTestDefaultMockData } from './VideoTest.mocks';
import type { VideoTestProps } from './VideoTest.template';
import { videoTestTemplate } from './VideoTest.template';

export default {
  title: 'VideoTest',
  argTypes: {
    dataVideo: { control: 'text' },
  },
};

export const Default: Story<VideoTestProps> = () => ({
  component: VideoTest,
  template: videoTestTemplate as any,
});
Default.args = {
  dataVideo: process.env.PUBLIC_PATH + '/static/video/dummy-video-1.mp4',
};

export const Mock: Story<VideoTestProps> = Default.bind({});
Mock.args = videoTestDefaultMockData;