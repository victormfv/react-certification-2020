import React from 'react';
import VideoCard from "./VideoCard.component";
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
describe("VideoCard Test", () => {
    it('renders correctly', () => {
        const tree = renderer.create(<VideoCard key={video.etag} video={video.snippet} />).toJSON();
        expect(tree).toMatchSnapshot();
      });

      it('Text "title" included', () => {
          render(<VideoCard key={video.etag} video={video.snippet} />)
        const i = screen.getByText(/title/i);
        expect(i).toBeInTheDocument();
      });
});