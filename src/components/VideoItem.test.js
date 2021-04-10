import React from 'react';
import VideoItem from "./VideoItem";
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
const video={
    etag: "LRviZfd_p3HDDD2uBk5Qv7zaEQU",
    snippet: {
        title: "title",
        description: "desc",
        thumbnails: {
        medium: {
        url: "url"
        }
        }
}
}
describe("VideoItem Test", () => {
    it('renders correctly', () => {
        const tree = renderer.create(<VideoItem key={video.etag} video={video.snippet} />).toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Text "title" included', () => {
          render(<VideoItem key={video.etag} video={video.snippet} />)
        const i = screen.getByText(/title/i);
        expect(i).toBeInTheDocument();
      });
});